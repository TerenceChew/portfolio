import "./Nav.css";

const Nav = ({ flexDirection, closeFullPageNav = null }) => {
  const style = {
    flexDirection,
    gap: flexDirection === "column" ? "2.5rem" : "0",
  };

  return (
    <div className="nav flex f-center">
      <ul className="nav-list flex f-center" style={style}>
        <li>
          <a href="#intro" onClick={closeFullPageNav}>
            Home
          </a>
        </li>
        <li>
          <a href="#about-me" onClick={closeFullPageNav}>
            About
          </a>
        </li>
        <li>
          <a href="#skills-grid" onClick={closeFullPageNav}>
            Skills
          </a>
        </li>
        <li>
          <a href="#projects-grid" onClick={closeFullPageNav}>
            Projects
          </a>
        </li>
        <li>
          <a href="#contacts" onClick={closeFullPageNav}>
            Contacts
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
