import React from "react";
import { educationData } from "../data.jsx";
import style from "../../totalStyling.module.css";

function Education() {
  return (
    <>
      <section className={`${style.section} ${style.educationMain}`}>
        <div className={style.bannerHeading}>
          <span>Education</span>
        </div>
        {educationData.map((item, index) => (
          <div key={index} className={style.educationItem}>
            <h3>{item.degree}</h3>
            <p>
              {item.institution}, {item.location}
            </p>
            <p>{item.period}</p>
            {item.grade && <p>{item.grade}</p>}
          </div>
        ))}
      </section>
    </>
  );
}

export default Education;
