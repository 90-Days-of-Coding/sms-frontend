"use client";

import React, { JSX, useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { SpherePoints } from "../../types/types";
import { useSprings, a, useSpring } from "@react-spring/three";
import * as THREE from "three";
import { useSceneStore } from "@/store/useSceneStore";

// Properly typed animated primitive
const AnimatedPrimitive = a.primitive as unknown as React.FC<
  JSX.IntrinsicElements["primitive"] & { object: THREE.Object3D }
>;

type ExplosionGroupProps = {
  modelPath: string;
  scale?: number;
  points: SpherePoints[];
};

export default function ExplosionGroup({
  modelPath,
  scale = 1,
  points,
}: ExplosionGroupProps) {
  const { scene } = useGLTF(modelPath);
  const setAnimationDone = useSceneStore((state) => state.setAnimationDone);

  const initial = useRef<[number, number, number]>([
    (Math.random() * 2 - 1) * 0.2,
    (Math.random() * 2 - 1) * 0.2,
    (Math.random() * 2 - 1) * 0.2,
  ]);

  const [springs, api] = useSprings(points.length, () => ({
    position: initial.current,
    rotation: [0, 0, 0] as [number, number, number],
  }));

  useEffect(() => {
    api.start((i) => {
      const target = points[i].position as [number, number, number];
      const rotation: [number, number, number] = [
        Math.random() * Math.PI * 2,
        Math.random() * Math.PI * 2,
        Math.random() * Math.PI * 2,
      ];

      return {
        position: target,
        rotation,
        delay: 200,
        config: { mass: 1, tension: 100, friction: 45 },
      };
    });

    // ⏱️ Estimate time until 80% of animation completes
    const estimatedAnimationDuration = 1200; // ms — tweak as needed
    const triggerTime = estimatedAnimationDuration * 0.8;

    const timeout = setTimeout(() => {
      setAnimationDone(true);
    }, triggerTime);

    return () => clearTimeout(timeout);
  }, [api, points, setAnimationDone]);

  // Group rotation spring
  const [{ rotationY }, groupApi] = useSpring(() => ({
    rotationY: 0,
    config: { mass: 1, tension: 50, friction: 30 },
  }));

  useEffect(() => {
    groupApi.start({ rotationY: -2.2 * Math.PI });
  }, [groupApi]);

  return (
    <a.group rotation-y={rotationY}>
      {springs.map((spr, i) => {
        const clone = scene.clone(true); // deep clone

        return (
          <AnimatedPrimitive
            key={i}
            object={clone}
            position={spr.position}
            rotation={spr.rotation}
            scale={scale}
          />
        );
      })}
    </a.group>
  );
}
