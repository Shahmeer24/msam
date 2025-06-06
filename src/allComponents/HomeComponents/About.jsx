import React from "react";
import style from "../../totalStyling.module.css";

function About() {
  return (
    <>
      <section className={`${style.section} ${style.aboutMe} ${style.aboutMeMain}`}>
        <div className={`${style.bannerHeading} ${style.bannerHeading1}`}>
          <span>About Me</span>
        </div>
        <div className={style.aboutMeContent}>
          <p>
            Hey there! I'm Shahmeer, a code enthusiast with a passion for
            crafting beautiful, functional websites. My journey into the world
            of programming started with the classic "Hello World" in Java, and
            I've been hooked ever since. There's something magical about turning
            lines of code into visually appealing, interactive experiences that
            users can enjoy.
          </p>
          <p>
            My other interests/hobbies include Photography, Video Editing,
            Designing, Football.
          </p>
        </div>
      </section>
    </>
  );
}

export default About;
