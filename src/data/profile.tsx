import React from "react";

export interface AboutInterface {
  name: string,
  description: JSX.Element
};
export const ABOUT: AboutInterface = {
  name: "Jacek Dyński",
  description: <p>My main area of expertize is web development and design. I have experience in building business single page web applications in React.js. My core focus is modern JavaScript, React exosystem, and PWA with Gatsby. <br /> I am also interested in usability, accessibility and design systems. I like to experiment with SVG, canvas and animations.</p>,
};

export interface MainInfoInterface {
  email: string,
  github: string,
  jobTitle: string,
  languages: Array<string>,
  location: string
};
export const MAIN_INFO: MainInfoInterface = {
  email: "jacek.dynski@gmail.com",
  github: "https://github.com/JacekLab",
  jobTitle: "web developer, designer",
  languages: ["Polish", "English", "Portuguese", "JavaScript", "HTML", "CSS"],
  location: "PL, Opole"
}

export interface TechnologiesInterface {
  know: string[],
  learning: Array<string>,
  familiar: Array<string>,
};
export const TECHNOLOGIES: TechnologiesInterface = {
  know: [
    "React",
    "Webpack",
    "ESLint",
    "Prettier",
    "OData"
  ],
  learning: [
    "Gatsby",
    "Redux",
    "Typescript",
    "GraphQL"
  ],
  familiar: [
    "AngularJS",
    "JIRA",
    "Atlassian",
    "Git",
    "SharePoint 2016",
  ]
};

export interface WorkExperience {
  dates: string,
  role: string,
  company: string,
  location: string,
}
export const EXPERIENCE: Array<WorkExperience> = [
  {
    dates: '09.2012-06.2013',
    role: 'EVS Volunteer',
    company: 'Association ALEM',
    location: 'Portugal, Lisbon'
  },
  {
    dates: '12.2013-12.2016',
    role: 'Editor in Design Services',
    company: 'Adecco Consulting',
    location: 'Poland, Wroclaw'
  },
  {
    dates: '01.2017-12.2018',
    role: 'Graphic designer',
    company: 'Credit Suisse',
    location: 'Poland, Wroclaw'
  },
  {
    dates: '01.2019-12.2020',
    role: 'Web developer',
    company: 'Credit Suisse',
    location: 'Poland, Wroclaw'
  },
];

export interface EducationItem {
  dates: string,
  school: string,
  faculty: string,
}
export const EDUCATION: Array<EducationItem> = [
  {
    dates: '2009-2011',
    school: 'Jagiellonian University',
    faculty: 'Master of Cultural Studies',
  },
  {
    dates: '2007-2009',
    school: 'University of Opole',
    faculty: 'Bachelor of Cultural Studies',
  },
]

export const COURSES: Array<string> = [
  'Professional Scrum Master I, Altkom Akademia',
  'Reactive Programming with RxJS, Altkom Akademia',
  'Advanced JavaScript aspects, Altkom Akademia',
  'UX/UI, Akademia UX/UI',
  'SPA with React.js and Redux, Altkom Akademia',
  'Animations with Anime.js and CSS 3, Altkom Akademia',
  'Project Management Essentials, Energy Group',
  'Project Risk Management, Energy Group',
]