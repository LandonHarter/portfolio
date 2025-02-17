import { fetchGitHubStats } from "@/lib/github";
import Link from "next/link";

function timeAgo(date: Date) {
	const seconds = Math.floor(
		(new Date().getTime() - new Date(date).getTime()) / 1000
	);

	let interval = seconds / 31536000; // years
	if (interval > 1) return Math.floor(interval) + " years ago";

	interval = seconds / 2592000; // months
	if (interval > 1) return Math.floor(interval) + " months ago";

	interval = seconds / 86400; // days
	if (interval > 1) return Math.floor(interval) + " days ago";

	interval = seconds / 3600; // hours
	if (interval > 1) return Math.floor(interval) + " hours ago";

	interval = seconds / 60; // minutes
	if (interval > 1) return Math.floor(interval) + " minutes ago";

	return Math.floor(seconds) + " seconds ago";
}

export default async function GithubHistory() {
	const stats = await fetchGitHubStats();
	if (!stats) return null;

	return (
		<Link
			href={stats.commits[0].repository.url}
			target="_blank"
			className="border-foreground/10 flex flex-col gap-3 border p-4 transition-opacity duration-200 hover:opacity-80"
		>
			<div className="flex items-center gap-2">
				<svg
					className="h-3 w-3 flex-shrink-0"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				>
					<line x1="6" y1="3" x2="6" y2="15"></line>
					<circle cx="18" cy="6" r="3"></circle>
					<circle cx="6" cy="18" r="3"></circle>
					<path d="M18 9a9 9 0 0 1-9 9"></path>
				</svg>
				<span className="text-xs opacity-80">
					{stats.commits[0].repository.owner.login}/
					{stats.commits[0].repository.name}
				</span>
			</div>
			<div className="text-sm">{stats.commits[0].messageHeadline}</div>
			<div className="flex items-center gap-2">
				<svg
					className="h-3 w-3"
					width="16"
					height="16"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				>
					<circle cx="12" cy="12" r="10"></circle>
					<polyline points="12 6 12 12 16 14"></polyline>
				</svg>
				<span className="text-xs opacity-80">
					{timeAgo(new Date(stats.commits[0].committedDate))}
				</span>
			</div>
		</Link>
	);
}
