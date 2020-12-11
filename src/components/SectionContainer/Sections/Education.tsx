import React from 'react';
import { EducationItem } from '../../../data/profile';

export default function Education({ education }: {education: Array<EducationItem>}) {
  return (
    <section className="education">
      <h2>Education</h2>
      <div className="edu-wrapper">
        {education.map(({ school, faculty, dates }) => {
          return (
            <div key={dates}>
              <p>{school}</p>
              <p>{faculty}, 
                <span>{dates}</span>
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}