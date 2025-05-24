"use client";

import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
import * as THREE from "three";
import { useEffect, useState } from "react";

type point = { x: number; y: number };

const MouseControlledGroup = ({ children }: { children: React.ReactNode }) => {
  const groupRef = useRef<THREE.Group>(null!);
  const [pointer, setPointer] = useState<point>({ x: 0, y: 0 });

  useEffect(() => {
    window.addEventListener("mousemove", (event) => {
      const x = event.clientX;
      const y = event.clientY;

      //Normalization
      const ndcx = (x / window.innerWidth) * 2 - 1;
      const ndcy = -(y / window.innerHeight) * 2 + 1;

      setPointer({ x: ndcx, y: ndcy });
    });

    return () => {
      window.removeEventListener("mousemove", (event) => {
        const x = event.clientX;
        const y = event.clientY;

        //Normalization
        const ndcx = (x / window.innerWidth) * 2 - 1;
        const ndcy = -(y / window.innerHeight) * 2 + 1;

        setPointer({ x: ndcx, y: ndcy });
      });
    };
  }, []);

  //Damping values
  let targetX = 0;
  let targetY = 0;

  useFrame(() => {
    if (!groupRef.current && !pointer.x && !pointer.y) return;

    targetY = pointer.x * 0.5; //rotate on y when moving x
    targetX = -pointer.y * 0.5; //rotate on x when moving y

    //apply damping
    const damping = 0.09;
    groupRef.current.rotation.y +=
      (targetY - groupRef.current.rotation.y) * damping;
    groupRef.current.rotation.x +=
      (targetX - groupRef.current.rotation.x) * damping;
  });
  return (
    <group ref={groupRef} position={[1, 0, 0]}>
      {children}
    </group>
  );
};

export default MouseControlledGroup;
