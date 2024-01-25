import React from "react";
import Mesh from "./Mesh";
import Books from "./Books";
import { RigidBody } from "@react-three/rapier";

function Shelf() {
  return (
    <>
      <RigidBody
        type="fixed"
        colliders={"trimesh"}
        position={[-0.9788686037063599, 0, -1.7503063678741455]}
        rotation={[1.570796461153735, 0, -0]}
      >
        <Mesh
          obj={"shelf"}
          color={"eerieBlack"}
          castingShadow={false}
          receivingShadow={false}
          positioning={[0, 0, 0]}
          rotating={[0, 0, 0]}
        />
      </RigidBody>
      <Mesh
        obj={"trash"}
        color={"gray"}
        castingShadow={false}
        receivingShadow={false}
      />
      <Books />
    </>
  );
}

export default Shelf;
