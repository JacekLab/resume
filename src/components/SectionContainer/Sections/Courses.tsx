import React from 'react';

export default function Courses({ courses}: {courses: Array<string>}) {
  return (
    <section className="courses">
    <h2>Courses</h2>
    <ul>
      {courses.map(course => <li key={course}>{course}</li>)}
    </ul>
  </section>
  );
}