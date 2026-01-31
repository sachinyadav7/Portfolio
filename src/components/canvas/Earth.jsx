import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader"; // Using null fallbacks mostly but let's keep import for consistency check or remove. I'll remove used of CanvasLoader to be safe as I didn't create it.

const Earth = () => {
    // Placeholder: Wireframe sphere to represent earth/globe
    return (
        <mesh scale={2.5}>
            <sphereGeometry args={[1, 32, 32]} />
            <meshStandardMaterial color="#4c669f" wireframe />
            <ambientLight intensity={1} />
            <directionalLight position={[0, 0, 5]} />
        </mesh>
    );
};

const EarthCanvas = () => {
    return (
        <Canvas
            shadows
            frameloop='demand'
            gl={{ preserveDrawingBuffer: true }}
            camera={{
                fov: 45,
                near: 0.1,
                far: 200,
                position: [-4, 3, 6],
            }}
        >
            <Suspense fallback={null}>
                <OrbitControls
                    autoRotate
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                />
                <Earth />
            </Suspense>
        </Canvas>
    );
};

export default EarthCanvas;
