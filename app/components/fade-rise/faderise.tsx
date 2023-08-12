'use client'

import { motion, useInView, HTMLMotionProps } from 'framer-motion';
import React, { useRef } from 'react';

export default function FadeRiseAnimation({ children, options, delay, props, initial, animate }: {
    children: React.ReactNode, options?: {
        once?: boolean;
    }, delay?: number, props?: any, initial?: HTMLMotionProps<'div'>['initial'], animate?: HTMLMotionProps<'div'>['animate'], transition?: HTMLMotionProps<'div'>['transition']
}) {
    const sectionRef = useRef<HTMLDivElement>(null);
    const inView = useInView(sectionRef, {
        ...options,
    });

    return (
        <motion.div {...props} ref={sectionRef} initial={initial ?? { opacity: 0, y: 100 }} animate={inView ? animate ?? { opacity: 1, y: 0 } : animate ?? { opacity: 0, y: 100 }} transition={{ duration: 0.5, delay: delay }}>
            {children}
        </motion.div>
    )
}