"use client";

import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";

if (typeof window !== "undefined") {
	posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
		ui_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
		api_host: "/ingest",
		autocapture: false,
	});
}

export default function Providers({ children }: { children: React.ReactNode }) {
	return <PostHogProvider client={posthog}>{children}</PostHogProvider>;
}
