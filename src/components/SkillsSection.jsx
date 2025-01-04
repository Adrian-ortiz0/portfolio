import { Canvas } from "@react-three/fiber";
import "../style.css";
import { Html, OrbitControls, Sphere } from "@react-three/drei";
import { useState } from "react";

export const SkillsSection = () => {
  const sphere_icons = [
    { src: "public/sphere__icons/css-icon.svg", skill: "CSS", level: 90 },
    { src: "public/sphere__icons/django-icon.svg", skill: "Django", level: 70 },
    { src: "public/sphere__icons/docker-icon.svg", skill: "Docker", level: 70 },
    { src: "public/sphere__icons/git-scm-icon.svg", skill: "Git", level: 85 },
    {
      src: "public/sphere__icons/github__icon.svg",
      skill: "GitHub",
      level: 90,
    },
    { src: "public/sphere__icons/html5-icon.svg", skill: "HTML5", level: 95 },
    { src: "public/sphere__icons/java-icon.svg", skill: "Java", level: 90 },
    {
      src: "public/sphere__icons/javascript-icon.svg",
      skill: "JavaScript",
      level: 85,
    },
    { src: "public/sphere__icons/linux-icon.svg", skill: "Linux", level: 70 },
    { src: "public/sphere__icons/mysql-icon.svg", skill: "MySQL", level: 90 },
    {
      src: "public/sphere__icons/postgresql-icon.svg",
      skill: "PostgreSQL",
      level: 60,
    },
    { src: "public/sphere__icons/python-icon.svg", skill: "Python", level: 90 },
    { src: "public/sphere__icons/reactjs-icon.svg", skill: "React", level: 80 },
    {
      src: "public/sphere__icons/springio-icon.svg",
      skill: "Spring",
      level: 90,
    },
    { src: "public/sphere__icons/unity3d-icon.svg", skill: "Unity", level: 65 },
    {
      src: "public/sphere__icons/vitejsdev-icon.svg",
      skill: "ViteJS",
      level: 90,
    },
    {
      src: "public/sphere__icons/mongodb-icon.svg",
      skill: "MongoDB",
      level: 80,
    },
    {
      src: "public/sphere__icons/getpostman-icon.svg",
      skill: "Postman",
      level: 90,
    },
  ];

  const [clickedIcon, setClickedIcon] = useState(null);

  const handleClick = (index) => {
    setClickedIcon(sphere_icons[index]);
  };

  return (
    <section className="skills__section">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        style={{ width: "100%", height: "100%" }}
      >
        <OrbitControls
          enableZoom={false}
          enablePan={true}
          enableRotate={true}
          autoRotate
          autoRotateSpeed={2}
        />
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <Sphere args={[1.5, 32, 32]}>
          <meshStandardMaterial transparent={true} opacity={0.1} color="gray" />
          {sphere_icons.map((image, index) => {
            const phi = Math.acos(-1 + (2 * index) / sphere_icons.length);
            const theta = Math.sqrt(sphere_icons.length * Math.PI) * phi;
            return (
              <Html
                key={index}
                position={[
                  Math.sin(phi) * Math.cos(theta),
                  Math.cos(phi),
                  Math.sin(phi) * Math.sin(theta),
                ]}
              >
                <img
                  src={image.src}
                  alt={image.skill}
                  className="sphere__image"
                  onClick={() => handleClick(index)}
                  style={{ cursor: "pointer" }}
                />
              </Html>
            );
          })}
        </Sphere>
      </Canvas>
      <div className="skills__info">
        <div>
          <h2>Skills</h2>
        </div>
        {clickedIcon && (
          <div className={`skill__info-container ${clickedIcon ? "show" : ""}`}>
            <div className="skill-info">
              <div className="progress-bar-wrapper">
                <h3>{clickedIcon.skill}</h3>
                <div className="progress-bar-background">
                  <div
                    className="progress-bar"
                    style={{ width: `${clickedIcon.level}%` }}
                  />
                </div>
              </div>
              <p>{clickedIcon.level}%</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
