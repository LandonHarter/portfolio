'use client'

import { useEffect, useRef, useState } from "react";

export default function FollowCursor({ children }: { children: React.ReactNode }) {
    const elRef = useRef<HTMLDivElement>(null);

    const constrain = 50;

    function transform(mouseX: number, mouseY: number) {
        if (!elRef.current) return;
        const el = elRef.current;
        let box = el.getBoundingClientRect();
        let x = -(mouseY - box.y - (box.height / 2)) / constrain;
        let y = (mouseX - box.x - (box.width / 2)) / constrain;
        el.style.transform = `perspective(1000px) rotateX(${x}deg) rotateY(${y}deg)`;
    }

    useEffect(() => {
        const onMouseMove = (e: MouseEvent) => {
            window.requestAnimationFrame(() => transform(e.clientX, e.clientY));
        };
        window.addEventListener("mousemove", onMouseMove);

        return () => window.removeEventListener("mousemove", onMouseMove);
    }, []);

    return (
        <div ref={elRef}>
            {children}
        </div>
    );
}