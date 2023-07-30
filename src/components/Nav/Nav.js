import "./Nav.css";

const Nav = ({
  flexDirection,
  hideFullPageNav = null,
  shouldAnimate = true,
}) => {
  const style = {
    flexDirection,
    gap: flexDirection === "column" ? "2.5rem" : "0",
  };
  const fadeIn = shouldAnimate ? "fade-in" : "";

  return (
    <div className="nav flex f-center">
      <ul className="nav-list flex f-center" style={style}>
        <li className={fadeIn}>
          <a href="#intro" onClick={hideFullPageNav}>
            Home
          </a>
        </li>
        <li className={fadeIn}>
          <a href="#about-me" onClick={hideFullPageNav}>
            About
          </a>
        </li>
        <li className={fadeIn}>
          <a href="#skills-grid" onClick={hideFullPageNav}>
            Skills
          </a>
        </li>
        <li className={fadeIn}>
          <a href="#projects-grid" onClick={hideFullPageNav}>
            Projects
          </a>
        </li>
        <li className={fadeIn}>
          <a href="#contacts" onClick={hideFullPageNav}>
            Contacts
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
