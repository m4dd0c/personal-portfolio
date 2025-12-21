import { SITE_URL } from "@/lib/constants";
import { MetadataRoute } from "next";

type changeFrequency =
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const defaultPages = [
        {
            url: SITE_URL,
            lastModified: new Date(),
            changeFrequency: "yearly" as changeFrequency,
            priority: 1,
        },
        {
            url: `${SITE_URL}/proof-of-work`,
            lastModified: new Date(),
            changeFrequency: "monthly" as changeFrequency,
            priority: 0.9,
        },
        {
            url: `${SITE_URL}/blog`,
            lastModified: new Date(),
            changeFrequency: "weekly" as changeFrequency,
            priority: 0.9,
        },
    ];

    return defaultPages;
}