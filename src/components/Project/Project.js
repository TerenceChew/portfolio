import "./Project.css";

const Project = ({ img, title, children }) => {
  return (
    <div className="project flex f-column">
      <div className="flex f-column f-center">
        <img className="project-img" src={img} alt={title} />
        <h3 className="project-title">{title}</h3>
      </div>
      {children}
    </div>
  );
};

export default Project;
