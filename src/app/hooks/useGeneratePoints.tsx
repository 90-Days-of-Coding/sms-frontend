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
  r: number,
  instances: number
): SpherePoints[][] => {
  return useMemo(() => {
    const points = new Array(count).fill(0).map(() => {
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos(Math.random() * 2 - 1);
      //converting it to cartesian points (x,y,z)
      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.cos(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);

      return {
        position: [x, y, z] as [number, number, number],
      };
    });

    const chunks = chunkArray(points, instances);
    return chunks;
  }, [count, r, instances]);
};
