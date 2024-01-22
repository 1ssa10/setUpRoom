import React from "react";
import Mesh from "./Mesh";
import Books from "./Books";

function Shelf() {
  return (
    <>
      <Mesh
        obj={"shelf"}
        color={"eerieBlack"}
        castingShadow={false}
        receivingShadow={false}
      />
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
