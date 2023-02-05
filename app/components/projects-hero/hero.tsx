'use client'

import "./hero.css";
import AnimationDiv from "@/app/components/basic-animation/animationdiv";
import Link from "next/link";
import ProjectHeroExample from "@/app/components/projects-hero/project";

import ProjectData from "./project-data";
import {motion, useAnimation} from "framer-motion";
import {useInView} from "react-intersection-observer";
import {useEffect} from "react";

export default function ProjectsHero() {
    const fade = {
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 80 },
    }
    const control = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            control.start("visible");
        }
    }, [control, inView]);

    return(
        <div>
        <motion.div ref={ref} transition={{duration: 0.8}} variants={fade} initial="hidden" animate={control} className="project-hero">
            <h1 className="projects-hero-title">Projects</h1>
            <div className="small-divider"></div>
            <p className="projects-hero-subtitle">See some of my favorite projects</p>

            {ProjectData.map((project) =>
                <ProjectHeroExample key={Math.random()} name={project.name} desc={project.desc} imgSrc={project.img} link={project.link} code={project.code} />
            )}

            <Link href="/projects">
                <button className="all-projects-button" onClick={() => window.location.href = "/projects"}>More Projects <svg className="button-arrow" width="10" height="10" viewBox="0 0 10 10" aria-hidden="true">
                    <g fillRule="evenodd">
                        <path className="arrow-line" d="M0 5h7"></path>
                        <path className="arrow-tip" d="M1 1l4 4-4 4"></path>
                    </g>
                </svg></button>
            </Link>
        </motion.div>
            <div className="wave" id="skills-wave" style={{ backgroundImage:`url('waves/wave2.svg')` }}></div>
        </div>
    );
}