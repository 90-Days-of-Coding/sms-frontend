import { useMemo } from "react";
import * as THREE from "three";
import { SpherePoints } from "../types/types";

const chunkArray = (
  array: SpherePoints[],
  chunkSize: number
): SpherePoints[][] => {
  const result: SpherePoints[][] = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    result.push(array.slice(i, i + chunkSize));
  }
  return result;
};

export const useGeneratePoints = (
  count: number,
  baseRadius: number,
  instances: number,
  spread = 3 // explosion energy multiplier
): SpherePoints[][] => {
  return useMemo(() => {
    const points: SpherePoints[] = [];
    const maxTries = 10000;
    let tries = 0;

    while (points.length < count && tries < maxTries) {
      // Use spherical coords
      const spherical = new THREE.Spherical();
      spherical.radius = baseRadius + spread * Math.pow(Math.random(), 0.5); // bias outward
      spherical.theta = Math.random() * Math.PI * 2; // around Y axis
      spherical.phi = Math.acos(2 * Math.random() - 1); // vertical angle

      const pos = new THREE.Vector3().setFromSpherical(spherical);

      // More explosive = looser distance check
      const minDistance = baseRadius * 1.5;

      const tooClose = points.some(({ position: [px, py, pz] }) => {
        const dx = pos.x - px;
        const dy = pos.y - py;
        const dz = pos.z - pz;
        return Math.sqrt(dx * dx + dy * dy + dz * dz) < minDistance;
      });

      if (!tooClose) {
        points.push({
          position: [pos.x, pos.y, pos.z],
        });
      }

      tries++;
    }

    if (tries >= maxTries) {
      console.warn(
        "Max attempts reached, fewer points generated:",
        points.length
      );
    }

    return chunkArray(points, instances);
  }, [count, baseRadius, instances, spread]);
};
