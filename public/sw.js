const CACHE_NAME = "m4dd0c-portfolio-v4";
const OFFLINE_URL = "/offline.html";
const MAX_CACHE_ENTRIES = 50;

const PRECACHE_ASSETS = [
  "/",
  OFFLINE_URL,
  "/proof-of-work",
  "/blog",
];

// Only cache-first for assets matching these patterns (versioned/hashed/static)
const CACHEABLE_ASSET_PATTERNS = [
  /\.(?:js|css|woff2?|ttf|eot|ico|svg|png|jpe?g|webp|avif|gif)$/, 
];

function isCacheableAsset(url) {
  return CACHEABLE_ASSET_PATTERNS.some((pattern) => pattern.test(url.pathname));
}

// Trim the cache to a max number of entries (evict oldest first)
async function trimCache(cacheName, maxEntries) {
  const cache = await caches.open(cacheName);
  const keys = await cache.keys();
  if (keys.length > maxEntries) {
    await cache.delete(keys[0]);
    await trimCache(cacheName, maxEntries);
  }
}

// INSTALL
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(PRECACHE_ASSETS))
  );
  self.skipWaiting();
});

// ACTIVATE
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

// FETCH
self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;

  const url = new URL(event.request.url);

  // Ignore API routes
  if (url.pathname.startsWith("/api")) return;

  // Ignore Next.js build files (dev especially)
  if (url.pathname.startsWith("/_next/")) return;

  // Ignore external origins
  if (url.origin !== self.location.origin) return;

  // Handle navigation requests (HTML pages)
  // Network-first, fall back to precached page, then offline page
  if (event.request.mode === "navigate") {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          // Update the cache with the fresh response
          const clone = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, clone);
          }).catch((err) => console.warn("[SW] Failed to cache navigation response:", err));
          return response;
        })
        .catch(() =>
          caches
            .match(event.request)
            .then((cached) => cached || caches.match(OFFLINE_URL))
        )
    );
    return;
  }

  // Stale-while-revalidate for cacheable static assets only
  if (isCacheableAsset(url)) {
    event.respondWith(
      caches.match(event.request).then((cached) => {
        // Fire off a revalidation fetch in the background
        const fetchPromise = fetch(event.request)
          .then((response) => {
            if (response && response.status === 200 && response.type === "basic") {
              const clone = response.clone();
              caches.open(CACHE_NAME).then((cache) => {
                cache.put(event.request, clone);
                trimCache(CACHE_NAME, MAX_CACHE_ENTRIES);
              }).catch((err) => console.warn("[SW] Cache put failed:", err));
            }
            return response;
          })
          .catch((err) => {
            console.warn("[SW] Fetch failed for asset:", event.request.url, err);
            // If we have a cached version, it was already returned; otherwise return a network error
            return cached || Response.error();
          });

        // Return cached version immediately if available, otherwise wait for network
        return cached || fetchPromise;
      })
    );
    return;
  }

  // For all other same-origin GET requests: network-only (no caching)
});