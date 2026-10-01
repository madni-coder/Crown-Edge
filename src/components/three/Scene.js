"use client";

import { Suspense, useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "../../hooks/useResponsive";
import "./Scene.css";

function supportsWebGL() {
    try {
        const canvas = document.createElement("canvas");
        return !!(
            window.WebGLRenderingContext &&
            (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
        );
    } catch {
        return false;
    }
}

/**
 * Shared Canvas wrapper for the two flagship 3D sections (Hero, Portfolio).
 * - Mounts the WebGL canvas only once the section has entered the viewport.
 * - Pauses the render loop (instead of unmounting) while scrolled out of view,
 *   so re-entering the section is instant rather than re-initializing the scene.
 * - Falls back to a static poster when WebGL is unavailable or the user
 *   prefers reduced motion, so no one is ever stuck on a blank canvas.
 */
export default function Scene({
    children,
    fallback = null,
    camera = { position: [0, 0, 6], fov: 45 },
    className = "",
    dpr,
}) {
    const wrapperRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const [hasBeenVisible, setHasBeenVisible] = useState(false);
    const [webglOk, setWebglOk] = useState(true);
    const prefersReduced = useMediaQuery("(prefers-reduced-motion: reduce)");
    const isMobile = useMediaQuery("(max-width: 767px)");

    useEffect(() => {
        setWebglOk(supportsWebGL());
    }, []);

    useEffect(() => {
        const el = wrapperRef.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    setIsVisible(entry.isIntersecting);
                    if (entry.isIntersecting) setHasBeenVisible(true);
                });
            },
            { threshold: 0.15, rootMargin: "200px 0px" }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    const canRender3D = webglOk && !prefersReduced && hasBeenVisible;
    const resolvedDpr = dpr || (isMobile ? [1, 1.5] : [1, 2]);

    return (
        <div ref={wrapperRef} className={`three-scene ${className}`}>
            {canRender3D ? (
                <Canvas
                    dpr={resolvedDpr}
                    camera={camera}
                    frameloop={isVisible ? "always" : "demand"}
                    gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
                >
                    <Suspense fallback={null}>{children}</Suspense>
                </Canvas>
            ) : (
                fallback
            )}
        </div>
    );
}
