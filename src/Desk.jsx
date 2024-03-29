import React from "react";
import MacBook from "./MacBook";
import Stand from "./Stand";
import Wires from "./Wires";
import Mesh from "./Mesh";
import Keyboard from "./Keyboard";
import Papers from "./Papers";
import { RigidBody } from "@react-three/rapier";

function Desk() {
  return (
    <>
      <RigidBody colliders={"trimesh"} type="fixed">
        <Mesh
          obj={"Desk001"}
          color={"onyx"}
          castingShadow={false}
          receivingShadow={false}
        />
      </RigidBody>
      <Mesh
        obj={"monitor"}
        color={"eerieBlack"}
        castingShadow={false}
        receivingShadow={false}
      />
      <Mesh
        obj={"mousepad"}
        color={"darkLiver"}
        castingShadow={false}
        receivingShadow={false}
      />

      <MacBook />
      <Stand />
      <Mesh
        obj={"headset"}
        color={"darkLiver"}
        castingShadow={false}
        receivingShadow={false}
      />
      <Mesh
        obj={"headsetstand"}
        color={"eerieBlack"}
        castingShadow={false}
        receivingShadow={false}
      />
      <Wires />
      <Keyboard />
      <Papers />
    </>
  );
}

export default Desk;
