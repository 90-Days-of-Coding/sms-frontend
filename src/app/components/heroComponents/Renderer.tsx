"use client";

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, Stars } from "@react-three/drei";
import ExplosionGroup from "./ExplosionGroup";
import MouseControlledGroup from "./MouseControlledGroup";
import { useGeneratePoints } from "../../hooks/useGeneratePoints";
import { SpherePoints } from "../../types/types";
import styles from "./styles/Renderer.module.css";

const Renderer = () => {
  const instanceCount = 9;
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
  const radius = 0.3;

  const points: SpherePoints[][] = useGeneratePoints(
    instanceCount * models.length,
    radius,
    instanceCount
  );

  return (
    <Canvas
      className={styles.renderer}
      camera={{ position: [0, 0, 4], fov: 45 }}
    >
      <Environment
        files={"/hdri/city.hdr"}
        environmentIntensity={0.3}
        backgroundRotation={Math.PI / 2}
      />

      <ambientLight intensity={0.5} color={0xffffff} />

      <directionalLight position={[5, 5, 5]} intensity={2} color={0xaac} />
      <directionalLight position={[-3, 4, -4]} intensity={2} color={0xaac} />

      <Suspense fallback={null}>
        <MouseControlledGroup>
          <Stars />
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
      {/* <OrbitControls /> */}
    </Canvas>
  );
};

export default Renderer;
