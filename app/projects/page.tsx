'use client'

import "./projects.css";
import AnimationDiv from "@/app/components/basic-animation/animationdiv";
import ProjectCard from "@/app/components/project-card/project-card";

import Projects from "./project-data";
import {useEffect} from "react";

export default function ProjectsPage() {
    const cards = Projects.map((project) =>
        <ProjectCard key={Math.random() * 100} title={project.name} desc={project.desc} displayImg={project.img} link={project.link} tags={project.tags} />
    );

    // Starts at bottom of the page due to scrolling on the previous page
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return(
        <AnimationDiv className="projects-div">
            <h1 className="projects-title">Projects</h1>
            <div className="project-container">
                {cards}
            </div>
        </AnimationDiv>
    );
}