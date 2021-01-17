/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from "react";
import { BookInterface, HandleBookFunc } from "../../../types/index";
import "./Book.css";

interface BookProps {
  book: BookInterface;
  bookWidth: string;
  coverStyles: React.CSSProperties;
  bookHeight: any;
  handleBook: HandleBookFunc;
}

const Book: React.FC<BookProps> = (props: BookProps) => {
  const { book, bookWidth, coverStyles, bookHeight, handleBook } = props;

  return (
    <div className="BookWrapper" style={{ width: bookWidth, height: bookHeight }}>
      <div className="Book" style={coverStyles} />
      <div
        onMouseEnter={() => handleBook(book, "hover")}
        onMouseLeave={() => handleBook(undefined, "hover")}
        onClick={() => handleBook(book, "click")}
        onKeyDown={() => handleBook(book, "click")}
        className="BookTitle"
      >
        {book.title.length > 24 ? `${book.title.slice(0, 22)} . . .` : book.title}
      </div>
    </div>
  );
};

export default Book;
