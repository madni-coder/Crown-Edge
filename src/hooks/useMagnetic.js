"use client";

import { useRef } from "react";

/**
 * Spreads onto a button to pull it gently toward the cursor on hover.
 * Mutates the DOM directly (no React state) so fast mousemove doesn't trigger re-renders.
 */
export function useMagnetic(strength = 0.35) {
    const ref = useRef(null);

    const onMouseMove = (e) => {
        const el = ref.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const relX = e.clientX - rect.left - rect.width / 2;
        const relY = e.clientY - rect.top - rect.height / 2;
        el.style.transform = `translate(${relX * strength}px, ${relY * strength}px)`;
    };

    const onMouseLeave = () => {
        const el = ref.current;
        if (el) el.style.transform = "translate(0px, 0px)";
    };

    return { ref, onMouseMove, onMouseLeave };
}
