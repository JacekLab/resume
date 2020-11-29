import React, { ReactElement } from "react";

interface About {
  name: string,
  description: ReactElement
};
export const ABOUT: About = {
  name: "Jacek Dyński",
  description: <p>My main area of expertize is web development and design. I have experience in building business single page web applications in React.js. My core focus is modern JavaScript, React exosystem, and PWA with Gatsby. <br /> I am also interested in usability, accessibility and design systems. I like to experiment with SVG, canvas and animations.</p>,
};

interface MainInfo {
  email: string,
  github: string,
  jobTitle: string,
  languages: Array<string>,
  location: string
};
export const MAIN_INFO: MainInfo = {
  email: "jacek.dynski@gmail.com",
  github: "https://github.com/JacekLab",
  jobTitle: "web developer, designer",
  languages: ["Polish", "English", "Portuguese", "JavaScript", "HTML", "CSS"],
  location: "PL, Opole"
}

interface Technologies {
  know: Array<string>,
  learning: Array<string>,
  familiar: Array<string>,
};
export const TECHNOLOGIES: Technologies = {
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