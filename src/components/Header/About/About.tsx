import React, { ReactElement } from 'react';
import './About.css';

export default function HeaderImage ({ name, description }: {name: string, description: ReactElement}) {
  return (
    <section className="About">
          <h1>{name}</h1>
          <p>{description}</p>
        </section>
  );
};
