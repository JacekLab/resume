import React from 'react';
import { MainInfoInterface } from '../../../data/profile';
import './MainInfo.css';

export default function MainInfo({ mainInfo }: {mainInfo: MainInfoInterface}) {
  const { email, github, jobTitle, languages, location} = mainInfo;
  return (
    <section className="Main-info">
      <div className="Main-info-sub__wrapper">
        <div className="Main-info-sub-one">
          <p>
            <span>email:</span>
            <a href="mailto:jacek.dynski@gmail.com">{email}</a>
          </p>
          <p>
            <span>github:</span>
            <a
              href="https://github.com/JacekLab"
              rel="noopener noreferrer"
              target="_blank"
            >
              {github}
            </a>
          </p>
          <p><span>job:</span>{jobTitle}</p>
        </div>
        <div className="Main-info-sub-two">
          <p><span>languages:</span>{languages.join(', ')}</p>
          <p><span>location:</span>{location}</p>
        </div>
      </div>
    </section>
  );
};
