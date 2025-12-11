import Link from "next/link";

export default function Home() {
	return (
		<main className="flex w-full flex-col gap-12">
			<div className="flex flex-col gap-4">
				<h3 className="text-2xl font-medium">hey guys 👋</h3>
				<p className="w-5/6 text-base opacity-80">
					i got a really diverse music taste and make cool projects
					and stuff.
				</p>
			</div>

			<div className="flex flex-col gap-4">
				<h3 className="text-2xl font-medium">about me</h3>
				<p className="w-5/6 text-base opacity-80">
					i am landon, a software engineer and businessman from
					richland, mi currently building{" "}
					<Link
						href="https://kodisc.com"
						target="_blank"
						className="underline"
					>
						kodisc.com
					</Link>{" "}
					and{" "}
					<Link
						href="https://draftl.com"
						target="_blank"
						className="underline"
					>
						draftl.com
					</Link>
					, with plans to work at{" "}
					<Link
						href="https://methodfi.com/"
						target="_blank"
						className="underline"
					>
						Method Financial
					</Link>{" "}
					in NYC in Summer 2025!
				</p>
			</div>
		</main>
	);
}
