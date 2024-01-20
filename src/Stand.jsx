import { useGLTF } from "@react-three/drei";
import React from "react";

function Stand() {
  const { nodes } = useGLTF("./desk.glb");
  return (
    <>
      <mesh
        geometry={nodes.Stand.geometry}
        position={nodes.Stand.position}
        rotation={nodes.Stand.rotation}
        scale={nodes.Stand.scale}
      >
        <meshStandardMaterial color={"white"} />
      </mesh>
    </>
  );
}

export default Stand;
