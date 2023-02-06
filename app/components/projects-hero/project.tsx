'use client'

import "./project.css";
import Link from "next/link";

export default function ProjectHeroExample(props:any) {
    return(
        <div className="project-example">
            <img src={props.imgSrc} className="project-image" />
            <div className="project-desc">
                <h1>{props.name}</h1>
                <p>{props.desc}</p>

                <div className="project-button-container">
                    <Link href={props.link} target="_blank" style={{textDecoration: "none"}}><button><img src="/home.png" className="img-button" />Visit Project</button></Link>
                    <Link href={props.code} target="_blank" style={{textDecoration: "none"}}><button><img src="/skills/github.png" className="img-button" />Source Code</button></Link>
                </div>
            </div>
        </div>
    );
}