import React from "react";
import { skillData } from "../data.jsx";
import style from "../../totalStyling.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Skills() {
  return (
    <>
      <section className={`${style.section} ${style.skillsMain}`}>
        <div className={style.bannerHeading}>
          <span>Skills</span>
        </div>
        <div className={style.skillsGrid}>
          {skillData.map((skill, index) => (
            <div key={index} className={style.skillItem}>
              {typeof skill.icon === "function" ? (
                <skill.icon color={skill.color} size={48} />
              ) : (
                <FontAwesomeIcon
                  icon={skill.icon}
                  style={{ color: skill.color, fontSize: "3rem" }}
                />
              )}
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Skills;