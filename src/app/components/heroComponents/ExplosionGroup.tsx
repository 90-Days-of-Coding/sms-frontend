"use client";

import React, { JSX, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { SpherePoints } from "../../types/types";
import { useSprings, a, useSpring } from "@react-spring/three";
import * as THREE from "three";

// 1) Create a typed wrapper for a.primitive so TS doesn’t try to expand its insanely deep types
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
  /**
   * INITIALIZATION
   */
  const { scene } = useGLTF(modelPath);

  const initial = [
    (Math.random() * 2 - 1) * 0.2,
    (Math.random() * 2 - 1) * 0.2,
    (Math.random() * 2 - 1) * 0.2,
  ];

  /**
   * INSTANCE ANIMATION
   */

  const [springs, api] = useSprings(points.length, () => ({
    position: initial, //starting point
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
        delay: 220,
        config: { mass: 1, tension: 80, friction: 35 },
      };
    });
  }, [api, points]);

  /**
   * GROUP ANIMATION
   */
  const [gSpring, gApi] = useSpring(() => ({
    rotation: [0, 0, 0] as [number, number, number],
  }));

  useEffect(() => {
    gApi.start({
      rotation: [0, 2 * Math.PI, 0],
      config: {
        mass: 1,
        tension: 20,
        friction: 14,
      },
    });
  }, [gApi]);

  return (
    <a.group rotation={gSpring.rotation}>
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
