'use client'

import Link from 'next/link';
import styles from './sidebar.module.scss';
import { motion } from 'framer-motion';

export default function SocialsSidebar() {
    // Email sidebar
    // <motion.div
    //     className={styles.contact_sidebar}
    //     initial={{ opacity: 0 }}
    //     animate={{ opacity: 1 }}
    //     transition={{ delay: 1.5, duration: 0.5 }}
    // >
    //     <Link href='mailto:landonharter@outlook.com' target='_blank' style={{ textDecoration: 'none' }}>
    //         <p className={styles.email}>landonharter@outlook.com</p>
    //     </Link>
    //     <div className={styles.sidebar_bottom} />
    // </motion.div>

    return (
        <>
            <motion.div
                className={styles.social_sidebar}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
            >
                <Link href='https://github.com/LandonHarter' target='_blank' aria-label='Github'>
                    <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" className={styles.social}>
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                    </svg>
                </Link>
                <Link href='https://www.instagram.com/landonharter17' target='_blank' aria-label='Instagram'>
                    <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" className={styles.social}>
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                </Link>
                <Link href='https://twitter.com/harter_landon' target='_blank' aria-label='Twitter'>
                    <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" className={styles.social}>
                        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                    </svg>
                </Link>
                <Link href='mailto:landonharter@outlook.com' target='_blank' aria-label='Email'>
                    <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.social}>
                        <path d="M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7" />
                        <rect x="3" y="5" width="18" height="14" rx="2" />
                    </svg>
                </Link>

                <div className={styles.sidebar_bottom} />
            </motion.div>
        </>
    )
}