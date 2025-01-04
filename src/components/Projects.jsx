import React, { useState } from "react";
import "../style.css";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  const [activeTab, setActiveTab] = useState(1);

  const projects = [
    {
      title: "Cinemark System",
      description:
        "A system that allows users to book tickets and buy combos for movies.",
      image: "public/project_images/cinemark.jpg",
    },
    {
      title: "Veterinay System Pet Society",
      description:
        "A system that allows users to book appointments for their pets.",
      image: "public/project_images/veterinary_system.jpg",
    },
    {
      title: "Parking System",
      description: "A system that allows users to book parking spaces.",
      image: "public/project_images/parking_system.jpg",
    },
    {
      title: "Pokemon Kanto Stadium",
      description:
        "A system that allows users to participate in Pokemon battles (Full Console).",
      image: "public/project_images/kanto_stadium.jpg",
    },
    {
      title: "Mac Miller Store",
      description: "A system that allows users to buy products online.",
      image: "public/project_images/macmiller_store.jpg",
    },
    {
      title: "Python Library",
      description: "A system that allows users to manage a library.",
      image: "public/project_images/library_system.jpg",
    },
  ];
  const projects2 = [
    {
      title: "Cinemark System",
      description:
        "A system that allows users to book tickets and buy combos for movies.",
      image: "public/project_images/cinemark.jpg",
    },
    {
      title: "Veterinay System Pet Society",
      description:
        "A system that allows users to book appointments for their pets.",
      image: "public/project_images/veterinary_system.jpg",
    },
    {
      title: "Parking System",
      description: "A system that allows users to book parking spaces.",
      image: "public/project_images/parking_system.jpg",
    },
    {
      title: "Pokemon Kanto Stadium",
      description:
        "A system that allows users to participate in Pokemon battles (Full Console).",
      image: "public/project_images/kanto_stadium.jpg",
    },
    {
      title: "Mac Miller Store",
      description: "A system that allows users to buy products online.",
      image: "public/project_images/macmiller_store.jpg",
    },
    {
      title: "Python Library",
      description: "A system that allows users to manage a library.",
      image: "public/project_images/library_system.jpg",
    },
  ];
  const projects3 = [
    {
      title: "Cinemark System",
      description:
        "A system that allows users to book tickets and buy combos for movies.",
      image: "public/project_images/cinemark.jpg",
    },
    {
      title: "Veterinay System Pet Society",
      description:
        "A system that allows users to book appointments for their pets.",
      image: "public/project_images/veterinary_system.jpg",
    },
    {
      title: "Parking System",
      description: "A system that allows users to book parking spaces.",
      image: "public/project_images/parking_system.jpg",
    },
    {
      title: "Pokemon Kanto Stadium",
      description:
        "A system that allows users to participate in Pokemon battles (Full Console).",
      image: "public/project_images/kanto_stadium.jpg",
    },
    {
      title: "Mac Miller Store",
      description: "A system that allows users to buy products online.",
      image: "public/project_images/macmiller_store.jpg",
    },
    {
      title: "Python Library",
      description: "A system that allows users to manage a library.",
      image: "public/project_images/library_system.jpg",
    },
  ];

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  return (
    <>
      <main className="projects" id="projects">
        <div className="project-text">
          <h2>Projects</h2>
        </div>
        <div className="project-list__container">
          <ul className="project-list">
            <li>
              <a
                onClick={() => handleTabClick(1)}
                className={activeTab === 1 ? "active" : ""}
              >
                Tab 1
              </a>
            </li>
            <li>
              <a
                onClick={() => handleTabClick(2)}
                className={activeTab === 2 ? "active" : ""}
              >
                Tab 2
              </a>
            </li>
            <li>
              <a
                onClick={() => handleTabClick(3)}
                className={activeTab === 3 ? "active" : ""}
              >
                Tab 3
              </a>
            </li>
          </ul>
        </div>

        {activeTab === 2 ? (
          <section className="project-cards">
            {projects2.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </section>
        ) : activeTab === 3 ? (
          <section className="project-cards">
            {projects3.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </section>
        ) : (
          <section className="project-cards">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </section>
        )}
      </main>
    </>
  );
};