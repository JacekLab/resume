import React from 'react';
import { ABOUT, MAIN_INFO as mainInfo } from '../../data/profile';
import About from './About/About';
import HeaderImage from './HeaderImage/HeaderImage';
import MainInfo from './MainInfo/MainInfo';
import './Header.css';

export default function Header() {

  const { name, description} = ABOUT;

  return (
    <header className="container-full Header__container">
      <div className="container Header">
        <HeaderImage />
        <About name={name} description={description}/>
        <MainInfo mainInfo={mainInfo}/>
      </div>
    </header>
  );
};