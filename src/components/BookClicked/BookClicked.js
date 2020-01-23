import React from 'react';
import Aux from '../../hoc/Auxiliary';

import './BookClicked.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes, faQuoteRight } from '@fortawesome/free-solid-svg-icons';

const BookClicked = ({ book, clicked }) => {
  
  const bookStatus = status => {
    switch(status) {
      case "Przeczytane":
        return "Przeczytane";
      case "W trakcie czytania":
        return "W trakcie czytania";
      case "Chcę przeczytać":
        return "Chcę przeczytać";
      default:
        return "Przeczytane"
    }
  }

  return (
    <div className="BookClicked">
      <div className="BookImgAndMainDetails__wrapper">
        <div className="BookImgWrapper">
          <img 
            src={`/assets/book-covers/${book.cover}`} 
            alt={`Cover of a "${book.title}"`} 
          />
        </div>
        <div className="MainDetails">
          <button className="ShelfButton CloseBook">
            <FontAwesomeIcon 
              onClick={() => clicked(null)}
              icon={faTimes} />
          </button>
          <p><span>Tytuł:</span> {book.title}</p>
          <p><span>Autor:</span> {book.authorName} {book.authorSurname}</p>
          <p><span>Liczba stron:</span>{` ${book.pages}`}</p>
          <p><span>Wydawnictwo:</span>{` ${book.editor}`}</p>
          <p><span>{bookStatus(book.status)}</span></p>
        </div>
      </div>
      <div className="MoreDetails">
        { book.impressions.length > 0 ?
          (<Aux>
            <FontAwesomeIcon icon={faQuoteRight} />
            <p>{book.impressions}</p>
          </Aux>)
          :
          null
        }
      </div>
    </div>
  )
}

export default BookClicked
