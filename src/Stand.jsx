import React from "react";
import Mesh from "./Mesh";

function Stand() {
  return (
    <>
      <Mesh
        obj={"Stand"}
        color={"eerieBlack"}
        castingShadow={false}
        receivingShadow={false}
      />
    </>
  );
}

export default Stand;
