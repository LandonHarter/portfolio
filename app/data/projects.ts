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

};

const Projects: Project[] = [

];
export default Projects;