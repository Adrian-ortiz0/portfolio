import React from "react";
import { AboutMeExtras } from "./AboutMeExtras";

export const AboutMe = () => {
  return (
    <>
      <section className="aboutme__section" id="about">
        <div className="aboutme__container">
          <div className="aboutme__content">
            <img src="../mi_foto.svg" alt="" />
            <div className="aboutme__content">
              <h2>Hi, I'm Adrián Ortiz</h2>
              <h3>
                <strong>Web Developer with extensive project experience</strong>
                , and expertise in diverse technologies. Passionate about web
                development and programming as a whole.
                <strong> Based in Colombia</strong>, I am dedicated to
                delivering functional, high-quality solutions.
              </h3>
            </div>
            <div className="aboutme__buttons">
              <a href="https://www.linkedin.com/in/adrian-ustariz-ortiz-a8618b29b/" target="blank">
                <button>
                  <img
                    src="../header_icons/linkedin_icon.svg"
                    alt=""
                    width={20}
                    height={20}
                    align="center"
                  />
                  Linkedin
                </button>
              </a>
              <a href="mailto:dxniel7328@gmail.com" target="blank">
                <button>
                  {" "}
                  <img
                    src="../header_icons/email_icon.svg"
                    alt=""
                    width={20}
                    height={20}
                    align="center"
                  />
                  dxniel7328@gmail.com
                </button>
              </a>
              <a href="https://github.com/Adrian-ortiz0" target="blank">
                <button>
                  {" "}
                  <img
                    src="../header_icons/github_icon.svg"
                    alt=""
                    width={20}
                    height={20}
                    align="center"
                  />
                  Github
                </button>
              </a>
            </div>
          </div>
          <AboutMeExtras />
        </div>
      </section>
    </>
  );
};
