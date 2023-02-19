import "./FullPageNav.css";
import Nav from "../Nav/Nav";

const FullPageNav = ({ showFullPageNav, closeFullPageNav }) => {
  return (
    <div
      className={`full-page-nav flex f-column f-center
        ${showFullPageNav ? "expand" : ""}`}
    >
      <h1>
        t<span>.</span>
      </h1>
      <Nav flexDirection="column" closeFullPageNav={closeFullPageNav} />
    </div>
  );
};

export default FullPageNav;
