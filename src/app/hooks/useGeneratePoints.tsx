// import { SpherePoints } from "../types/types";
// import { useMemo } from "react";

// const chunkArray = (
//   array: SpherePoints[],
//   chunkSize: number
// ): SpherePoints[][] => {
//   const result: SpherePoints[][] = [];
//   for (let i = 0; i < array.length; i += chunkSize) {
//     result.push(array.slice(i, i + chunkSize));
//   }
//   return result;
// };

// export const useGeneratePoints = (
//   count: number,
//   r: number,
//   instances: number
// ): SpherePoints[][] => {
//   return useMemo(() => {
//     const points = new Array(count).fill(0).map(() => {
//       const theta = Math.random() * 2 * Math.PI;
//       const phi = Math.acos(Math.random() * 2 - 1);
//       //converting it to cartesian points (x,y,z)
//       const x = r * Math.sin(phi) * Math.cos(theta);
//       const y = r * Math.cos(phi) * Math.sin(theta);
//       const z = r * Math.cos(phi);

//       return {
//         position: [x, y, z] as [number, number, number],
//       };
//     });

//     const chunks = chunkArray(points, instances);
//     return chunks;
//   }, [count, r, instances]);
// };

import { SpherePoints } from "../types/types";
import { useMemo } from "react";

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
  radius: number,
  instances: number
): SpherePoints[][] => {
  return useMemo(() => {
    const points: SpherePoints[] = [];
    const maxTries = 10000;
    let tries = 0;

    while (points.length < count && tries < maxTries) {
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos(Math.random() * 2 - 1);
      const r = Math.random() * 3 + radius; // optional spread around origin

      const x = r * Math.cos(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);

      const tooClose = points.some(({ position: [px, py, pz] }) => {
        const dx = x - px;
        const dy = y - py;
        const dz = z - pz;
        return Math.sqrt(dx * dx + dy * dy + dz * dz) < radius * 2;
      });

      if (!tooClose) {
        points.push({
          position: [x, y, z],
        });
      }

      tries++;
    }

    if (tries >= maxTries) {
      console.warn("Max attempts reached, may not have placed all points.");
    }

    const chunks = chunkArray(points, instances);
    return chunks;
  }, [count, radius, instances]);
};
