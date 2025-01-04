import "../style.css";
export const ProjectCard = ({ title, description, image }) => {
  return (
    <div className="card">
      <div className="proj-imgbx">
        <img src={image} width={250} height={180} />
        <div className="proj-hover">
          <h4>{title}</h4>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};
