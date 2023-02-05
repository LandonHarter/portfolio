'use client'

import "./hero.css";

// @ts-ignore
import Typewriter from "typewriter-effect/dist/core";
import {useEffect} from "react";
// @ts-ignore
import { Link } from "react-scroll/modules";

export default function MainHero(props:any) {
    useEffect(() => {
        new Typewriter("#title-writer")
            .typeString("Hi! I'm Landon.")
            .start();
    }, []);

    return(
        <div className="hero-container">
            <div className="hero" style={{backgroundColor:props.bg}}>
                <h1 className="title" id="title-writer"></h1>
                <p className="main-hero-content">I'm a 16 year old app & web developer</p>
                <Link to="projects-wave" smooth={true} offset={250} duration={1000} className="next-link"><button className="hero-button">View My Work</button></Link>
            </div>
            <div className="wave" id="about-wave" style={{ backgroundImage:`url('${props.wave}')` }}></div>
        </div>
    );
}