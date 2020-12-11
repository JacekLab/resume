import React from 'react';
import Header from './components/Header/Header';
import SectionContainer from './components/SectionContainer/Section-container';
import BookShelf from './components/BookShelf/BookShelf';

function App() {
  return (
    <div className="AppContainer">
      <Header />
      <SectionContainer />
      <BookShelf />
    </div>
  );
}

export default App;
