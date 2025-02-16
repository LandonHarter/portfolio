import Link from "next/link";

export default function Project({
	name,
	description,
	role,
	time,
	href,
}: {
	name: string;
	description: string;
	role: string;
	time: string;
	href: string;
}) {
	return (
		<Link
			href={href}
			target="_blank"
			className="flex w-full flex-col gap-1 transition-opacity duration-200 hover:opacity-70"
		>
			<div className="grid grid-cols-[50px_auto] gap-4">
				<h3 className="text-base font-medium">{name}</h3>
				<p className="text-end text-base opacity-80">{description}</p>
			</div>
			<div className="flex items-center justify-between">
				<p className="text-sm opacity-70">{role}</p>
				<p className="text-end text-sm opacity-70">{time}</p>
			</div>
		</Link>
	);
}
