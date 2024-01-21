import React from "react";
import { OrbitControls, useGLTF, useTexture } from "@react-three/drei";
import Desk from "./Desk";
import Chair from "./chair";
import { Perf } from "r3f-perf";
import Mesh from "./Mesh";
function Experience() {
  const { nodes } = useGLTF("./desk.glb");

  console.log(nodes);

  return (
    <>
      <Perf />
      <OrbitControls makeDefault />
      <directionalLight position={[1, 1, 1.5]} intensity={5} castShadow />
      <directionalLight position={[-3, 2, 0]} intensity={10} castShadow />
      <group>
        <Mesh
          obj={"Floor"}
          color={"gray"}
          castingShadow={true}
          receivingShadow={true}
        />
        <Mesh
          obj={"Floor001"}
          color={"blackOlive"}
          castingShadow={false}
          receivingShadow={true}
        />
      </group>

      <Desk />
      <Chair />
    </>
  );
}

export default Experience;
