const textLight = "#e1e1e1";
const textDark = "#131313";
const bgDark = "#28292e";

const javascriptYellow = "#f7df1d";
const typescriptBlue = "#3178c6";
const javaOrange = "#f58118";
const reactBlue = "#62dafc";
const nodeGreen = "#77af64";
const gradleGreen = "#45eab0";
const pythonBlue = "#3973a3";
const pythonYellow = "#ffde59";
const firebaseOrange = "#fba516";
const csharpPurple = "#953dad";
const basicPurple = "#875F9A";

export default [
    {
        name: "Radium",
        desc: "Radium provides an easy interface for the creation of 3D scenes with complex lighting and shadows. It also includes scripting, allowing for the creation of games and interactive demos.",
        img: "/projects/radium/radium.jpg",
        link: "https://radiumengine.com",
        tags: [
            {
                tag: "java",
                color: javaOrange,
                textColor: textDark,
            },
            {
                tag: "python",
                color: pythonBlue,
                textColor: pythonYellow,
            },
            {
                tag: "gradle",
                color: bgDark,
                textColor: gradleGreen,
            },
            {
                tag: "opengl",
                color: "#6785a1",
                textColor: textDark,
            },
        ],
    },
    {
        name: "Portfolio",
        desc: "My development portfolio is a place where I can showcase my projects and skills. As I learn more and build more, I can add more to show my progress and development journey.",
        img: "/projects/portfolio/portfolio.png",
        link: "https://landonharter.me",
        tags: [
            {
                tag: "node",
                color: nodeGreen,
                textColor: textDark,
            },
            {
                tag: "typescript",
                color: typescriptBlue,
                textColor: textLight,
            },
            {
                tag: "nextjs",
                color: "black",
                textColor: textLight,
            },
        ],
    },
    {
        name: "Hot Takes",
        desc: "A simple social media where you can share and view peoples hot takes. Comment and discuss others takes and maybe learn something.",
        img: "/projects/hottakes/ss.png",
        link: "https://spicytakes.vercel.app",
        tags: [
            {
                tag: "node",
                color: nodeGreen,
                textColor: textDark,
            },
            {
                tag: "typescript",
                color: typescriptBlue,
                textColor: textLight,
            },
            {
                tag: "nextjs",
                color: "black",
                textColor: textLight,
            },
            {
                tag: "firebase",
                color: firebaseOrange,
                textColor: textDark,
            },
        ],
    },
    {
        name: "Radium Project Manager",
        desc: "A project management organizer for Radium. It can create projects and install editor versions to make the hassle of installation easy.",
        img: "/projects/rpm/rpm.png",
        link: "https://github.com/radiumgame/radium-project-manager",
        tags: [
            {
                tag: "java",
                color: javaOrange,
                textColor: textDark,
            },
            {
                tag: "UI/UX",
                color: bgDark,
                textColor: gradleGreen,
            },
            {
                tag: "project-management",
                color: basicPurple,
                textColor: textLight,
            },
        ],
    },
    {
        name: "Radium Website",
        desc: "A home page for Radium, an open source game engine created and developed by me. This site contains documentation as well as tutorials for the engine.",
        img: "/projects/radiumweb/ss.png",
        link: "https://radiumengine.com",
        tags: [
            {
                tag: "node",
                color: nodeGreen,
                textColor: textDark,
            },
            {
                tag: "typescript",
                color: typescriptBlue,
                textColor: textLight,
            },
            {
                tag: "docusaurus",
                color: bgDark,
                textColor: "#25C19F",
            },
            {
                tag: "documentation",
                color: basicPurple,
                textColor: textLight,
            },
        ],
    },
    {
        name: "Unity Networking",
        desc: "A few scripts to make networking and multiplayer way easier. Multiplayer is way to hard with many concepts and code needed to implement just basic features. Unity Networking provides a high level API to make networking more fun.",
        img: "/projects/unitynet/ss.png",
        link: "https://radiumengine.com",
        tags: [
            {
                tag: "csharp",
                color: csharpPurple,
                textColor: textLight,
            },
            {
                tag: "unity",
                color: "black",
                textColor: textLight,
            },
            {
                tag: "networking",
                color: bgDark,
                textColor: reactBlue,
            },
        ],
    },
];