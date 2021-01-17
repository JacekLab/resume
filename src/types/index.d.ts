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
