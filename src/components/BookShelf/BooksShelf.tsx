import React, { useEffect, useState } from "react";
import { BookInterface, BookSize } from "../../types/index";

import Book from "./Book/Book";
import BookOnHover from "./BookOnHover/BookOnHover";
import BookClicked from "./BookClicked/BookClicked";

import "./BookShelf.css";
import "./Book/Book.css";

import MY_LIBRARY from "../../data/books";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
// import { string } from "prop-types";

interface CurrentBooks {
  bookStart: number;
  bookEnd: number;
  totalPages: number;
  toShow: number | null;
  toShowCount: number | null;
}
// https://medium.com/ableneo/typing-of-react-hooks-in-typescript-947b200fa0b0
const BookShelf: React.FC = () => {
  const [currentBooks, setCurrentBooks] = useState<CurrentBooks>({
    bookStart: 0,
    bookEnd: 5,
    totalPages: 0,
    toShow: null,
    toShowCount: null,
  });
  const { bookStart, bookEnd, totalPages } = currentBooks;

  // book on click, book on hover
  const [bookClicked, setBookClicked] = useState<BookInterface | undefined>(undefined);
  const [bookHovered, setBookHovered] = useState<BookInterface | undefined>(undefined);

  const books = MY_LIBRARY;
  const currentShelf = books.slice(bookStart, bookEnd);

  useEffect(() => {
    const totalPagesOnInit = books
      .slice(bookStart, bookEnd)
      .map((book) => book.pages)
      .reduce((a, b) => a + b);

    setCurrentBooks((prev) => ({ ...prev, totalPages: totalPagesOnInit }));
  }, []);

  interface HandleBookFunc {
    (book: BookInterface, stateToUpdate: "click" | "hover"): void;
  }
  const handleBook: HandleBookFunc = (book, stateToUpdate) => {
    if (stateToUpdate === "click") {
      setBookClicked(book);
      window.scrollTo({ top: 1000, left: 0, behavior: "smooth" });
    } else {
      setBookHovered(book);
    }
  };

  const getHeight = (bookSize: BookSize): string => {
    switch (bookSize) {
      case "L":
        return "13rem";
      case "M":
        return "12rem";
      case "S":
      default:
        return "11rem";
    }
  };

  return (
    <section id="bookshelf__container" className="container bookshelf__container">
      <h2>My interests</h2>
      <p>
        Instead of describing my intersts I could just show you the books I read. You can
        click on each to check out the details.
      </p>
      <div className="BookShelf">
        {bookHovered && <BookOnHover book={bookHovered} />}
        {currentShelf.map((book: BookInterface) => {
          return (
            <Book
              key={book.id}
              book={book}
              bookWidth={`${(book.pages * 100) / totalPages}%`}
              coverStyles={{
                backgroundImage: `url('assets/book-covers/${book.cover}')`,
                backgroundSize: "cover",
              }}
              bookHeight={getHeight(book.format)}
              handleBook={handleBook}
            />
          );
        })}
        <div className="BookShelfBottom" />
      </div>
      {bookClicked && (
        <BookClicked book={bookClicked} handleClose={() => setBookClicked(undefined)} />
      )}
    </section>
  );
};

export default BookShelf;
