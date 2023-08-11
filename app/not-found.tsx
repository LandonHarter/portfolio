'use client'

import Link from 'next/link';
import styles from './404.module.scss';
import { useRouter } from 'next/navigation';
import { useContext } from 'react';
import PageTransitionContext, { handlePageTransition } from './context/transition';

export default function NotFound() {
    const router = useRouter();
    const pushPageTransition = useContext(PageTransitionContext);

    return (
        <div className={styles.container}>
            <h1 className={styles.small_title}>404</h1>
            <h1 className={styles.big_title}>We couldn&apos;t find this page 🤷</h1>
            <h1 className={styles.subtitle}>We looked everywhere and couldn&apos;t find this page. Try another place.</h1>
            <div className={styles.buttons}>
                <button className={styles.go_back} onClick={() => {
                    router.back();
                }}>← Go Back</button>
                <Link href='/' onClick={(e) => {
                    handlePageTransition(e, '/', router, pushPageTransition);
                }}><button className={styles.go_home}>Go Home</button></Link>
            </div>
        </div>
    )
}