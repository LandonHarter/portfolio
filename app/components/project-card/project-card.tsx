'use client'

import "./project-card.css";

import Link from "next/link";

export default function ProjectCard(props:any) {
    const tags = props.tags.map((tag:any) =>
        <div key={Math.random() * 100} className="project-tag" style={{backgroundColor:tag.color}}><p style={{color:tag.textColor}}><span style={{color:tag.textColor}}>#</span>{tag.tag}</p></div>
    );

    return(
        <Link href={props.link} target="_blank" className="next-link">
            <div className="card">
                <div className="card-content">
                    <img src={props.displayImg} className="display-image" />
                    <h1 className="card-title">{props.title}</h1>
                    <p className="card-desc">{props.desc}</p>
                </div>

                <div className="project-tags">
                    {tags}
                </div>
            </div>
        </Link>
    )
}