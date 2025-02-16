import type { MetadataRoute } from "next";
import { routes } from "./sitemap";

export default function robots(): MetadataRoute.Robots {
	return {
		rules: {
			userAgent: "*",
			allow: routes.map((route) =>
				route.url.replace(process.env.NEXT_PUBLIC_BASE_URL!, "")
			),
			disallow: [],
		},
		sitemap: `${process.env.NEXT_PUBLIC_BASE_URL}/sitemap.xml`,
	};
}
