import Project from "@/components/project";

export const metadata = {
	title: "Landon Harter - Projects",
};

export default function Projects() {
	return (
		<main className="flex flex-col gap-6">
			<Project
				name="Kodisc"
				description="Create stunning animations with AI in seconds."
				href="https://kodisc.com"
				role="Founder"
				time="2025 - Present"
			/>
			<Project
				name="dev.kodisc"
				description="The incredible technology behind Kodisc, all behind an API."
				href="https://dev.kodisc.com"
				role="Founder"
				time="2025 - Present"
			/>
			<Project
				name="Draftl"
				description="Fixing college essays with AI one line at a time."
				href="https://draftl.com"
				role="Founder"
				time="2024 - Present"
			/>
			<Project
				name="Effinity"
				description="Learning personal finance can be hard."
				href="https://learneffinity.com"
				role="Developer"
				time="2024 - Present"
			/>
			<Project
				name="Hackathon"
				description="Projects built in 2 or 3 days for hackathons."
				href="https://devpost.com/LandonHarter"
				role="Developer"
				time="2024 - Present"
			/>
			<Project
				name="Opal"
				description="A new way to study, powered by AI."
				href="https://learnopal.com"
				role="CoFounder"
				time="2024 - 2025"
			/>
			<Project
				name="Radium"
				description="A full game engine built in Java. Wow."
				href="https://github.com/radiumgame/radium"
				role="Founder"
				time="2021 - 2023"
			/>
		</main>
	);
}
