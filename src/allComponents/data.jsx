import React from "react";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";

import {
  faHtml5,
  faCss3Alt,
  faReact,
  faNodeJs,
} from "@fortawesome/free-brands-svg-icons";
import { faBrush, faVideo, faUsers } from "@fortawesome/free-solid-svg-icons";
import { SiExpress, SiMongodb } from "react-icons/si";

/*Social Data*/
export const socialData = [
  {
    srcLink: "https://www.linkedin.com/in/shahmeer24mondal/",
    title: "LinkedIn",
    icon: faLinkedin,
  },
  {
    srcLink: "https://www.github.com/shahmeer24",
    title: "GitHub",
    icon: faGithub,
  },
  {
    srcLink: "https://www.leetcode.com/shahmeer24",
    title: "LeetCode",
    icon: faLaptopCode,
  },
];

/*Education Data*/
export const educationData = [
  {
    degree: "Masters of Computer Applications",
    institution: "Jadavpur University",
    location: " Kolkata",
    period: "2024-2026",
    grade: "CGPA: 8.57 (current)",
  },
  {
    degree: "Bachelors of Computer Science (Hons)",
    institution: "St. Xavier's College (Autonomous)",
    location: " Kolkata",
    period: "2021-2024",
    grade: "CGPA: 7.70",
  },
  {
    degree: "Elementary and High Schooling",
    institution: "Bishop Morrow School",
    location: " Krishnanagar",
    period: "2007-2021",
    grade: "ISC: 93.8%; ICSE: 91%",
  },
];

/*Experience Data*/
export const experienceData = [
  {
    name: "Graphitite",
    type: "Freelance",
    designation: "Web Developer",
    timeline: "Jun 2024 - Present",
    desc: "Develop and maintain websites for various clients, focusing on creating modern, responsive, and user-friendly interfaces to meet business objectives.",
    keyProject: "Amantran Group Hospitality Website",
    liveLink: "https://amantranhotels.netlify.app",
  },
];

/*Projects Data*/
export const projectsData = [
  {
    title: "Zypher",
    desc: "Designed and developed a simple text and file sharing application. - 2025",
    srcSite: "https://zypher24.vercel.app",
    srcProject: "https://github.com/Shahmeer24/zypher",
  },
  {
    title: "taskHub",
    desc: "Designed and developed a simple web-based task manager application. - 2025",
    srcSite: "https://taskhub24.netlify.app",
    srcProject: "https://github.com/Shahmeer24/taskHub",
  },
  {
    title: "Sentiment Analysis from Speech using Feature Extraction",
    desc: "Developed and presented a Machine Learning topic about determining human emotions in several classes using speech data - 2024.",
    srcProject: "https://github.com/Shahmeer24/Sentiment-Analysis-from-Speech",
  },
];

/*Skills*/
export const skillData = [
  { name: "HTML", icon: faHtml5, color: "#E34F26" },
  { name: "CSS", icon: faCss3Alt, color: "#1572B6" },
  { name: "ReactJS", icon: faReact, color: "#0d9db6" },
  { name: "NodeJS", icon: faNodeJs, color: "#207705" },
  { name: "Express", icon: SiExpress, color: "#888888" },
  // { name: "MongoDB", icon: SiMongodb, color: "#207705" },
  { name: "Canva", icon: faBrush, color: "#01a4fC" },
  { name: "Video Editing", icon: faVideo, color: "#6289FA" },
  { name: "Leadership", icon: faUsers, color: "#4B6A9B" },
];

function Data() {
  return <></>;
}

export default Data;


