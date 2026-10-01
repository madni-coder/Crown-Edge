"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useMediaQuery } from "../../hooks/useResponsive";
import "./CustomCursor.css";

/**
 * Desktop-only custom cursor. Elements opt in to a label by adding
 * data-cursor="View" (or any short word) — everything else gets the default dot/ring.
 * Disabled on touch devices and when the user prefers reduced motion.
 */
export default function CustomCursor() {
    const canHover = useMediaQuery("(hover: hover) and (pointer: fine)");
    const prefersReduced = useMediaQuery("(prefers-reduced-motion: reduce)");
    const [label, setLabel] = useState("");
    const [visible, setVisible] = useState(false);
    const active = canHover && !prefersReduced;

    const x = useMotionValue(-100);
    const y = useMotionValue(-100);
    const ringX = useSpring(x, { damping: 28, stiffness: 300, mass: 0.4 });
    const ringY = useSpring(y, { damping: 28, stiffness: 300, mass: 0.4 });

    const labelRef = useRef(label);
    labelRef.current = label;

    useEffect(() => {
        if (!active) return;

        document.body.classList.add("cursor-none");

        const handleMove = (e) => {
            x.set(e.clientX);
            y.set(e.clientY);
            if (!visible) setVisible(true);
        };

        const handleOver = (e) => {
            const target = e.target.closest?.("[data-cursor]");
            setLabel(target ? target.getAttribute("data-cursor") : "");
        };

        const handleLeaveWindow = () => setVisible(false);

        window.addEventListener("mousemove", handleMove, { passive: true });
        window.addEventListener("mouseover", handleOver, { passive: true });
        window.addEventListener("mouseout", handleLeaveWindow, { passive: true });

        return () => {
            document.body.classList.remove("cursor-none");
            window.removeEventListener("mousemove", handleMove);
            window.removeEventListener("mouseover", handleOver);
            window.removeEventListener("mouseout", handleLeaveWindow);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [active]);

    if (!active) return null;

    return (
        <div className={`custom-cursor ${visible ? "is-visible" : ""}`} aria-hidden="true">
            <motion.div
                className="custom-cursor__dot"
                style={{ left: x, top: y }}
            />
            <motion.div
                className={`custom-cursor__ring ${label ? "has-label" : ""}`}
                style={{ left: ringX, top: ringY }}
            >
                {label && <span className="custom-cursor__label">{label}</span>}
            </motion.div>
        </div>
    );
}
