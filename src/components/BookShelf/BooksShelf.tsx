import React, { useState } from "react";

import Book from "./Book/Book";
import BookOnHover from "./BookOnHover/BookOnHover";
import BookClicked from "./BookClicked/BookClicked";

import "./BookShelf.css";
import "./Book/Book.css";
import { MY_LIBRARY,  } from "../../data/books";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight
} from "@fortawesome/free-solid-svg-icons";

const BookShelf = () => {
  const [currentBooks, setCurrentBooks] = useState({
    start: 0,
    end: 5,
    totalPages: null,
    hovered: null,
    clicked: null,
    toShow: null,
    toShowCount: null,
  });

  const BOOKS = MY_LIBRARY;

  return (
    <section id="bookshelf__container" className="container bookshelf__container">
      <h2>My interests</h2>
      <p>
        Instead of describing my intersts I could just show you the books I read. You can click on each to check out the details.
      </p>
    </section>
  );
};

export default BookShelf;
