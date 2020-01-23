import React from 'react';

import './BookOnHover.css';

const BookOnHover = ({ book }) => {
  return (
    <div className="BookOnHover">
      {/* <p>
      <span>Tytuł: </span>{book.title}</p>
      <p><span>Autor: </span>{book.authorName} {book.authorSurname}</p>
      <p><span>Liczba stron: </span>{book.pages} </p> */}

      <p>
        {book.title}, {book.authorName} {book.authorSurname}, {book.pages} s.
      </p>
    </div>
  )
}

export default BookOnHover;
