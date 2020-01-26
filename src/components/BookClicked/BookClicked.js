import React from 'react';
import Aux from '../../hoc/Auxiliary';

import './BookClicked.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faQuoteRight, faBook, faBookReader, faCalendar } from '@fortawesome/free-solid-svg-icons';

const BookClicked = ({ book, clicked }) => {
  
  const bookStatus = status => {
    switch(status) {
      case "Read":
    return " Read";
      case "Being read":
    return " Being read";
      case "Planned to read":
    return " Planned to read";
      default:
        return "Read"
    }
  }

  const statusIcon = status => {
    switch(status) {
      case "Read":
    return <FontAwesomeIcon icon={faBook} style={{color: "var(--sec-col)"}} />;
      case "Being read":
    return <FontAwesomeIcon icon={faBookReader} style={{color: "var(--sec-col)"}}/>;
      case "Planned to read":
    return <FontAwesomeIcon icon={faCalendar} style={{color: "var(--sec-col)"}}/>;
      default:
        return "Read"
    }
  }

  return (
    <div className="BookClicked" id="BookClicked">
      <div className="BookImgAndMainDetails__wrapper">
        <div className="BookImgWrapper">
          <img 
            src={`assets/book-covers/${book.cover}`} 
            alt={`Cover of a "${book.title}"`} 
          />
        </div>
        <div className="MainDetails">
          <button className="ShelfButton CloseBook">
            <FontAwesomeIcon 
              onClick={() => clicked(null)}
              icon={faTimes} />
          </button>
          <p><span>Title:</span> {book.title}, {`p. ${book.pages}`}</p>
          <p><span>Author:</span> {book.authorName} {book.authorSurname}</p>
          <p><span>Genre:</span>{` ${book.genre}`}</p>
          <p>
          {statusIcon(book.status)}
          <span>{bookStatus(book.status)}</span>
          </p>
        </div>
      </div>
      <div className="MoreDetails">
        { book.impressions_en.length > 0 ?
          (<Aux>
            <FontAwesomeIcon icon={faQuoteRight} />
            <p>{book.impressions_en}</p>
          </Aux>)
          :
          null
        }
      </div>
    </div>
  )
}

export default BookClicked
