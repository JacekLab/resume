import React, { useRef } from "react";
import Header from "./components/Header/Header";
import SectionContainer from "./components/SectionContainer/Section-container";
import BookShelf from "./components/BookShelf/BooksShelf";

const App: React.FC = () => {
  const appRef = useRef<HTMLDivElement>(null);
  return (
    <div className="AppContainer" ref={appRef}>
      <Header />
      <SectionContainer />
      <BookShelf />
    </div>
  );
};

export default App;
