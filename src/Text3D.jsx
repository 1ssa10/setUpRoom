import React from "react";
import { Text, Float } from "@react-three/drei";

function Text3D() {
  return (
    <>
      <Float speed={2} floatIntensity={1} rotationIntensity={0.5}>
        <Text
          font="./Honk-Regular-VariableFont_MORF,SHLN.ttf"
          fontSize={0.2}
          position={[0, 1.7, -1.8]}
          color={"black"}
          maxWidth={3}
          textAlign="center"
        >
          Try Clicking on the book, maybe the papers too !!
        </Text>
      </Float>
    </>
  );
}

export default Text3D;
