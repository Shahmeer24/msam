import React, { useState, useEffect } from "react";
import { useContext } from 'react';
import { ThemeContext } from './theme.jsx';


import Sidebar from "./Sidebar.jsx";
import Header from "./Header.jsx";
import MainContent from "./MainContent.jsx";
import Footer from "./Footer.jsx";

import style from "../totalStyling.module.css";

function Layout() {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  const [activeSection, setActiveSection] = React.useState("home");
  return (
    <>
      <main className={style.portfolioDashboard}>
        <Header />
        <Sidebar
          activeSection={activeSection}
          onNavigate={setActiveSection}
          toggleTheme={toggleTheme}
          isDarkMode={isDarkMode}
        />
        <MainContent activeSection={activeSection} />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
