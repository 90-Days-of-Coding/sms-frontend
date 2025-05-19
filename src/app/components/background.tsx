// import { Shadow } from "@react-three/drei";
import React from "react";

const Background = () => {
  return (
    <mesh position={[0, -1.4, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[20, 20]} />
      <meshStandardMaterial color={"0x111111"} roughness={0.3} metalness={1} />
    </mesh>
  );
};

export default Background;
