import React from 'react';
import { AboutInterface } from '../../../data/profile';
import './About.css';

export default function About (props: AboutInterface) {
  const { name, description } = props;
  return (
    <section className="About">
      <h1>{name}</h1>
      <>{description}</>
    </section>
  );
};
