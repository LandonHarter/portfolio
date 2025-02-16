import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import Link from "next/link";

export default function Footer() {
	return (
		<footer className="flex w-full items-center justify-between">
			<p className="text-sm text-foreground">
				© {new Date().getFullYear()} Landon Harter
			</p>
			<div className="flex items-center justify-end gap-4">
				<Link href="https://github.com/LandonHarter" target="_blank">
					<Github className="h-5 w-5 stroke-foreground stroke-2" />
				</Link>
				<Link
					href="https://www.linkedin.com/in/landonharter/"
					target="_blank"
				>
					<Linkedin className="h-5 w-5 stroke-foreground stroke-2" />
				</Link>
				<Link href="https://x.com/harter_landon" target="_blank">
					<Twitter className="h-5 w-5 stroke-foreground stroke-2" />
				</Link>
				<Link href="mailto:landonharter@outlook.com" target="_blank">
					<Mail className="h-5 w-5 stroke-foreground stroke-2" />
				</Link>
			</div>
		</footer>
	);
}
