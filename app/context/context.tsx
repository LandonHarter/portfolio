'use client'

import ThemeContext from "./theme";
import { useState, useEffect } from "react";
import { AnimatePresence, motion, useAnimate } from "framer-motion";
import { usePathname } from "next/navigation";
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
            opacity: 1,
            clipPath: 'polygon(0 50%, 50% 0, 100% 50%, 50% 100%)'
        }, {
            duration: 0.4
        });
        await animate(scope.current, {
            opacity: 0,
            clipPath: 'polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)',
        }, {
            duration: 0.4
        });
        await animate(scope.current, {
            opacity: 1,
            clipPath: 'polygon(0 100%, 0 0, 100% 0, 100% 100%)'
        }, {
            duration: 0.4
        });
    }

    useEffect(() => {
        pageAnimation1();
    }, []);

    return (
        <PageTransitionContext.Provider value={pageAnimation1}>
            <AnimatePresence initial={false} mode='wait'>
                <motion.div ref={scope} style={{
                    opacity: 0,
                    clipPath: 'polygon(0 100%, 0 0, 100% 0, 100% 100%)'
                }}>
                    {children}
                </motion.div>
            </AnimatePresence>
        </PageTransitionContext.Provider>
    );
}