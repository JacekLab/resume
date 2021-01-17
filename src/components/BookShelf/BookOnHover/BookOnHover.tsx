import React from "react";
import { BookEssentialInfo } from "../../../types";
import "./BookOnHover.css";

const BookOnHover = ({ book }: { book: BookEssentialInfo }): JSX.Element => {
  return (
    <div className="BookOnHover">
      <p>
        {book.title.length >= 25 ? `${book.title.slice(0, 24)}...` : book.title}
        {`, ${book.authorName} ${book.authorSurname}`}
      </p>
    </div>
  );
};

export default BookOnHover;
