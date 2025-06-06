import React from "react";

import Home from "./Home.jsx";
import Contact from "./Contact.jsx";
import SecondaryAbout from "./SecondaryAbout.jsx";
import style from "../totalStyling.module.css"

function MainContent({ activeSection }) {
  return (
    <>
      {activeSection === "home" && <Home />}
      {activeSection === "about" && <SecondaryAbout />}
      {activeSection === "contact" && <Contact />}
    </>
  );
}

export default MainContent;
