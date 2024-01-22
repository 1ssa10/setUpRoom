import React from "react";
import Mesh from "./Mesh";

function Bed() {
  return (
    <>
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
    </>
  );
}

export default Bed;
