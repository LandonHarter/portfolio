'use client'

import {motion, useAnimation} from "framer-motion";
import "./hero.css";
import {useInView} from "react-intersection-observer";
import {useEffect} from "react";

export default function AboutHero() {
    const fade = {
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0.9 },
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
              <motion.div ref={ref} transition={{duration: 0.8}} variants={fade} initial="hidden" animate={control} className="hero-container" id="about">
                  <div className="content-container">
                      <div>
                          <h1 className="title">About Me</h1>
                          <p className="content">Hello! My name is Landon and I enjoy creating and developing software. My development journey began in 2017 and my passion has only grown more. I am currently a sophomore in high school with no professional experience, although I strive to be there one day. I have experience in countless technologies and I only plan to grow that number. I love learning new concepts and languages to expand my skills.</p>
                      </div>
                      <div>
                        <img className="language-grid" src="/language-grid.png" alt="language grid" />
                      </div>
                  </div>
              </motion.div>
              <div className="wave" id="projects-wave" style={{ backgroundImage:`url('waves/wave1.svg')` }}></div>
        </div>
    );
}