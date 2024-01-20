import React from "react";
import { useGLTF } from "@react-three/drei";
import MacBook from "./MacBook";
import Stand from "./Stand";

function Desk() {
  const { nodes } = useGLTF("./desk.glb");

  return (
    <>
      <mesh
        geometry={nodes.Desk001.geometry}
        position={nodes.Desk001.position}
        rotation={nodes.Desk001.rotation}
        scale={nodes.Desk001.scale}
        castShadow
      >
        <meshStandardMaterial color={0xd3d3d39} />
      </mesh>
      <mesh
        geometry={nodes.monitor.geometry}
        position={nodes.monitor.position}
        rotation={nodes.monitor.rotation}
        scale={nodes.monitor.scale}
        castShadow
      >
        <meshStandardMaterial color={"black"} />
      </mesh>
      <mesh
        geometry={nodes.mousepad.geometry}
        position={nodes.mousepad.position}
        rotation={nodes.mousepad.rotation}
        scale={nodes.mousepad.scale}
        castShadow
      >
        <meshStandardMaterial color={"gray"} />
      </mesh>

      <MacBook />
      <Stand />
      <mesh
        geometry={nodes.headset.geometry}
        position={nodes.headset.position}
        rotation={nodes.headset.rotation}
        scale={nodes.headset.scale}
        castShadow
      >
        <meshStandardMaterial color={"black"} />
      </mesh>
      <mesh
        geometry={nodes.headsetstand.geometry}
        position={nodes.headsetstand.position}
        rotation={nodes.headsetstand.rotation}
        scale={nodes.headsetstand.scale}
        castShadow
      >
        <meshStandardMaterial color={0x696969} />
      </mesh>
    </>
  );
}

export default Desk;
