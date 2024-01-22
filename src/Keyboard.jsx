import React, { useRef } from "react";
import Mesh from "./Mesh";
import { useFrame } from "@react-three/fiber";

function Keyboard() {
  const mouseRef = useRef();
  useFrame((state, delta) => {
    const time = state.clock.getElapsedTime();
    mouseRef.current.position.x = Math.sin(time * 2) * 0.03;
    mouseRef.current.rotation.y = Math.sin(time * 1) * 0.06;
  });
  return (
    <>
      <Mesh
        obj={"keyboard"}
        color={"raisinBlack"}
        castingShadow={false}
        receivingShadow={false}
      />
      <group ref={mouseRef}>
        <Mesh
          obj={"mouse"}
          color={"eerieBlack"}
          castingShadow={false}
          receivingShadow={false}
        />
      </group>
    </>
  );
}

export default Keyboard;
