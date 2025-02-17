import GithubHistory from "@/components/github";

export const metadata = {
	title: "Landon Harter - Stats",
};

export default function Stats() {
	return (
		<main className="flex flex-col gap-12">
			<div className="flex flex-col gap-4">
				<h3 className="text-2xl font-medium">stats</h3>
				<p className="w-5/6 text-base opacity-80">
					check out what i've been up to lately
				</p>
			</div>
			<div className="flex flex-col gap-4">
				<p className="text-sm opacity-80">latest github commit</p>
				<GithubHistory />
			</div>
		</main>
	);
}
