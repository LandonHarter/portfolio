'use client'

import "./header.css";
// @ts-ignore
import { Link as ScrollLink } from "react-scroll/modules";
import Link from "next/link";
import {useEffect, useState} from "react";
import {usePathname} from "next/navigation";

export default function Header() {
    const [mobile, setMobile] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const path = usePathname();
    const isHome = path === "/";

    useEffect(() => {
        window.onresize = () => {
          setMobile(window.innerWidth < 1200);
        };
        setMobile(window.innerWidth < 1200);
    }, []);

    useEffect(() => {
        const checkbox = document.getElementById("hamburger");
        if (checkbox) { // @ts-ignore
            checkbox.checked = mobileMenuOpen;
        }
    }, [mobileMenuOpen]);

    useEffect(() => {
        if (!mobile && mobileMenuOpen) setMobileMenuOpen(false);
    }, [mobile]);

    return(
        <div className="header" id="header">
            <div className="nav">
                <div className="left-nav nav-section">
                    <img src="/logo_transparent.png" onClick={() => window.location.href = "/"} className="logo" />
                </div>

                {mobile ? mobileNav(setMobileMenuOpen) : (isHome ? homeDesktopNav() : desktopNav())}
            </div>
            {isHome ? homeMobileNavMenu(mobileMenuOpen, setMobileMenuOpen) : mobileNavMenu(mobileMenuOpen, setMobileMenuOpen)}
        </div>
    );
}

function homeDesktopNav() {
    return(
        <div className="right-nav nav-section">
            <ScrollLink to="about-wave" smooth={true} offset={250} duration={1000} className="next-link">
                <div className="nav-link-container">
                    <span className="nav-link">About</span>
                </div>
            </ScrollLink>
            <ScrollLink to="projects-wave" smooth={true} offset={250} duration={1000} className="next-link">
                <div className="nav-link-container">
                    <span className="nav-link">Projects</span>
                </div>
            </ScrollLink>
            <ScrollLink to="skills-wave" smooth={true} offset={250} duration={1000} className="next-link">
                <div className="nav-link-container">
                    <span className="nav-link">Skills</span>
                </div>
            </ScrollLink>
            <Link href="mailto:landonharter@outlook.com" target="_blank"><button className="contact-button">Contact Me</button></Link>
        </div>
    );
}

function desktopNav() {
    return(
        <div className="right-nav nav-section">
            <Link href={{
                pathname: "/",
                query: { id: "about-wave" }
            }} className="next-link">
                <div className="nav-link-container">
                    <span className="nav-link">About</span>
                </div>
            </Link>
            <Link href={{
                pathname: "/",
                query: { id: "projects-wave" }
            }} className="next-link">
                <div className="nav-link-container">
                    <span className="nav-link">Projects</span>
                </div>
            </Link>
            <Link href={{
                pathname: "/",
                query: { id: "skills-wave" }
            }} className="next-link">
                <div className="nav-link-container">
                    <span className="nav-link">Skills</span>
                </div>
            </Link>
            <Link href="mailto:landonharter@outlook.com" target="_blank"><button className="contact-button">Contact Me</button></Link>
        </div>
    );
}

function mobileNav(setMobileOpenFunction:any) {
    return(
        <div className="right-nav">
            <input onChange={e => setMobileOpenFunction(e.target.checked)} className="hamburger-input" id="hamburger" type="checkbox" />
            <span></span>
            <span></span>
            <span></span>
        </div>
    );
}

function homeMobileNavMenu(open:boolean, setMobileMenuOpen:any) {
    return(
        <div className={`mobile-nav-menu`} style={{ opacity: (open ? "1" : "0") }}>
            <div className="mobile-nav-link">
                <ScrollLink to="about-wave" smooth={true} offset={250} duration={1000} className="next-link next-link-color">
                    <h1 className="link-text" onClick={() => {
                        setMobileMenuOpen(false);
                    }}>About</h1>
                </ScrollLink>
            </div>
            <div className="mobile-nav-link">
                <ScrollLink to="projects-wave" smooth={true} offset={250} duration={1000} className="next-link next-link-color">
                    <h1 className="link-text" onClick={() => {
                        setMobileMenuOpen(false);
                    }}>Projects</h1>
                </ScrollLink>
            </div>
            <div className="mobile-nav-link">
                <ScrollLink to="skills-wave" smooth={true} offset={250} duration={1000} className="next-link next-link-color">
                    <h1 className="link-text" onClick={() => {
                        setMobileMenuOpen(false);
                    }}>Skills</h1>
                </ScrollLink>
            </div>
        </div>
    );
}

function mobileNavMenu(open:boolean, setMobileMenuOpen:any) {
    return(
        <div className={`mobile-nav-menu`} style={{ opacity: (open ? "1" : "0") }}>
            <div className="mobile-nav-link">
                <Link href={{
                    pathname: "/",
                    query: { id: "about-wave" }
                }} className="next-link next-link-color">
                    <h1 className="link-text" onClick={() => {
                        setMobileMenuOpen(false);
                    }}>About</h1>
                </Link>
            </div>
            <div className="mobile-nav-link">
                <Link href={{
                    pathname: "/",
                    query: { id: "projects-wave" }
                }} className="next-link next-link-color">
                    <h1 className="link-text" onClick={() => {
                        setMobileMenuOpen(false);
                    }}>Projects</h1>
                </Link>
            </div>
            <div className="mobile-nav-link">
                <Link href={{
                    pathname: "/",
                    query: { id: "skills-wave" }
                }} className="next-link next-link-color">
                    <h1 className="link-text" onClick={() => {
                        setMobileMenuOpen(false);
                    }}>Skills</h1>
                </Link>
            </div>
        </div>
    );
}