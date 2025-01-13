import "../style.css";

export const ProjectCard = ({ title, description, image, url }) => {
  return (
    <a href={url} target="blank">
      <div className="card">
        <div className="proj-imgbx">
          <img src={image} width={250} height={180} alt={title} />
          <div className="proj-hover">
            <p>{description}</p>
          </div>
        </div>
        <div className="card-content">
          <h4 className="card-title">{title}</h4>
        </div>
      </div>
    </a>
  );
};
