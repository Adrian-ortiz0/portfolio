import { useEffect, useState } from "react";
import "../style.css";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const icons = document.querySelectorAll(".header__icon");
    icons.forEach((icon, index) => {
      setTimeout(() => {
        icon.classList.add("appear");
      }, index * 300);
    });
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="header">
        <nav className={`nav ${isScrolled ? "scrolled" : ""}`}>
          <div className="menu-icon" onClick={toggleMenu}>
            &#9776;
          </div>
          <ul className={`nav__list ${isMenuOpen ? "active" : ""}`}>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">Skills</a>
            </li>
            <li>
              <a href="#services">Projects</a>
            </li>
            <li>
              <a href="#portfolio">About Me</a>
            </li>
            <li>
              <a href="#contact">Contact Me</a>
            </li>
          </ul>
        </nav>
        <section className="header__content">
          <div className="header__titles">
            <h1 className="title">Software Developer</h1>
            <h2>Adrian Ortiz</h2>
            <p>Full Stack React & Spring Boot</p>
          </div>
          <div className="header__buttons">
            <button>Download CV</button>
            <button>Github</button>
          </div>
        </section>
      </header>
    </>
  );
};