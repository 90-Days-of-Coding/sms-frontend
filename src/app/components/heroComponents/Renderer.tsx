"use client";

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, Stars } from "@react-three/drei";
import ExplosionGroup from "./ExplosionGroup";
import MouseControlledGroup from "./MouseControlledGroup";
import { useGeneratePoints } from "../../hooks/useGeneratePoints";
import { SpherePoints } from "../../types/types";
import styles from "./styles/Renderer.module.css";

const instanceCount = 9;

const models = ["cube.glb", "torus.glb", "cone.glb", "diamond.glb"];
const scales: number[] = [0.2, 0.2, 0.15, 0.15];
const radius = 0.4;

const Renderer: React.FC = () => {
  const points: SpherePoints[][] = useGeneratePoints(
    instanceCount * models.length,
    radius,
    instanceCount
  );

  return (
    <Canvas
      className={styles.renderer}
      camera={{ position: [0, 0, 4], fov: 45 }}
      dpr={
        typeof window !== "undefined"
          ? Math.min(window.devicePixelRatio, 2)
          : 1.5
      }
    >
      <Environment
        files="/hdri/city.hdr"
        backgroundRotation={Math.PI / 2}
        environmentIntensity={0.3}
      />

      <ambientLight intensity={0.5} />
      <directionalLight position={[3, -4, 4]} intensity={1} color={0xaac} />
      <directionalLight position={[-3, 4, -4]} intensity={1} color={0xaac} />

      <Suspense fallback={null}>
        <MouseControlledGroup>
          <Stars factor={2} />
          {models.map((model, i) => (
            <ExplosionGroup
              key={model}
              modelPath={`model/${model}`}
              scale={scales[i] ?? 0.15}
              points={points[i] ?? []}
            />
          ))}
        </MouseControlledGroup>
      </Suspense>
    </Canvas>
  );
};

export default Renderer;
