'use client'

import {motion} from "framer-motion";
import "./animationdiv.css";
import {usePathname} from "next/navigation";

export default function AnimationDiv(props:any) {
    const path = usePathname();

    return(
        <motion.div
            key={path}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
            style={props.style}
            className={`animationDiv ${props.className}`}
        >{props.children}</motion.div>
    );
}