import Link from "next/link";

export default function Home() {
	return (
		<main className="flex w-full flex-col gap-12">
			<div className="flex flex-col gap-4">
				<h3 className="text-2xl font-medium">hey guys 👋</h3>
				<p className="text-base opacity-80">
					i got a really diverse music taste and cool projects and
					stuff.
				</p>
			</div>

			<div className="flex flex-col gap-4">
				<h3 className="text-2xl font-medium">about me</h3>
				<p className="text-base opacity-80">
					i am landon, a software engineer from richland, mi. i am
					currently building{" "}
					<Link
						href="https://kodisc.com"
						target="_blank"
						className="underline"
					>
						kodisc.com
					</Link>{" "}
					and i also like to think i'm pretty good at coding.
				</p>
			</div>
		</main>
	);
}
