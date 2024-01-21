import { useGLTF } from "@react-three/drei";
import React from "react";
import Mesh from "./Mesh";

function MacBook() {
  const { nodes } = useGLTF("./desk.glb");
  return (
    <>
      <group
        position={[-1.4633598327636719, 0.6476100087165833, 1.4495141506195068]} //macbook position scale rotation from nodes
        rotation={[2.5750828339942142, 1.0562338690467925, -2.6400630314879696]}
        scale={[
          0.015196993947029114, 0.015196996740996838, 0.015196995809674263,
        ]}
      >
        {nodes.Macbook.children.map((object) =>
          object.name == "KeyboardKeyHole" ? (
            <Mesh
              key={object.uuid}
              obj={object.name}
              color={"gray"}
              castingShadow={false}
              receivingShadow={false}
            />
          ) : (
            <Mesh
              key={object.uuid}
              obj={object.name}
              color={"raisinBlack"}
              castingShadow={false}
              receivingShadow={false}
            />
          )
        )}
        <mesh geometry={nodes.Macbook.geometry}>
          <meshStandardMaterial color={0x3d3d3d} />
        </mesh>
      </group>
    </>
  );
}

export default MacBook;
