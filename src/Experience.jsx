import React, { useState } from "react";
import { OrbitControls, useGLTF } from "@react-three/drei";
import Desk from "./Desk";
import Chair from "./Chair";
import { Perf } from "r3f-perf";
import Mesh from "./Mesh";
import Bed from "./Bed";
import Shelf from "./Shelf";
import { RigidBody } from "@react-three/rapier";
import Text3D from "./Text3D";

function Experience() {
  const { nodes } = useGLTF("./desk.glb");
  console.log(nodes);
  return (
    <>
      <Perf />

      <OrbitControls makeDefault />
      <directionalLight position={[1, 1, 1.5]} intensity={5} castShadow />
      <directionalLight position={[-3, 2, 0]} intensity={10} castShadow />

      <group
        position={[-1.234682321548462, 0.7200343608856201, -0.6359536051750183]}
        rotation={[0, -1.5707963267948966, 0]}
      >
        <RigidBody type="fixed" colliders={"trimesh"}>
          <Mesh
            obj={"Floor"}
            color={"gray"}
            castingShadow={true}
            receivingShadow={false}
            posCollide={1}
            positioning={[0, 0, 0]}
            rotating={[0, 0, 0]}
          />
        </RigidBody>
        <RigidBody type="fixed">
          <Mesh
            obj={"Floor001"}
            color={"blackOlive"}
            castingShadow={false}
            receivingShadow={true}
            positioning={[0, 0, 0]}
            rotating={[0, 0, 0]}
          />
        </RigidBody>
      </group>

      <Desk />
      <Chair />
      <Bed />
      <Shelf />
      <Text3D />
    </>
  );
}

export default Experience;
