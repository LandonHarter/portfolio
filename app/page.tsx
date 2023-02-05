'use client'

import "./page.css"
import AnimationDiv from "@/app/components/basic-animation/animationdiv";
import MainHero from "@/app/components/home-hero/hero";
import AboutHero from "@/app/components/about-hero/hero";
import ProjectsHero from "@/app/components/projects-hero/hero";
import {useEffect} from "react";
// @ts-ignore
import * as Scroll from "react-scroll/modules";
import {useSearchParams} from "next/navigation";
import SkillsHero from "@/app/components/skills-hero/hero";

export default function Home() {
    const query = useSearchParams();
    useEffect(() => {
        setTimeout(() => {
            Scroll.scroller.scrollTo(query.get("id"), {
                duration: 1000,
                smooth: true,
                offset: 250,
            });
        }, 100);
    }, [query]);

    return (
      <AnimationDiv className="home">
          <MainHero bg="#1f1f1f" title="Hi! I'm Landon." wave="waves/wave2.svg" />
          <AboutHero />
          <ProjectsHero />
          <SkillsHero />
      </AnimationDiv>
  )
}
