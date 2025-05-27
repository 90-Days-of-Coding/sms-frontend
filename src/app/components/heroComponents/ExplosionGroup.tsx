"use client";

import React, { JSX, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { SpherePoints } from "../../types/types";
import { useSprings, a, useSpring } from "@react-spring/three";
import * as THREE from "three";
import { useSceneStore } from "@/store/useSceneStore";

// Typed animated primitive
const AnimatedPrimitive = a.primitive as unknown as React.ComponentType<
  JSX.IntrinsicElements["primitive"]
>;

type ExplosionGroupProps = {
  modelPath: string;
  scale?: number;
  points: SpherePoints[];
};

export default function ExplosionGroup({
  modelPath,
  scale,
  points,
}: ExplosionGroupProps) {
  const { scene } = useGLTF(modelPath);

  const initial = [
    (Math.random() * 2 - 1) * 0.2,
    (Math.random() * 2 - 1) * 0.2,
    (Math.random() * 2 - 1) * 0.2,
  ];

  const setAnimationDone = useSceneStore((state) => state.setAnimationDone);

  // Instance springs
  const [springs, api] = useSprings(points.length, () => ({
    position: initial,
    rotation: [0, 0, 0],
  }));

  useEffect(() => {
    api.start((i) => {
      const target = points[i].position as [number, number, number];
      const rotation = [
        Math.random() * Math.PI * 2,
        Math.random() * Math.PI * 2,
        Math.random() * Math.PI * 2,
      ] as [number, number, number];

      return {
        position: target,
        rotation: rotation,
        delay: 200,
        config: { mass: 1, tension: 80, friction: 35 },
      };
    });

    setTimeout(() => {
      setAnimationDone(true);
    }, 500);
  }, [api, points, setAnimationDone]);

  // Group spring (split rotation into individual values)
  const gSpring = useSpring({
    rotationX: 0,
    rotationY: 0,
    rotationZ: 0,
  });

  useEffect(() => {
    gSpring.rotationX.start(0);
    gSpring.rotationY.start(-2.2 * Math.PI);
    gSpring.rotationZ.start(0);
  }, [gSpring]);

  return (
    <a.group
      rotation-x={gSpring.rotationX}
      rotation-y={gSpring.rotationY}
      rotation-z={gSpring.rotationZ}
    >
      {springs.map((spr, i) => {
        const clone = scene.clone() as THREE.Object3D;
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
