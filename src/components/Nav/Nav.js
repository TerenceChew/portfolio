import "./Nav.css";

const Nav = ({ flexDirection }) => {
  const style = {
    flexDirection,
    gap: flexDirection === "column" ? "2.5rem" : "0",
  };

  return (
    <div className="nav flex f-center">
      <ul className="nav-list flex f-center" style={style}>
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Projects</li>
        <li>Contacts</li>
      </ul>
    </div>
  );
};

export default Nav;
