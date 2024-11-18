// made using chatgpt3.5

// Create a utility function to check if the website is in desktop mode
export function isDesktop() {
  if (typeof window !== "undefined") {
    const screenWidth = window.innerWidth;
    const desktopThreshold = 768;
    return screenWidth >= desktopThreshold;
  }
  return true;
}
