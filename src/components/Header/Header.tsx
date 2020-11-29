import React from 'react';
import HeaderImage from './HeaderImage/HeaderImage';
import About from './About/About';
import { ABOUT, MAIN_INFO } from '../../data/profile';

export default function Header() {

  const { name, description} = ABOUT;

  return (
    <header className="container-full Header__container">
      <div className="container Header">
        <HeaderImage />
        <About name={name} description={description}/>
      </div>
    </header>
  );
};