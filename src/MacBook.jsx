import { useGLTF } from "@react-three/drei";
import React from "react";

function MacBook() {
  const { nodes } = useGLTF("./desk.glb");
  return (
    <>
      <group
        position={nodes.Macbook.position}
        rotation={nodes.Macbook.rotation}
        scale={nodes.Macbook.scale}
      >
        {nodes.Macbook.children.map((object) =>
          object.name == "KeyboardKeyHole" ? (
            <mesh
              key={object.uuid}
              geometry={object.geometry}
              position={object.position}
              rotation={object.rotation}
              scale={object.scale}
            >
              <meshStandardMaterial color={"gray"} />
            </mesh>
          ) : (
            <mesh
              key={object.uuid}
              geometry={object.geometry}
              position={object.position}
              rotation={object.rotation}
              scale={object.scale}
            >
              <meshStandardMaterial color={"black"} />
            </mesh>
          )
        )}
        <mesh geometry={nodes.Macbook.geometry}>
          <meshStandardMaterial color={"black"} />
        </mesh>
      </group>
    </>
  );
}

export default MacBook;
