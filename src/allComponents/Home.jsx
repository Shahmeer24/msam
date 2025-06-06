import React from "react";

import About from "./HomeComponents/About.jsx";
import Skills from "./HomeComponents/Skills.jsx";
import Projects from "./HomeComponents/Projects.jsx";
import Education from "./HomeComponents/Education.jsx";
import Experience from "./HomeComponents/Experience.jsx";

import style from "../totalStyling.module.css";

function Home() {
  return (
    <>
    <div className={style.homeContainer}>
      <div className={`${style.leftColumn} ${style.leftColumnMain}`}>
        <About />
        <Skills />
        <Projects />
      </div>
      <div className={`${style.rightColumn} ${style.rightColumnMain}`}>
        <Education />
        <Experience />
      </div>
      </div>
    </>
  );
}

export default Home;
