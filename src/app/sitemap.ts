import { MetadataRoute } from "next";

type ChangeFrequency =
	| "never"
	| "always"
	| "hourly"
	| "daily"
	| "weekly"
	| "monthly"
	| "yearly"
	| undefined;
function route(
	url: string,
	priority: number = 0.5,
	changeFrequency: ChangeFrequency = undefined
) {
	return {
		url: process.env.NEXT_PUBLIC_BASE_URL + url,
		lastModified: new Date().toISOString(),
		priority,
		changeFrequency,
	};
}

export const routes: MetadataRoute.Sitemap = [
	route("/", 1.0),
	route("/work", 0.8),
	route("/stats", 0.8),
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	return routes;
}
