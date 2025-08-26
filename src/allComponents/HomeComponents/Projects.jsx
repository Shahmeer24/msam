import React from "react";
import { projectsData } from "../data.jsx";
import style from "../../totalStyling.module.css";

function Projects() {
  return (
    <>
      <section className={`${style.section} ${style.projectsMain}`}>
        <div className={style.bannerHeading}>
          <span>Projects</span>
        </div>
        <div className={style.projectsList}>
          {projectsData.map((item, index) => (
            <div key={index} className={style.projectItem}>
              <div className={style.projectTitle}>{item.title}</div>
              <p>{item.desc}</p>
              {item.srcSite && (
                <a
                  href={item.srcSite}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  View Site
                </a>
              )}
              {item.srcProject && (
                <a
                  href={item.srcProject}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  View Project
                </a>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Projects;
