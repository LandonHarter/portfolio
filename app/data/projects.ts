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
    }
};

const Projects: Project[] = [
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
    {
        name: "Spicy Takes",
        description: "A social media platform for sharing your hot takes.",
        image: "/images/projects/hottakes.png",
        link: "https://spiicytakes.vercel.app",
        github: "https://github.com/LandonHarter/hottakes",
        tags: ["Next.js", "TypeScript", "Firebase", "Tailwind CSS"]
    }
];
export default Projects;