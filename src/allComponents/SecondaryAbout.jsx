import React from "react";
import pImg from "../assets/profile-img.jpg";
import style from "../totalStyling.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function SecondaryAbout() {
  const personalData = [
    { label: "Location", value: " Kolkata, West Bengal, India" },
    { label: "Degree", value: " Bachelor" },
    { label: "Languages", value: " Bengali, English, Hindi" },
  ];
  return (
    <>
      <section
        className={`${style.section} ${style.aboutMeSecondary} ${style.sectionSecondary}`}
      >
        <div className="container">
          <div className="row">
            <div className="">
              <div className={style.bannerHeadingSecondary}>
                <span>About Me</span>
              </div>
              <div className="align-items-start row">
              <div className="col-md-4">
                <img src={pImg} alt="Shahmeer" className={`${style.imgFluid} mb-4 mb-md-0`} />
              </div>
              <div className="col-md-8">
                <div className="ps-md-4">
                <p>
                  As a front-end developer, I love bringing designs to life with
                  HTML, CSS, and sprinkles of JavaScript magic. I'm constantly
                  amazed by how a few well-placed divs and some CSS wizardry can
                  transform a blank page into a stunning, responsive website.
                  When I'm not coding, you'll find me exploring the latest web
                  technologies, tinkering with UI/UX designs, or diving into
                  photography and video editing – because who says developers
                  can't be creative off-screen too?
                </p>
                <p>
                  I believe in the power of continuous learning, whether it's
                  mastering a new CSS framework or figuring out why that one
                  line of JavaScript just won't behave. So, if you're looking
                  for a developer who's as passionate about pixel-perfect
                  designs as they are about clean, efficient code, you've come
                  to the right place.
                </p>
                </div>
              </div>
              </div>
            </div>
            <div>
              <ul className={style.listUnstyled}>
                {personalData.map((item, index) => (
                  <li key={index}>
                    <FontAwesomeIcon
                      icon={faChevronRight}
                      style={{ paddingRight: "20px" }}
                    />
                    <strong>{item.label}:</strong>
                    {item.value}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SecondaryAbout;
