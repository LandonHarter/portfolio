'use client'

import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

export default function PageTransition({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    return (
        <AnimatePresence mode='wait'>
            <motion.div
                key={pathname}
                initial={{
                    opacity: 0,
                    clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)'
                }}
                animate={{
                    opacity: 1,
                    clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
                }}
                exit={{
                    clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)"
                }}
                transition={{
                    duration: 0.75,
                }}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    );
}