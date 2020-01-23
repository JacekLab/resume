import React from 'react';

import Aux from '../../hoc/Auxiliary';
import Book from '../../components/Book/Book';
import BookOnHover from '../../components/BookOnHover/BookOnHover';
import BookClicked from '../../components/BookClicked/BookClicked';

import './BookShelf.css';
import '../../components/Book/Book.css';
import myLibrary from '../../data/books.json';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

class BookShelf extends React.Component {

  state = {
    bookStart: 0,
    bookEnd: 5,
    bookHovered: null,
    bookClicked: null,
    totalPages: null,
    booksToShow: null,
    booksToShowLength: null,
  }

  books = myLibrary.Books;

  totalPagesStart = () => {
    const totalPagesStart = this.books
    .map(book =>book.pages)
    .slice(this.state.bookStart, this.state.bookEnd)
    .reduce((a, b) => a + b)

    this.setState({ totalPages: totalPagesStart });
  }

  checkHeight = bookFormat => {
    switch(bookFormat) {
      case "big":
        return "13rem";
      case "medium":
        return "12rem";
      case "small":
        return "11rem";
      default: 
        return "11rem";
    }
  }

  handleHover = bookTitle => {
    const hoveredBookIndex = 
      this.books.map(book => book.title)
      .indexOf(bookTitle);

    if (bookTitle !== null) {
      this.setState({ bookHovered: hoveredBookIndex });
    } else {
      this.setState({ bookHovered: null });
    } 
    // console.log(bookTitle)
  }

  handlePreviousBooks = () => {
    const oldStart = this.state.bookStart; 
    const oldEnd = this.state.bookEnd; 
    const booksToShow = this.state.booksToShow;
    const currentStart = oldStart - booksToShow;
    const currentEnd = oldEnd - booksToShow;
    
    if(oldStart >= booksToShow) {
      const currentBooks = this.books.slice(currentStart, currentEnd);
      const currentTotalPages = currentBooks.map(book => book.pages).reduce((a, b) => a + b);
      const booksToShowLength = currentBooks.length;

      this.setState({ 
      bookStart: currentStart,
      bookEnd: currentEnd,
      totalPages: currentTotalPages,
      booksToShowLength
      }) 
    }
  }

  handleNextBooks = () => {
    const oldStart = this.state.bookStart; 
    const oldEnd = this.state.bookEnd; 
    const booksToShow = this.state.booksToShow;
    const currentStart = oldStart + booksToShow;
    const currentEnd = oldEnd + booksToShow;
    
    if(oldStart < this.books.length - booksToShow) {
      const currentBooks = this.books.slice(currentStart, currentEnd);
      const currentTotalPages = currentBooks.map(book => book.pages).reduce((a, b) => a + b);
      const booksToShowLength = currentBooks.length;

      this.setState({ 
      bookStart: currentStart,
      bookEnd: currentEnd,
      totalPages: currentTotalPages,
      booksToShowLength
      }) 
    }
  }

  handleBookClicked = bookTitle => {
     const cilckedBookIndex = 
      this.books.map(book => book.title)
      .indexOf(bookTitle);

    if (bookTitle !== null) {
      this.setState({ bookClicked: cilckedBookIndex });
    } else {
      this.setState({ bookClicked: null });
    } 
  
  }

  componentDidMount() {
    this.totalPagesStart();
    const viewportDetected = window.innerWidth;
    let booksToShow = null;

    viewportDetected < 499 ? booksToShow = 5 : booksToShow = 10;

    this.setState({bookEnd: booksToShow, booksToShow })
  }

  additionalPadding = (books, booksLength, booksMissing) => {
    if(books === 10) {
      if(booksMissing > 0 && booksMissing < 10) {
        return {padding: `0 ${(booksMissing / 2) * 10}%`}
      }
    }else if(books === 5) {
      if(booksMissing > 0 && booksMissing < 5) {
        return {padding: `0 ${((booksMissing / 2) * 20) + 10}%`}
      }
    }
  }


  render() {
    const { bookStart, bookEnd, bookHovered, bookClicked, totalPages, booksToShow, booksToShowLength } = this.state;
    const currentBooks = this.books.slice(bookStart, bookEnd);
    const booksMissingOnShelf = booksToShow - booksToShowLength;
    return (
      <Aux>
        <div style={{position:"relative"}}>
        { bookHovered !== null ?
          <BookOnHover book={this.books[bookHovered]} /> :
          null }
        </div>
      
        <div 
          className="BookShelf" 
          style={this.additionalPadding(booksToShow, booksToShowLength, booksMissingOnShelf)}
        >
          {/* previous books */}
          <button 
            className="ShelfButton Previous"
            type="button"
            name="next 10" 
            onClick={this.handlePreviousBooks}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          {currentBooks.map(book => {
            return (  
                <Book 
                key={book.id} 
                title={book.title}
                wrapperStyles={{
                  width: `${(book.pages * 100) / totalPages}%`,
                  height: this.checkHeight(book.format),
                }}
                coverStyles={{
                  backgroundImage: `url('assets/book-covers/${book.cover}')`,
                  backgroundSize: "cover",
                  height: this.checkHeight(book.format),
                }}
                // textStyles={{color: book.color}}
                onEnter={this.handleHover}
                onLeave={this.handleHover}
                clicked={this.handleBookClicked}
                checkHeight={this.checkHeight(book.format)}
              />
            )
          })}
          {/* next books */}
          <button 
            className="ShelfButton Next"
            type="button" 
            name="next 10"
            onClick={this.handleNextBooks}
            >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
        <div className="BookShelfBottom"></div>
        { bookClicked !== null ?
          <BookClicked 
            book={this.books[bookClicked]}
            clicked={this.handleBookClicked} /> :
          null }
      </Aux>
    )
  }
}

export default BookShelf;
