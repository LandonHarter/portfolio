'use client'

import ThemeContext from "./theme";
import { useState, useEffect } from "react";
import { motion, useAnimate } from "framer-motion";
import PageTransitionContext from "./transition";

export function ThemeContextProvider({ children }: { children: React.ReactNode }) {
    const [theme, setTheme] = useState<'light' | 'dark'>('dark');
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        const localTheme = window.localStorage.getItem('theme');

        if (localTheme) {
            setTheme(localTheme as 'light' | 'dark');
        } else {
            setTheme('dark');
        }
    }, []);

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        window.localStorage.setItem('theme', theme);
        setMounted(true);
    }, [theme]);

    if (!mounted) return <div />;
    return (
        <ThemeContext.Provider value={theme}>
            {children}
        </ThemeContext.Provider>
    );
}

export function PageTransitionProvider({ children }: { children: React.ReactNode }) {
    const [scope, animate] = useAnimate();
    const [pageLoaded, setPageLoaded] = useState(false);

    async function pageAnimation1() {
        if (!pageLoaded) {
            await animate(scope.current, {
                opacity: 1,
            }, {
                duration: 1
            });
            setPageLoaded(true);
            return;
        }

        await animate(scope.current, {
            clipPath: 'polygon(0 100vh, 0 0, 100% 0, 100% 100vh)'
        }, {
            duration: 0
        });
        await animate(scope.current, {
            opacity: 1,
            clipPath: 'polygon(0 50vh, 50vw 0, 100vw 50vh, 50vw 100vh)'
        }, {
            duration: 0.4
        });
        await animate(scope.current, {
            opacity: 0,
            clipPath: 'polygon(50vw 50vh, 50vw 50vh, 50vw 50vh, 50vw 50vh)',
        }, {
            duration: 0.4
        });
        await animate(scope.current, {
            opacity: 1,
            clipPath: 'polygon(0 100vh, 0 0, 100% 0, 100% 100vh)'
        }, {
            duration: 0.4
        });
        await animate(scope.current, {
            clipPath: 'polygon(0 100%, 0 0, 100% 0, 100% 100%)'
        }, {
            duration: 0
        });
    }

    useEffect(() => {
        pageAnimation1();
    }, []);

    return (
        <PageTransitionContext.Provider value={pageAnimation1}>
            <motion.div ref={scope} style={{
                opacity: 0,
                clipPath: 'polygon(0 100%, 0 0, 100% 0, 100% 100%)'
            }}>
                {children}
            </motion.div>
        </PageTransitionContext.Provider>
    );
}