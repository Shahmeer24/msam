import React, { useState, useEffect } from "react";
import style from "../totalStyling.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const [isVisible, setisVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset >= 200) setisVisible(true);
      else setisVisible(false);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <>
      <footer className={style.copyright}>
        <strong>
          <p>
            &copy; {new Date().getFullYear()} Shahmeer Mondal. Made using
            ReactJS.
          </p>
        </strong>
      </footer>
      <button
        className={`${style.backToTop} ${isVisible ? style.show : ""}`}
        onClick={scrollToTop}
        aria-label="Back To Top"
      >
        <FontAwesomeIcon icon={faChevronUp} />
      </button>
    </>
  );
}

export default Footer;
