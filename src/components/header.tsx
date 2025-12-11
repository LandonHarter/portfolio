import Link from "next/link";

export default function Header() {
	return (
		<header className="flex w-full items-center justify-between">
			<Link href="/">
				<h1 className="text-xl font-semibold md:text-3xl">
					landon harter
				</h1>
			</Link>
			<nav className="flex items-center justify-end gap-6">
				<Link href="/work">work</Link>
				<Link href="/stats">stats</Link>
				<Link href="/resume.pdf" target="_blank">
					resume
				</Link>
			</nav>
		</header>
	);
}
