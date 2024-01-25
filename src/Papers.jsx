import React, { useRef } from "react";
import Mesh from "./Mesh";
import { RigidBody } from "@react-three/rapier";
import { useGLTF } from "@react-three/drei";

const paperArray = () => {
  const papers = [];
  for (let i = 1; i <= 10; i++) {
    papers.push({
      paperObj: i < 10 ? `deskPapers00${i}` : `deskPapers0${i}`,
      bodyRef: useRef(),
    });
  }
  return papers;
};
function Papers() {
  const papersArray = paperArray();
  const { nodes } = useGLTF("./desk.glb");
  const addImpulse = (index) => {
    const impulse = { x: (Math.random() - 0.5) * 0.001, y: 0.0001, z: -0.0005 };
    papersArray[index].bodyRef.current.applyImpulse(impulse);
  };
  return (
    <>
      {papersArray.map((papers, index) => (
        <group
          key={index}
          onClick={() => addImpulse(index)}
          position={nodes[papers.paperObj].position}
          rotation={nodes[papers.paperObj].rotation}
        >
          <RigidBody colliders={"ball"} canSleep={false} ref={papers.bodyRef}>
            <Mesh
              obj={papers.paperObj}
              color={"gray"}
              castingShadow={false}
              receivingShadow={false}
              positioning={[0, 0, 0]}
              rotating={[0, 0, 0]}
            />
          </RigidBody>
        </group>
      ))}
      <Mesh
        obj={"paperbook1"}
        color={"gray"}
        castingShadow={false}
        receivingShadow={false}
      />
      <Mesh
        obj={"paperbook2"}
        color={"gray"}
        castingShadow={false}
        receivingShadow={false}
      />
    </>
  );
}

export default Papers;
