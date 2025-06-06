import React from "react";
import { ThemeContext } from "./theme.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faDownload,
  faHome,
  faSun,
  faMoon,
  faAddressCard,
  faCertificate,
} from "@fortawesome/free-solid-svg-icons";
import style from "../totalStyling.module.css";
import resumePDF from "../assets/Shahmeer_Mondal_CV.pdf";

function Sidebar({ activeSection, onNavigate, toggleTheme, isDarkMode }) {
  const { toggle } = React.useContext(ThemeContext);
  const handleNavigation = (section) => {
    onNavigate(section);
  };

  return (
    <>
      <aside className={style.sidebar}>
        <div className={`${style.sidebarTop}`}>
          <button onClick={() => handleNavigation("home")}>
            <abbr title="Home">
              <FontAwesomeIcon icon={faHome} className={style.sidebarIcon} />
            </abbr>
          </button>

          <button onClick={() => handleNavigation("about")}>
            <abbr title="About">
              <FontAwesomeIcon icon={faUser} className={style.sidebarIcon} />
            </abbr>
          </button>

          <a href={resumePDF} download="Shahmeer-CV">
            <abbr title="Download CV">
              <FontAwesomeIcon
                icon={faDownload}
                className={style.sidebarIcon}
              />
            </abbr>
          </a>

          <a
            href="https://drive.google.com/drive/folders/16Hu9nzyi39mCuMqYR87guft29O7qHHCl?usp=sharing"
            target="_blank"
          >
            <abbr title="Certifications">
              <FontAwesomeIcon
                icon={faCertificate}
                className={style.sidebarIcon}
              />
            </abbr>
          </a>

          <button onClick={() => handleNavigation("contact")}>
            <abbr title="Contact">
              <FontAwesomeIcon
                icon={faAddressCard}
                className={style.sidebarIcon}
              />
            </abbr>
          </button>

          <button
            className={`${style.sidebarIcon} ${style.themeToggle}`}
            onClick={toggleTheme}
          >
            <abbr title={isDarkMode ? "Light" : "Dark"}>
              <FontAwesomeIcon
                icon={isDarkMode ? faSun : faMoon}
                className={style.sidebarIcon}
              />
            </abbr>
          </button>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
