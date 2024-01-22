import React from "react";
import Mesh from "./Mesh";

const paperArray = () => {
  const papers = [];
  for (let i = 1; i <= 10; i++) {
    papers.push({
      paperObj: i < 10 ? `deskPapers00${i}` : `deskPapers0${i}`,
    });
  }
  return papers;
};
function Papers() {
  const papersArray = paperArray();
  return (
    <>
      {papersArray.map((papers, index) => (
        <Mesh
          key={index}
          obj={papers.paperObj}
          color={"gray"}
          castingShadow={false}
          receivingShadow={false}
        />
      ))}
      <Mesh
        obj={"paperbook1"}
        color={"gray"}
        castingShadow={false}
        receivingShadow={false}
      />
      <Mesh
        obj={"paperbook2"}
        color={"gray"}
        castingShadow={false}
        receivingShadow={false}
      />
    </>
  );
}

export default Papers;
