'use client'

import styles from './header.module.scss'
import Image from 'next/image';
import { useContext } from 'react';
import ThemeContext from '@context/theme';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import PageTransitionContext, { handlePageTransition } from '@context/transition';
import { motion } from 'framer-motion';

export default function Header() {
    const router = useRouter();
    const route = usePathname().split('/')[1];
    const pushPageTransition = useContext(PageTransitionContext);
    const theme = useContext(ThemeContext);

    return (
        <header className={styles.header}>
            <motion.section
                className={styles.header_left}
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.5 }}
            >
                <Link href='/' onClick={(e) => {
                    handlePageTransition(e, '/', router, pushPageTransition);
                }}>
                    <Image src={`/images/logos/logo-${theme === 'dark' ? 'light' : 'dark'}.png`} alt="Landon Harter Logo" width={55} height={55} className={styles.logo} />
                </Link>
            </motion.section>
            <motion.section
                className={styles.header_right}
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.5 }}
            >
                <nav className={styles.nav}>
                    <ul className={styles.nav_ul}>
                        <li className={`${styles.nav_link} ${route === '' && styles.nav_link_active}`}>
                            <Link href='/' onClick={(e) => {
                                handlePageTransition(e, '/', router, pushPageTransition);
                            }}>
                                Home
                            </Link>
                        </li>
                        <li className={`${styles.nav_link} ${route === 'projects' && styles.nav_link_active}`}>
                            <Link href='/projects' onClick={(e) => {
                                handlePageTransition(e, '/projects', router, pushPageTransition);
                            }}>
                                Projects
                            </Link>
                        </li>
                    </ul>
                </nav>
            </motion.section>
        </header>
    );
}