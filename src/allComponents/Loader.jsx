import React, { useEffect } from "react";
import "./loader.css";

function Loader() {
  useEffect(() => {
    const hideLoader = () => {
      const loader = document.getElementById("page-loader");
      if (loader) {
        loader.classList.add("fadeOut");
        setTimeout(() => {
          loader.remove();
          document.body.style.overflow = "auto";
        }, 800);
      }
    };
    const timer = setTimeout(hideLoader, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div id="page-loader" className="explicitStyling">
        <div className="loader"></div>
        <h2 className="loaderText">Sic Parvis Magna</h2>
      </div>
    </>
  );
}

export default Loader;
