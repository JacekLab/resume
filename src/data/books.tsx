import React from 'react';
/**
 * BookOnHover
 * title
 * authorName
 * authorSurname
 */


/**
 * BookClicked
 * status
 * clicked
 * book
 * - title
 * - authorName
 * - authorSurname
 * ...
 */

 export type BookSize = "XL" | "L" | "M" | "S";

 export type BookStatus = "Read" | "Being read" | "Want to read";

 export interface BookEssentialInfo {
   id: number,
   title: string,
   authorName: string,
   authorSurname: string,
 };

 export interface BookInterface extends BookEssentialInfo {
  cover: string,  // create validating func if ends with .jpg or .png
  pages: number,
  format: BookSize,
  editor: string,
  status: BookStatus,
  genre: string,
  topic: string[],
  brief_pl: JSX.Element | null,
  brief_en: JSX.Element | null,
 }

 export const MY_LIBRARY: Array<BookInterface> = [
  {
    id: 1,
    title: "Dizajn na co dzień",
    authorName: "Don",
    authorSurname: "Norman",
    cover: "design-na-codzien.jpg",
    pages: 367,
    format: "XL",
    editor: "Karakter",
    status: "Being read",
    genre: "Design",
    topic: ["Design", "Psychology", "Cognition"],
    brief_pl: (
      <p>
        Podręcznik dobrego projektowania nasycony konkretną wiedzą. Bardzo solidna dawka przydatnych informacji dla dizajnerów
      </p>
      ),
    brief_en: (
      <p>
        A classic book on design written by a father of usability and human center design. Very inquisitive and passionate lecture. A deep dive into human cognition and psychology. A book not only about the way we perceive design, but also how good design should be created.
      </p>
      ),
  },
  {
    id: 2,
    title: "Bystre Zwierzę",
    authorName: "Frans",
    authorSurname: "de Wall",
    cover: "bystre-zwierze.jpg",
    pages: 434,
    format: "M",
    editor: "Copernicus Center",
    status: "Read",
    genre: "Design",
    topic: ["Primatology", "Cognition", "Nature"],
    brief_pl: null,
    brief_en: (
      <p>
        A scientist and primatologist takes off for a journey through different species, showing off how wise they can be. An open mind of the author gives us insights in the world that is far richer that we usually think.
      </p>
      ),
  }
 ];
