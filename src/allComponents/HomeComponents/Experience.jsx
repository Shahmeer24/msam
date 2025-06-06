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
          <span>
            Experience & <br />
            Achievements
          </span>
        </div>
        <div className={style.experienceAchievements}>
          {experienceData.map((item, index) => (
            <ul key={index}>
              <li>
                <FontAwesomeIcon
                  icon={faChevronRight}
                  style={{ paddingRight: "20px" }}
                />
                {item.desc}
                {item.certificationLink && (
                  <a
                    style={{ paddingLeft: "5px", color: "var(--head-color)" }}
                    target="_blank"
                    rel="noopener noreferrer"
                    href={item.certificationLink}
                  >
                    Link
                  </a>
                )}
              </li>
            </ul>
          ))}
        </div>
      </section>
    </>
  );
}
export default Experience;
