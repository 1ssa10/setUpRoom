import { useGLTF } from "@react-three/drei";
import React from "react";
import Mesh from "./Mesh";

function Wires() {
  const { nodes } = useGLTF("./desk.glb");

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
        color={"onyx"}
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
        color={"eerieBlack"}
        castingShadow={false}
        receivingShadow={false}
      />
    </>
  );
}

export default Wires;
