'use client'

import React, { useEffect, useRef } from "react";
import Starback from "starback";

export default function StarbackBackground({ className, options }: { className: string, options: any }) {
    const canvasRef = useRef(null);
    useEffect(() => {
        if (!canvasRef.current) return;

        const starback = new Starback(canvasRef.current, {
            width: document.body.clientWidth,
            height: document.body.clientHeight,
            ...options
        });
    }, [canvasRef, options]);

    return (
        <canvas ref={canvasRef} className={className} />
    );
}