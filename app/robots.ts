import { SITE_URL } from "@/constant";
import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: ["/"],
    },
    sitemap: [`${SITE_URL}/sitemap.xml`],
  };
}
