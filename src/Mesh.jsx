import React from "react";
import * as THREE from "three";
import { useGLTF } from "@react-three/drei";

const materials = {
  raisinBlack: new THREE.MeshStandardMaterial({ color: 0x262626 }),
  blackOlive: new THREE.MeshStandardMaterial({ color: 0x3d3d3d }),
  darkLiver: new THREE.MeshStandardMaterial({ color: 0x4f4f4f }),
  gray: new THREE.MeshStandardMaterial({ color: 0x7f7f7f }),
  onyx: new THREE.MeshStandardMaterial({ color: 0x393939 }),
  eerieBlack: new THREE.MeshStandardMaterial({ color: 0x1e1e1e }),
};

function Mesh({
  obj,
  color,
  castingShadow,
  receivingShadow,

  ...props
}) {
  const { nodes } = useGLTF("./desk.glb");

  return (
    <>
      <mesh
        geometry={nodes[obj].geometry}
        material={materials[color]}
        position={props.positioning ? props.positioning : nodes[obj].position}
        rotation={props.rotating ? props.rotating : nodes[obj].rotation}
        scale={props.scaling ? props.scaling : nodes[obj].scale}
        castShadow={castingShadow}
        receiveShadow={receivingShadow}
      />
    </>
  );
}

export default Mesh;
