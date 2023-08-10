import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: "https://landonharter.me",
            lastModified: new Date()
        },
        {
            url: "https://landonharter.me/projects",
            lastModified: new Date()
        }
    ];
}