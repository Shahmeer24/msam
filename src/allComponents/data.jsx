import React from "react";
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';

import { 
  faHtml5, 
  faCss3Alt, 
  faReact,
  faNodeJs,
} from '@fortawesome/free-brands-svg-icons';
import { 
  faBrush, 
  faVideo, 
  faUsers 
} from '@fortawesome/free-solid-svg-icons';
import {SiExpress, SiMongodb} from "react-icons/si";

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
    /*grade: "CGPA: " */
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
    grade: "Percentage: 96.25%",
  },
];

/*Experience Data*/
export const experienceData = [
  {
    desc: "Completed Web Designing/Development course from SkillAcademia (2022)",
    certificationLink: "",
  },
  {
    desc: "Completed Machine Learning Bootcamp hosted by GDSC and TensorFlow User Group Hyderabad (2024)",
    certificationLink: "",
  },
  {
    desc: "Managed numerous departmental fests, and other societal events",
  },
  {
    desc: "Presented a Machine Learning topic on – “Sentiment Analysis from Speech using Feature Extraction” as a part of final year dissertation project in St. Xavier’s College (Autonomous), Kolkata – 2024.",
    certificationLink:
      "https://github.com/Shahmeer24/Sentiment-Analysis-from-Speech",
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
    title: "Amantran Group Website",
    desc: "Designed and developed a website (frontend) for a hotel company - Amantran Group. - 2024",
    srcSite: "https://amantranhotels.com",
    srcProject: "https://github.com/Shahmeer24/amantran-hotels",
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
  { name: "Leadership", icon: faUsers, color: "#4B6A9B" }
];

function Data() {
  return <></>;
}

export default Data;
