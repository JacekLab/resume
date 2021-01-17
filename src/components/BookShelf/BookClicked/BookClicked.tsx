import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faQuoteRight,
  faBook,
  faBookReader,
  faCalendar,
} from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { BookStatus, BookInterface } from "../../../types/index";
import "./BookClicked.css";

interface BookClickedProps {
  book: BookInterface;
  handleClose: React.Dispatch<React.SetStateAction<null>>;
}
const BookClicked = ({ book, handleClose }: BookClickedProps): JSX.Element => {
  const getStatusIcon = (status: BookStatus): IconProp => {
    switch (status) {
      case "Read":
      default:
        return faBook;
      case "Being read":
        return faBookReader;
      case "Want to read":
        return faCalendar;
    }
  };

  return (
    <div className="Book-clicked" id="Book-clicked">
      <div className="Book-clicked__img__wrapper">
        <div className="Book-clicked__img">
          <img
            src={`assets/book-covers/${book.cover}`}
            alt={`Cover of a "${book.title}"`}
          />
        </div>
        <div className="Book-clicked__main-details">
          <button
            className="btn Book-clicked__close-btn"
            type="button"
            onClick={() => handleClose(null)}
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
          <p>
            <span>Title:</span>
            {` ${book.title}, p. ${book.pages}`}
          </p>
          <p>
            <span>Author:</span>
            {` ${book.authorName} ${book.authorSurname}`}
          </p>
          <p>
            <span>Genre:</span>
            {` ${book.genre}`}
          </p>
          <p>
            <FontAwesomeIcon
              icon={getStatusIcon(book.status)}
              className="Book__status-icon"
            />
            <span>{` ${book.status}`}</span>
          </p>
        </div>
      </div>
      {/* description */}
      {book.brief_en && (
        <div className="Book-clicked__more-details">
          <FontAwesomeIcon icon={faQuoteRight} />
          <p>{book.brief_en}</p>
        </div>
      )}
    </div>
  );
};

export default BookClicked;
