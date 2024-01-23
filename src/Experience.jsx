import React from "react";
import { OrbitControls, useGLTF, useTexture } from "@react-three/drei";
import Desk from "./Desk";
import Chair from "./Chair";
import { Perf } from "r3f-perf";
import Mesh from "./Mesh";
import Bed from "./Bed";
import Shelf from "./Shelf";
function Experience() {
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
          receivingShadow={false}
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
      <Bed />
      <Shelf />
    </>
  );
}

export default Experience;
