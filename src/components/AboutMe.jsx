import React from "react";

export const AboutMe = () => {
  return (
    <>
      <section className="aboutme__section">
        <div className="aboutme__container">
          <div className="aboutme__content">
            <img src="public/mi_foto.svg" alt="" />
            <div className="aboutme__content">
              <h2>Hi, I'm Adrián Ortiz</h2>
              <h3>
                <strong>Web Developer with extensive project experience</strong>
                , and expertise in diverse technologies. Passionate about web
                development and programming as a whole.
                <strong>Based in Colombia</strong>, I am dedicated to delivering
                functional, high-quality solutions.
              </h3>
            </div>
            <div className="aboutme__buttons">
              <a href="">
                <button>
                  <img
                    src="public/header_icons/linkedin_icon.svg"
                    alt=""
                    width={20}
                    height={20}
                    align="center"
                  />
                  Linkedin
                </button>
              </a>
              <a href="">
                <button>
                  {" "}
                  <img
                    src="public/header_icons/email_icon.svg"
                    alt=""
                    width={20}
                    height={20}
                    align="center"
                  />
                  dxniel7328@gmail.com
                </button>
              </a>
              <a href="">
                <button>
                  {" "}
                  <img
                    src="public/header_icons/github_icon.svg"
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
        </div>
      </section>
    </>
  );
};
