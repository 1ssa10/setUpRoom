import React from "react";
import { OrbitControls, useGLTF, useTexture } from "@react-three/drei";
import Desk from "./Desk";
import Chair from "./chair";

function Experience() {
  const { nodes } = useGLTF("./desk.glb");

  console.log(nodes);

  return (
    <>
      <OrbitControls makeDefault />
      <directionalLight position={[1, 1, 1.5]} intensity={5} castShadow sha />
      <directionalLight position={[-3, 2, 0]} intensity={10} castShadow />
      <group receiveShadow>
        <mesh
          geometry={nodes.Floor.geometry}
          rotation={nodes.Floor.rotation}
          position={nodes.Floor.position}
          scale={nodes.Floor.scale}
          castShadow
          receiveShadow
        >
          <meshStandardMaterial color={"gray"} />
        </mesh>
        <mesh
          geometry={nodes.Floor001.geometry}
          position={nodes.Floor001.position}
          rotation={nodes.Floor001.rotation}
          scale={nodes.Floor001.scale}
          receiveShadow
        >
          <meshStandardMaterial color={0x696969} />
        </mesh>
      </group>

      <Desk />
      <Chair />
    </>
  );
}

export default Experience;
