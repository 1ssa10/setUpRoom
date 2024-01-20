import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
import * as THREE from "three";
import Mesh from "./Mesh";

function Chair() {
  const chairRef = useRef();
  useFrame((state, delta) => {
    const time = state.clock.getElapsedTime();
    chairRef.current.rotation.y = Math.sin(time);
  });
  return (
    <>
      <group
        ref={chairRef}
        position={[
          -0.5791056752204895, -0.011903643608093262, 1.2337989807128906,
        ]}
      >
        <Mesh
          obj={"chiar"}
          color={"raisinBlack"}
          castingShadow={true}
          receivingShadow={false}
          positioning={[0, 0, 0]}
        />
        <Mesh
          obj={"chairhands"}
          color={"raisinBlack"}
          castingShadow={true}
          receivingShadow={false}
          positioning={[0, 0, 0]}
        />
      </group>
      <Mesh
        obj={"chairstand"}
        color={"darkLiver"}
        castingShadow={true}
        receivingShadow={false}
      />
    </>
  );
}

export default Chair;
