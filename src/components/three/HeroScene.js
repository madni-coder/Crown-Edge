"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Sparkles } from "@react-three/drei";

/**
 * The hero's floating glass/metal cluster. Pure scene graph — mounted lazily
 * by HeroCanvas (next/dynamic) and only once <Scene> decides WebGL is safe to use.
 *
 * `scrollProgress` is a ref (not state) written by a GSAP ScrollTrigger in Hero.js —
 * reading it inside useFrame avoids any React re-render per scroll pixel.
 */
export default function HeroScene({ scrollProgress, reduced = false }) {
    const groupRef = useRef(null);
    const satelliteA = useRef(null);
    const satelliteB = useRef(null);
    const satelliteC = useRef(null);

    useFrame((state, delta) => {
        const group = groupRef.current;
        if (!group) return;

        const progress = scrollProgress?.current ?? 0;
        const pointer = state.pointer;

        // Idle autorotation + mouse parallax, both damped toward the target each frame.
        group.rotation.y += delta * 0.08;
        group.rotation.x += (pointer.y * 0.25 - group.rotation.x) * 0.04;
        group.rotation.z += (pointer.x * -0.12 - group.rotation.z) * 0.04;

        // Scroll handoff: drift up, shrink, and fade as the user scrolls into Services.
        group.position.y = progress * 2.2;
        const scale = 1 - progress * 0.35;
        group.scale.setScalar(scale);
        group.position.z = -progress * 2;

        if (satelliteA.current) {
            satelliteA.current.position.x = Math.sin(state.clock.elapsedTime * 0.6) * 2.1;
            satelliteA.current.position.y = Math.cos(state.clock.elapsedTime * 0.6) * 1.1;
            satelliteA.current.rotation.x += delta * 0.4;
        }
        if (satelliteB.current) {
            satelliteB.current.position.x = Math.cos(state.clock.elapsedTime * 0.45) * -2.4;
            satelliteB.current.position.y = Math.sin(state.clock.elapsedTime * 0.45) * 1.4;
            satelliteB.current.rotation.y += delta * 0.3;
        }
        if (satelliteC.current) {
            satelliteC.current.position.z = Math.sin(state.clock.elapsedTime * 0.5) * 1.6;
            satelliteC.current.position.y = Math.sin(state.clock.elapsedTime * 0.35) * -1.3;
            satelliteC.current.rotation.z += delta * 0.25;
        }
    });

    return (
        <>
            <ambientLight intensity={0.6} />
            <directionalLight position={[4, 6, 5]} intensity={1.1} />
            <pointLight position={[-4, -2, 3]} intensity={6} color="#84fab0" />
            <pointLight position={[4, 2, -3]} intensity={6} color="#8fd3f4" />

            <group ref={groupRef}>
                {/* Core */}
                <mesh>
                    <icosahedronGeometry args={[1.3, 4]} />
                    <MeshDistortMaterial
                        color="#101014"
                        emissive="#84fab0"
                        emissiveIntensity={0.25}
                        roughness={0.15}
                        metalness={0.6}
                        distort={reduced ? 0 : 0.28}
                        speed={reduced ? 0 : 1.4}
                    />
                </mesh>

                {/* Satellites */}
                <mesh ref={satelliteA} position={[2.1, 0, 0]}>
                    <octahedronGeometry args={[0.4, 0]} />
                    <meshPhysicalMaterial
                        color="#ffffff"
                        roughness={0.05}
                        metalness={0}
                        transmission={0.9}
                        thickness={1.2}
                        ior={1.3}
                    />
                </mesh>
                <mesh ref={satelliteB} position={[-2.4, 0, 0]}>
                    <torusGeometry args={[0.38, 0.12, 16, 32]} />
                    <meshPhysicalMaterial
                        color="#8fd3f4"
                        roughness={0.2}
                        metalness={0.8}
                        emissive="#8fd3f4"
                        emissiveIntensity={0.15}
                    />
                </mesh>
                <mesh ref={satelliteC} position={[0, 1.6, 0]}>
                    <tetrahedronGeometry args={[0.32, 0]} />
                    <meshPhysicalMaterial
                        color="#84fab0"
                        roughness={0.1}
                        metalness={0.3}
                        transmission={0.6}
                        thickness={0.8}
                    />
                </mesh>
            </group>

            {!reduced && (
                <Sparkles
                    count={60}
                    scale={[7, 5, 5]}
                    size={2}
                    speed={0.25}
                    opacity={0.5}
                    color="#8fd3f4"
                />
            )}
        </>
    );
}
