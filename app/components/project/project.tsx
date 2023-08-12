'use client'

import { Project, Tags } from '@/app/data/projects';
import styles from './project.module.scss';
import FadeRiseAnimation from '../fade-rise/faderise';
import { useContext, useState } from 'react';
import Link from 'next/link';
import PageTransitionContext, { handlePageTransition } from '@/app/context/transition';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function Project({ project, index }: { project: Project, index: number }) {
    const router = useRouter();
    const pushPageTransition = useContext(PageTransitionContext);

    return (

        <FadeRiseAnimation delay={(index / 10) + 0.2} options={{ margin: '50px', once: true }} props={{
            className: styles.project_container
        }}>
            <div className={styles.project}>
                <div className={styles.card_front} style={{
                    backgroundImage: `url(${project.image})`
                }} />
                <div className={styles.card_back}>
                    <Link href={`/projects/${project.name.toLowerCase()}`} onClick={(e) => {
                        handlePageTransition(e, `/projects/${project.name.toLowerCase()}`, router, pushPageTransition)
                    }} style={{ textDecoration: 'none' }}>
                        <div className={styles.project_details}>
                            <div className={styles.top}>
                                <h3>{project.name}</h3>
                                <div className={styles.project_links}>
                                    <Link href={project.github} target='_blank' className={styles.project_link}>
                                        <Image src='/images/icons/github.png' alt='link' width={30} height={30} style={{ marginRight: 5 }} />
                                    </Link>
                                    <Link href={project.link} target='_blank' className={styles.project_link}>
                                        <Image src='/images/icons/link.png' alt='link' width={25} height={25} style={{ marginRight: 5 }} />
                                    </Link>
                                </div>
                            </div>
                            <p>{project.description}</p>
                        </div>
                    </Link>

                    <div className={styles.tags}>
                        {project.tags.map((tagType, index) => {
                            const tag = Tags[tagType];
                            return (
                                <div key={index} className={styles.tag} style={{
                                    backgroundColor: tag.color
                                }}>
                                    <p style={{
                                        color: tag.textColor
                                    }}>{tag.name}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </FadeRiseAnimation>
    );
}