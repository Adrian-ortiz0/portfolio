import React from "react";

export const AboutMe = () => {
  return (
    <>
      <section className="aboutme__section">
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
              <a href="">
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
              <a href="">
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
              <a href="">
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
        </div>
        <section className="aboutMe_extras">
          <div className="mvContainer">
            <div className="mision">
              <h2>Misión</h2>
              <p>
                To design, develop, and maintain scalable, high-performance web
                applications by leveraging my expertise in full-stack
                development. I aim to deliver innovative solutions, enhance user
                experiences, and optimize processes while continuously expanding
                my skills and staying current with emerging technologies, with a
                strong focus on Java and other modern tools.
              </p>
            </div>
            <div className="vision">
              <h2>Visión</h2>
              <p>
                My vision is to become a prominent full-stack developer,
                recognized for creating impactful, efficient, and sustainable
                software solutions. I aspire to empower organizations by
                building digital solutions that drive growth and transformation,
                seamlessly integrating front-end and back-end technologies to
                maximize value and innovation.
              </p>
            </div>
          </div>
          <div className="certifications">
            <div>
              <h2>SENA CERTFICATION</h2>
              <p>
                I am a certified Systems Technician from SENA, skilled in
                hardware, software, and networking. I specialize in diagnosing
                and resolving technical issues and am committed to continuous
                learning and innovation.
              </p>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};
