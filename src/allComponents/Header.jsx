import React from "react";
import pImg from "../assets/profile-img.jpg";
import style from "../totalStyling.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import { socialData } from "./data.jsx";

function Header({ isDarkMode }) {
  return (
    <>
      <header
        className={style.header}
        style={{
          backgroundColor: `var(--section-bg-light)`,
          color: `var(--text-dark)`,
        }}
      >
        <img src={pImg} alt="Profile Picture" className={style.profilePic} />

        <div className={style.nameTitle}>
          <h1>Shahmeer Mondal</h1>
          <p>Designer & Developer</p>
        </div>

        <div className={style.contactInfo}>
          <a href="mailto:shahmeermondal1576@gmail.com">
            <strong>shahmeermondal1576@gmail.com</strong>
          </a>

          <div className={style.responsiveSocial}>
            {socialData.map((item, index) => (
              <div className={style.socialIcon} key={index}>
                <a href={item.srcLink}>
                  <abbr title={item.title}>
                    <FontAwesomeIcon
                      icon={item.icon}
                      className={style.sidebarIcon}
                    />
                  </abbr>
                </a>
              </div>
            ))}
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
