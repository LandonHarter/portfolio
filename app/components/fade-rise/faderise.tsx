'use client'

import { motion, useInView, HTMLMotionProps } from 'framer-motion';
import React, { useRef } from 'react';

export default function FadeRiseAnimation({ children, options, delay, props }: {
    children: React.ReactNode, options?: {
        margin?: string;
        once?: boolean;
    }, delay?: number, props?: any
}) {
    const sectionRef = useRef<HTMLDivElement>(null);
    const inView = useInView(sectionRef, {
        ...options
    });

    return (
        <motion.div {...props} ref={sectionRef} initial={{ opacity: 0, y: 100 }} animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }} transition={{ duration: 0.5, delay: delay }}>
            {children}
        </motion.div>
    )
}