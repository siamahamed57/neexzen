import React, { useRef, useState, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Box, MeshDistortMaterial, Stars, Sparkles, Icosahedron, Cylinder } from '@react-three/drei';
import * as THREE from 'three';

// Mouse Position Hook
const useMousePosition = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    React.useEffect(() => {
        const updateMousePosition = (e: MouseEvent) => {
            setMousePosition({
                x: (e.clientX / window.innerWidth) * 2 - 1,
                y: -(e.clientY / window.innerHeight) * 2 + 1,
            });
        };
        window.addEventListener('mousemove', updateMousePosition);
        return () => window.removeEventListener('mousemove', updateMousePosition);
    }, []);

    return mousePosition;
};

// Knowledge Hub - Floating Abstract Library / Data Clouds
const KnowledgeHub: React.FC<{ mousePosition: { x: number; y: number } }> = ({ mousePosition }) => {
    const groupRef = useRef<THREE.Group>(null);
    const booksRef = useRef<THREE.Group>(null);

    useFrame((state) => {
        if (groupRef.current) {
            // Gentle floating rotation
            groupRef.current.rotation.y = state.clock.elapsedTime * 0.1;

            // Mouse parallax
            groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, mousePosition.y * 0.1, 0.1);
            groupRef.current.rotation.z = THREE.MathUtils.lerp(groupRef.current.rotation.z, mousePosition.x * 0.1, 0.1);
        }

        if (booksRef.current) {
            // Books orbiting slowly
            booksRef.current.rotation.y = -state.clock.elapsedTime * 0.15;
        }
    });

    // Generate random "Book" positions (floating tablets)
    const books = useMemo(() => {
        return [...Array(8)].map((_, i) => ({
            position: [
                Math.sin(i / 8 * Math.PI * 2) * 2.5,
                (Math.random() - 0.5) * 3,
                Math.cos(i / 8 * Math.PI * 2) * 2.5
            ] as [number, number, number],
            rotation: [Math.random() * 0.5, Math.random() * Math.PI, Math.random() * 0.5] as [number, number, number],
            scale: [0.2, 0.3, 0.05] as [number, number, number] // Thin tablet/book shape
        }))
    }, [])

    return (
        <group ref={groupRef}>
            {/* Central Wisdom Core */}
            <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
                <Icosahedron args={[1.2, 1]}>
                    <MeshDistortMaterial
                        color="#a855f7" // Deep Purple
                        attach="material"
                        distort={0.4}
                        speed={1.5}
                        roughness={0.2}
                        metalness={0.6}
                        emissive="#9333ea"
                        emissiveIntensity={0.5}
                    />
                </Icosahedron>
            </Float>

            {/* Floating Knowledge Nodes (Tablets/Books) */}
            <group ref={booksRef}>
                {books.map((book, i) => (
                    <Float key={i} speed={1 + Math.random()} rotationIntensity={1} floatIntensity={1}>
                        <group position={book.position} rotation={book.rotation}>
                            <Box args={[0.5, 0.7, 0.1]}>
                                <meshStandardMaterial color="#ffffff" emissive="#e2e8f0" emissiveIntensity={0.2} roughness={0.1} metalness={0.5} />
                            </Box>
                        </group>
                    </Float>
                ))}
            </group>

            {/* Data Streams / Halo */}
            <Cylinder args={[3.5, 3.5, 0.05, 32]} rotation={[Math.PI / 6, 0, 0]}>
                <meshBasicMaterial color="#a855f7" transparent opacity={0.05} side={THREE.DoubleSide} />
            </Cylinder>

            {/* Particles of Wisdom */}
            <Sparkles
                count={100}
                scale={8}
                size={4}
                speed={0.3}
                opacity={0.5}
                color="#d8b4fe"
            />
        </group>
    );
};

// Scene Wrapper
const Scene: React.FC = () => {
    const mousePosition = useMousePosition();

    return (
        <group>
            <KnowledgeHub mousePosition={mousePosition} />
        </group>
    );
};

// Main Component
const BlogHero3D: React.FC = () => {
    return (
        <div className="w-full h-full">
            <Canvas
                camera={{ position: [0, 0, 8], fov: 45 }}
                dpr={[1, 2]}
                gl={{
                    antialias: true,
                    alpha: true,
                    powerPreference: 'high-performance',
                }}
                style={{ background: 'transparent' }}
            >
                <ambientLight intensity={0.6} />
                <pointLight position={[10, 10, 10]} intensity={1.2} color="#a855f7" />
                <pointLight position={[-10, 5, -10]} intensity={0.8} color="#ffffff" />
                <spotLight position={[0, 10, 0]} angle={0.5} penumbra={1} intensity={1.5} color="#e879f9" />

                <Scene />

                <Stars radius={100} depth={50} count={1000} factor={3} saturation={0} fade speed={0.5} />
            </Canvas>
        </div>
    );
};

export default BlogHero3D;
