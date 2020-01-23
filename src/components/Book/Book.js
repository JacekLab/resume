import React from "react";

import "./Book.css";

const Book = ({
  title,
  onEnter,
  onLeave,
  clicked,
  wrapperStyles,
  coverStyles,
  textStyles,
  checkHeight,
}) => {

  const titleAdjusted = (bookHeight) => {
      switch(bookHeight) {
        case "11rem":
            return title.slice(0, 17);
        case "12rem":
            return title.slice(0, 22);
        case "13rem":
          return title.slice(0, 24);
        default:
          return 20;
      }
  } 

  return (
    <div 
      className="BookWrapper"
      style={wrapperStyles}
    >
      <div
        className="Book"
        style={coverStyles}
      >
      </div>
      <div 
        onMouseEnter={() => onEnter(title)}
        onMouseLeave={() => onLeave(null)}
        onClick={() => clicked(title)}
        className="BookTitle" >
        {titleAdjusted(checkHeight)}
        {titleAdjusted(checkHeight).length < title.length ? " ..." : null}
      </div>
    </div>
  );
};

export default Book;

// const Book = ({ style, textColor, title, onEnter, onLeave, clicked, children }) => {
//   return (
//     <div
//       className="Book"
//       style={style}
//       onMouseEnter={() => onEnter(title)}
//       onMouseLeave={() => onLeave(null)}
//       onClick={() => clicked(title)} >{title.slice(0, 23)}{title.length > 23 ? '...' : null}
//     </div>
//   )
// }
