/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from "react";
import { BookInterface, BookSize } from "../../../types/index";
import "./Book.css";

interface BookProps {
  book: BookInterface;
  bookWidth: string;
  coverStyles: React.CSSProperties;
  bookHeight: any;
  handleBook: any;
}

const Book: React.FC<BookProps> = (props: BookProps) => {
  const { book, bookWidth, coverStyles, bookHeight, handleBook } = props;

  const getAdjustTitle = (bookSize: BookSize): string => {
    switch (bookSize) {
      case "S":
      default:
        return book.title.slice(0, 17);
      case "M":
        return book.title.slice(0, 22);
      case "L":
        return book.title.slice(0, 24);
    }
  };

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
        {getAdjustTitle(bookHeight)}
        {getAdjustTitle(bookHeight).length < book.title.length ? " ..." : null}
      </div>
    </div>
  );
};

export default Book;
