'use client'

import "./hero.css";
import {motion, useAnimation} from "framer-motion";
import {useInView} from "react-intersection-observer";
import {useEffect, useState} from "react";

import {Languages, Libraries, Tools} from "./skills";

export default function SkillsHero() {
    const loadAnimation = {
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 80 },
    }
    const fadeAnimation = {
        visible: { opacity: 1 },
        hidden: { opacity: 0 }
    }

    const control = useAnimation();
    const skillsControl = useAnimation();

    const [ref, inView] = useInView();
    const [selectedSection, setSelectedSection] = useState("Languages");
    const [selectedSkills, setSelectedSkills] = useState(Languages);

    useEffect(() => {
        if (inView) {
            control.start("visible");
        }
    }, [control, inView]);

    useEffect(() => {
       skillsControl.start("visible");
    }, [skillsControl, selectedSkills]);

    return(
        <motion.div ref={ref} transition={{duration: 0.8}} variants={loadAnimation} initial="hidden" animate={control} className="skills-hero">
            <h1 className="skills-title">Skills</h1>
            <div className="small-divider"></div>
            <p className="skills-subtitle">See what I know!</p>
            <div className="skills-container">
                <div className="skills-selector">
                    <h1 className={`skill-section ${selectedSection === "Languages" && "skill-section-selected"}`} onClick={() => {
                        setSelectedSection("Languages");
                        setSelectedSkills(Languages);
                    }}>Languages</h1>
                    <h1 className={`skill-section ${selectedSection === "Libraries" && "skill-section-selected"}`} onClick={() => {
                        setSelectedSection("Libraries");
                        setSelectedSkills(Libraries);
                    }}>Web</h1>
                    <h1 className={`skill-section ${selectedSection === "Tools" && "skill-section-selected"}`} onClick={() => {
                        setSelectedSection("Tools");
                        setSelectedSkills(Tools);
                    }}>Tools</h1>
                </div>
                <motion.div className="selected-skills">
                    {selectedSkills.map((skill) =>
                        <motion.div key={skill.name} className="skill" transition={{duration: 0.2}} variants={fadeAnimation} initial="hidden" animate={skillsControl}>
                            <img src={skill.imgSrc} />
                            <p>{skill.name}</p>
                        </motion.div>
                    )}
                </motion.div>
            </div>
        </ motion.div>
    );
}