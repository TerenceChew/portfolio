import "./Nav.css";

const Nav = ({ flexDirection, hideFullPageNav = null }) => {
  const style = {
    flexDirection,
    gap: flexDirection === "column" ? "2.5rem" : "0",
  };

  return (
    <div className="nav flex f-center">
      <ul className="nav-list flex f-center" style={style}>
        <li>
          <a href="#intro" onClick={hideFullPageNav}>
            Home
          </a>
        </li>
        <li>
          <a href="#about-me" onClick={hideFullPageNav}>
            About
          </a>
        </li>
        <li>
          <a href="#skills-grid" onClick={hideFullPageNav}>
            Skills
          </a>
        </li>
        <li>
          <a href="#projects-grid" onClick={hideFullPageNav}>
            Projects
          </a>
        </li>
        <li>
          <a href="#contacts" onClick={hideFullPageNav}>
            Contacts
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
