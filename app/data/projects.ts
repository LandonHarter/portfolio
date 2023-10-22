export interface Project {
    name: string;
    description: string;
    image: string;
    link: string;
    github: string;
    tags: string[];
}

export interface Tag {
    name: string;
    color: string;
    textColor: string;
}

export const Tags: { [tag: string]: Tag } = {
    "React": {
        name: "React",
        color: "#61DAFB",
        textColor: "#000000"
    },
    "Next.js": {
        name: "Next.js",
        color: "#000000",
        textColor: "#FFFFFF"
    },
    "TypeScript": {
        name: "TypeScript",
        color: "#007ACC",
        textColor: "#FFFFFF"
    },
    "Firebase": {
        name: "Firebase",
        color: "#FFCA28",
        textColor: "#000000"
    },
    "Google Cloud": {
        name: "Google Cloud",
        color: "#4285F4",
        textColor: "#FFFFFF"
    },
    "AI": {
        name: "AI",
        color: "var(--p350)",
        textColor: "var(--p850)"
    },
    "Java": {
        name: "Java",
        color: "#007396",
        textColor: "#FFFFFF"
    },
    "Gradle": {
        name: "Gradle",
        color: "#02303A",
        textColor: "#FFFFFF"
    },
    "OpenGL": {
        name: "OpenGL",
        color: "#5586A4",
        textColor: "#FFFFFF"
    },
    "Tailwind CSS": {
        name: "Tailwind CSS",
        color: "#38B2AC",
        textColor: "#FFFFFF"
    },
    "Hackathon": {
        name: "Hackathon",
        color: "#FFF",
        textColor: "#000"
    },
};

const Projects: Project[] = [
    {
        name: 'EcoTrackr',
        description: 'Track your carbon footprint and make a difference. Built in 48 hours for a hackathon.',
        image: '/images/projects/ecotrackr.jpg',
        link: 'https://ecotrackr.vercel.app',
        github: 'https://github.com/LandonHarter/ecotrackr',
        tags: ['Next.js', 'TypeScript', 'Firebase', 'Hackathon']
    },
    {
        name: 'Graider',
        description: 'Get a second opinion on your essay, from an AI. Built in 48 hours for a hackathon.',
        image: '/images/projects/graider.png',
        link: 'https://graider.vercel.app',
        github: 'https://github.com/LandonHarter/graider',
        tags: ['Next.js', 'TypeScript', 'Firebase', 'Hackathon']
    },
    {
        name: 'TutorTime',
        description: 'Volunteer as a tutor or get tutored for free in any subject. Built in 48 hours for a hackathon.',
        image: '/images/projects/tutortime.png',
        link: 'https://tutortime.vercel.app',
        github: 'https://github.com/LandonHarter/tutortime',
        tags: ['Next.js', 'TypeScript', 'Firebase', 'Hackathon']
    },
    {
        name: 'Oppur',
        description: 'Search for student opportunities in a tinder like UI. Built in 48 hours for a hackathon.',
        image: '/images/projects/oppur.jpg',
        link: 'https://oppur.vercel.app',
        github: 'https://github.com/LandonHarter/oppur',
        tags: ['Next.js', 'TypeScript', 'Firebase', 'Hackathon']
    },
    {
        name: "BlitzEDU",
        description: "Boost your study productivity in and out of the classroom with proven study methods and new AI tools.",
        image: "/images/projects/blitz.png",
        link: "https://blitzedu.vercel.app",
        github: "https://github.com/LandonHarter/blitz",
        tags: ["Next.js", "TypeScript", "Firebase", "AI"]
    },
    {
        name: "Radium",
        description: "Create photo-realistic scenes and games with a simple editor and a powerful engine.",
        image: "/images/projects/radium.png",
        link: "https://radiumengine.vercel.app/docs/examples/first-script",
        github: "https://github.com/radiumgame/radium",
        tags: ["Java", "Gradle", "OpenGL"]
    },
];
export default Projects;