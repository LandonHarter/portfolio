'use client'

import { AnimatePresence, motion, useAnimate } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function PageTransition({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const [scope, animate] = useAnimate();
    const [pageLoaded, setPageLoaded] = useState(false);

    async function pageAnimation() {
        if (!pageLoaded) {
            await animate(scope.current, {
                opacity: 1,
            });
            setPageLoaded(true);
            return;
        }

        await animate(scope.current, {
            opacity: 1,
            clipPath: 'polygon(0 50%, 50% 0, 100% 50%, 50% 100%)'
        });
        await animate(scope.current, {
            opacity: 0,
            clipPath: 'polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)',
        });
        await animate(scope.current, {
            opacity: 1,
            clipPath: 'polygon(0 100%, 0 0, 100% 0, 100% 100%)'
        });
    }

    useEffect(() => {
        pageAnimation();
    }, [pathname]);

    return (
        <AnimatePresence initial={false} mode='wait'>
            <motion.div
                ref={scope}
                style={{ opacity: 0 }}
                transition={{
                    duration: 0.75,
                }}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    );
}