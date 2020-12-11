import React from 'react';
import { WorkExperience } from '../../../data/profile';


export default function Experience({ experience }: {experience: Array<WorkExperience>}) {
  return (
    <section className="work">
      <h2>Experience</h2>
      {/* Arrow */}
      <div className="work-arrow"></div>
      <div className="arrow">
        <i className="right" />
      </div>

      {/* Work experience */}
      <div className="work-items__wrapper">
        {experience.map(({ dates, role, company }) => {
          return (
            <div className="work-item" key={dates}>
              <div className="work-circle" />
              <p>{dates}</p>
              <h3>{role}</h3>
              <p>{company}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}