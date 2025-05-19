import { useFrame, useThree } from "@react-three/fiber";
import React, { useRef } from "react";
import * as THREE from "three";

const MouseControlledGroup = ({ children }: { children: React.ReactNode }) => {
  const groupRef = useRef<THREE.Group>(null!);
  const { pointer } = useThree();

  //Damping values
  let targetX = 0;
  let targetY = 0;

  useFrame(() => {
    if (!groupRef.current) return;

    targetY = pointer.x * 0.5; //rotate on y when moving x
    targetX = -pointer.y * 0.5; //rotate on x when moving y

    //apply damping
    const damping = 0.07;
    groupRef.current.rotation.y +=
      (targetY - groupRef.current.rotation.y) * damping;
    groupRef.current.rotation.x +=
      (targetX - groupRef.current.rotation.x) * damping;
  });
  return <group ref={groupRef}>{children}</group>;
};

export default MouseControlledGroup;
