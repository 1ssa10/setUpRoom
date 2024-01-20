import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
import * as THREE from "three";

function Chair() {
  const { nodes } = useGLTF("./desk.glb");
  const chairRef = useRef();
  useFrame((state, delta) => {
    const time = state.clock.getElapsedTime();
    chairRef.current.rotation.y = Math.sin(time);
  });
  return (
    <>
      <group ref={chairRef} position={nodes.chiar.position}>
        <mesh
          geometry={nodes.chiar.geometry}
          rotation={nodes.chiar.rotation}
          scale={nodes.chiar.scale}
          castShadow
        >
          <meshStandardMaterial color={"black"} />
        </mesh>
        <mesh
          geometry={nodes.chairhands.geometry}
          rotation={nodes.chairhands.rotation}
          scale={nodes.chairhands.scale}
          castShadow
        >
          <meshStandardMaterial color={"black"} />
        </mesh>
      </group>
      <mesh
        geometry={nodes.chairstand.geometry}
        position={nodes.chairstand.position}
        rotation={nodes.chairstand.rotation}
        scale={nodes.chairstand.scale}
        castShadow
      >
        <meshStandardMaterial color={0xd3d3d39} />
      </mesh>
    </>
  );
}

export default Chair;
