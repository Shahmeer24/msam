import React from "react";
import { experienceData } from "../data.jsx";
import style from "../../totalStyling.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

function Experience() {
  return (
    <>
      <section className={`${style.section} ${style.experienceMain}`}>
        <div className={`${style.bannerHeading} ${style.bannerHeading1}`}>
          <span>Experience</span>
        </div>
        <div className={style.experienceAchievements}>
          {experienceData.map((item, index) => (
            <ul key={index} className={style.experienceList}>
              <li className={style.experienceItem}>
                <div className={style.experienceItemHeading}>
                  <span>{item.name}</span>
                  <span>{item.timeline}</span>
                </div>
                <div className={style.experienceItemType}>
                  {item.designation} &nbsp; ({item.type})
                </div>
                <div className={style.experienceItemDesc}>{item.desc}</div>
                <div className={style.experienceItemProject}>
                  Key Project: {item.keyProject}<br />
                  {item.liveLink && (
                    <a
                      className={style.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      href={item.liveLink}
                    >
                    (Live Link)
                    </a>
                  )}
                </div>
              </li>
            </ul>
          ))}
        </div>
      </section>
    </>
  );
}
export default Experience;
