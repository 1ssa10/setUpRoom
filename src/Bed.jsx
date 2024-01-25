import React from "react";
import Mesh from "./Mesh";
import { RigidBody } from "@react-three/rapier";

function Bed() {
  return (
    <>
      <RigidBody type="fixed">
        <Mesh
          obj={"bed"}
          color={"blackOlive"}
          castingShadow={false}
          receivingShadow={false}
        />
        <Mesh
          obj={"pillow"}
          color={"gray"}
          castingShadow={false}
          receivingShadow={false}
        />
        <Mesh
          obj={"sheet"}
          color={"eerieBlack"}
          castingShadow={false}
          receivingShadow={false}
        />
      </RigidBody>
    </>
  );
}

export default Bed;
