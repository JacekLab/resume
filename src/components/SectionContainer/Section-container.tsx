import React from 'react';
import { EDUCATION, EXPERIENCE, COURSES } from '../../data/profile';
import Technology from './Sections/Technology';
import Experience from './Sections/Experience';
import Education from './Sections/Education';
import Courses from './Sections/Courses';
import './Sections.css'

export default function SectionContainer() {
  return (
    <article className="container Sections">
      <Technology />
      <Experience experience={EXPERIENCE}/>
      <Education education={EDUCATION}/>
      <Courses courses={COURSES}/>
    </article>
  );
}