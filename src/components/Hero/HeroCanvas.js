"use client";

import Scene from "../three/Scene";
import HeroScene from "../three/HeroScene";

export default function HeroCanvas({ scrollProgress, reduced }) {
    return (
        <Scene
            camera={{ position: [0, 0, 6], fov: 45 }}
            fallback={<div className="hero__poster" aria-hidden="true" />}
        >
            <HeroScene scrollProgress={scrollProgress} reduced={reduced} />
        </Scene>
    );
}
