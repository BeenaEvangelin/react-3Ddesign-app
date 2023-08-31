import React from "react";
import { easing } from "maath";
import { useFrame } from "@react-three/fiber";
import { AccumulativeShadows, RandomizedLight } from "@react-three/drei";
import { useRef } from "react";

const Backdrop = () => {
  const shadows = useRef();
  return (
    <AccumulativeShadows
      ref={shadows}
      temporal
      frames={60}
      alphaTest={0.45}
      scale={4}
      rotation={[Math.PI / 2, 0, 0]}
      position={[0, 0, -0.14]}
    >
      <RandomizedLight
        amount={4}
        radius={9}
        intensity={0.35}
        ambient={0.95}
        position={[4, 8, -10]}
      />
      <RandomizedLight
        amount={4}
        radius={5}
        intensity={0.35}
        ambient={0.95}
        position={[-4, 8, 10]}
      />
    </AccumulativeShadows>
  );
};

export default Backdrop;
