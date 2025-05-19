"use client";

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import ExplosionGroup from "./ExplosionGroup";
import MouseControlledGroup from "./MouseControlledGroup";
import { useGeneratePoints } from "../hooks/useGeneratePoints";
import { SpherePoints } from "../types/types";

const Renderer = () => {
  const instanceCount = 7;
  const models = [
    "luxury_pen.glb",
    "cube.glb",
    "torus.glb",
    "cone.glb",
    "pencil.glb",
    "book.glb",
    "laptop.glb",
  ];
  const scale = [1, 0.2, 0.15, 0.15, 1, 1, 1];
  const radius = 1.4;

  const points: SpherePoints[][] = useGeneratePoints(
    instanceCount * models.length,
    radius,
    instanceCount
  );

  return (
    <Canvas
      className="renderer"
      camera={{ position: [0, 0, 4], fov: 35 }}
      shadows
    >
      <Environment
        files={"/hdri/night.hdr"}
        backgroundIntensity={2}
        environmentIntensity={2}
      />
      <ambientLight intensity={1.2} color={0xfffff} />
      <directionalLight position={[1, 1, 2]} intensity={1.2} color={0x5588ff} />
      <pointLight position={[-4, -1, 4]} color={0xffffff} />
      <spotLight
        position={[0, 5, -5]}
        color={0xffffff}
        intensity={0.8}
        penumbra={1}
        angle={0.6}
      />

      <Suspense fallback={null}>
        <MouseControlledGroup>
          {models.map((model, i) => {
            return (
              <ExplosionGroup
                key={i}
                modelPath={`model/${model}`}
                scale={scale[i]}
                points={points[i]}
              />
            );
          })}
        </MouseControlledGroup>
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
};

export default Renderer;
