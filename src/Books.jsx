import React, { useRef } from "react";
import Mesh from "./Mesh";
import { Html, useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import { useFrame } from "@react-three/fiber";

const BooksArray = () => {
  const BookColor = [
    " raisinBlack",
    "blackOlive",
    "darkLiver",

    "onyx",
    "eerieBlack",
  ];
  const books = [];
  for (let i = 1; i <= 15; i++) {
    books.push({
      bookObj: `book-${i}`,
      paperObj: i >= 10 ? `BookPapers0${i}` : `BookPapers00${i}`,
      bookColor: BookColor[Math.floor(Math.random() * 4)],
      paperColor: "gray",
      bodyRef: useRef(),
    });
  }
  return books;
};
function Books() {
  const booksWithPapers = BooksArray();

  const addImpulse = (index) => {
    const impulse = { x: 0, y: 0.01, z: 0.01 };
    booksWithPapers[index].bodyRef.current.applyImpulse(impulse);
  };

  return (
    <>
      {booksWithPapers.map((pair, index) => (
        <group key={index} onClick={() => addImpulse(index)}>
          <RigidBody colliders="hull" ref={pair.bodyRef} canSleep={false}>
            <group>
              <Mesh
                obj={pair.bookObj}
                color={pair.bookColor}
                castingShadow={false}
                receivingShadow={false}
              />
              <Mesh
                obj={pair.paperObj}
                color={pair.paperColor}
                castingShadow={false}
                receivingShadow={false}
              />
            </group>
          </RigidBody>
        </group>
      ))}

      <Mesh
        obj={"openbook"}
        color={"darkLiver"}
        castingShadow={false}
        receivingShadow={false}
      />

      <Mesh
        obj={"openbookPapers1"}
        color={"gray"}
        castingShadow={false}
        receivingShadow={false}
      />
      <RigidBody
        colliders={"hull"}
        type="fixed"
        position={[0.5954627394676208, 0.5697689652442932, -1.4306234121322632]}
        rotation={[
          -1.124999372546641, -0.030947687476854925, -1.2041808089886281,
        ]}
      >
        <Mesh
          obj={"openbook001"}
          color={"raisinBlack"}
          castingShadow={false}
          receivingShadow={true}
          positioning={[0, 0, 0]}
          rotating={[0, 0, 0]}
        />
      </RigidBody>
      <Mesh
        obj={"openbookPapers1001"}
        color={"gray"}
        castingShadow={false}
        receivingShadow={false}
      />
    </>
  );
}

export default Books;
