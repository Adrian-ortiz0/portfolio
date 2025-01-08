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
                <strong> Based in Colombia</strong>, I am dedicated to delivering
                functional, high-quality solutions.
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
                <p>To design, develop, and maintain robust, scalable, and high-performance web applications by leveraging my expertise in full-stack development with Java technologies. My goal is to deliver innovative solutions that meet client needs, optimize processes, and enhance user experiences while continuously improving my skills and staying at the forefront of emerging technologies.</p>
              </div>
              <div className="vision">
                <h2>Visión</h2>
                <p>To become a leading full-stack developer known for creating impactful, efficient, and future-proof software solutions using Java. I aspire to empower businesses and organizations by building sustainable digital solutions that drive growth and transformation, fostering a seamless integration of both front-end and back-end technologies for maximum value and innovation.</p>
              </div>
            </div>
            <div className="certifications">
              <div>SENA</div>
            </div>
          </section>
      </section>

    </>
  );
};
