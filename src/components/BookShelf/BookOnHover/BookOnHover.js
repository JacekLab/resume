import React from "react";

import "./BookOnHover.css";

const BookOnHover = ({ book }) => {
  return (
    <div className="BookOnHover">
      {/* <p>
      <span>Tytuł: </span>{book.title}</p>
      <p><span>Autor: </span>{book.authorName} {book.authorSurname}</p>
      <p><span>Liczba stron: </span>{book.pages} </p> */}

      <p>
        {book.title.length > 25 ? `${book.title.slice(0, 24)}...` : book.title},{" "}
        {book.authorName} {book.authorSurname}
      </p>
    </div>
  );
};

export default BookOnHover;
