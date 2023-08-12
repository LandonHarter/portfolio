'use client'

import Image from 'next/image';
import styles from './footer.module.scss';
import { useContext } from 'react';
import ThemeContext from '@/app/context/theme';

export default function Footer() {
    const theme = useContext(ThemeContext);

    return (
        <footer className={styles.footer}>
            <Image className={styles.logo} src={`/images/logos/logo-${theme === 'dark' ? 'light' : 'dark'}.png`} alt='logo' width={100} height={100} />
            <p className={styles.copyright}>All rights reserved © 2023 <strong>Landon Harter</strong></p>
        </footer>
    );
}