import { AboutMe } from "./components/AboutMe.jsx";
import { ContactMe } from "./components/ContactMe.jsx";
import { Footer } from "./components/Footer.jsx";
import { Header } from "./components/Header.jsx";
import { Projects } from "./components/Projects.jsx";
import { SkillsBridge } from "./components/SkillsBridge.jsx";
import { SkillsSection } from "./components/SkillsSection.jsx";

export const Portfolio = () => {
  return (
    <>
      <Header />
      <AboutMe />
      <SkillsSection />
      <Projects />
      <ContactMe />
      <Footer />
    </>
  );
};
