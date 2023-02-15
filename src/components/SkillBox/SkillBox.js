import "./SkillBox.css";

const SkillBox = ({ img, skill }) => {
  return (
    <div className="skill-box flex f-column f-center">
      <img src={img} alt={skill} />
      <p>{skill}</p>
    </div>
  );
};

export default SkillBox;
