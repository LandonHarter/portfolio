import Project from "@/components/project";

export const metadata = {
	title: "Landon Harter - Work",
};

export default function Projects() {
	return (
		<main className="flex flex-col gap-10">
			<section className="flex flex-col gap-6">
				<h2 className="text-xl font-semibold">Work</h2>
				<Project
					name="Method Financial"
					description="Moving to NYC in Summer 2026!"
					href="https://methodfi.com/"
					role="Software Engineer Intern"
					time="2026 - Present"
				/>
				<Project
					name="Kodisc"
					description="Create stunning animations with AI in seconds."
					href="https://kodisc.com"
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
					name="Opal"
					description="A new way to study, powered by AI."
					href="https://learnopal.com"
					role="CoFounder"
					time="2024 - 2025"
				/>
			</section>
			<section className="flex flex-col gap-6">
				<h2 className="text-xl font-semibold">Projects</h2>
				<Project
					name="Radium"
					description="A full game engine built in Java. Wow."
					href="https://github.com/LandonHarter/radium"
					role="Solo Developer"
					time="2021 - 2023"
				/>
				<Project
					name="Maylang"
					description="Programming language written in C, named after Dusty May."
					href="https://github.com/LandonHarter/maylang"
					role="Solo Developer"
					time="2026"
				/>
				<Project
					name="Pullrank"
					description="Open source reputation (not production, just for fun)."
					href="https://pullrank.dev"
					role="Solo Developer"
					time="2026"
				/>
				<Project
					name="Renegent"
					description="LLM management system."
					href="https://github.com/LandonHarter/renegent"
					role="Solo Developer"
					time="2025"
				/>
				<Project
					name="Minecraft"
					description="Minecraft clone written in Java."
					href="https://github.com/LandonHarter/minecraft"
					role="Solo Developer"
					time="2026"
				/>
				<Project
					name="Hackathon"
					description="Projects built in 2 or 3 days for hackathons."
					href="https://devpost.com/LandonHarter"
					role="Solo & Team Effort"
					time="2024 - Present"
				/>
			</section>
		</main>
	);
}
