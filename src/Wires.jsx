import React from "react";
import Mesh from "./Mesh";

function Wires() {
  return (
    <>
      <Mesh
        obj={"HDMI_"}
        color={"raisinBlack"}
        castingShadow={false}
        receivingShadow={false}
      />
      <Mesh
        obj="wsle"
        color={"gray"}
        castingShadow={false}
        receivingShadow={false}
      />
      <Mesh
        obj={"monitorElic"}
        color={"darkLiver"}
        castingShadow={false}
        receivingShadow={false}
      />
      <Mesh
        obj={"charger"}
        color={"darkLiver"}
        castingShadow={false}
        receivingShadow={false}
      />
    </>
  );
}

export default Wires;
