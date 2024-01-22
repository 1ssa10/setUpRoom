import React from "react";
import Mesh from "./Mesh";

const BooksArray = () => {
  const BookColor = [
    " raisinBlack",
    "blackOlive",
    "darkLiver",
    "gray",
    "onyx",
    "eerieBlack",
  ];
  const books = [];
  for (let i = 1; i <= 15; i++) {
    books.push({
      bookObj: `book-${i}`,
      paperObj: i >= 10 ? `BookPapers0${i}` : `BookPapers00${i}`,
      bookColor: BookColor[Math.floor(Math.random() * 5)],
      paperColor: "gray",
    });
  }
  return books;
};
function Books() {
  const booksWithPapers = BooksArray();
  return (
    <>
      {booksWithPapers.map((pair, index) => (
        <group key={index}>
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
      <Mesh
        obj={"openbook001"}
        color={"raisinBlack"}
        castingShadow={false}
        receivingShadow={true}
      />
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
