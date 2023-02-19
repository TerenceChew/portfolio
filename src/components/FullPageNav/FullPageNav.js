import "./FullPageNav.css";
import Nav from "../Nav/Nav";

const FullPageNav = ({ shouldShowFullPageNav, hideFullPageNav }) => {
  return (
    <div
      className={`full-page-nav flex f-column f-center
        ${shouldShowFullPageNav ? "expand" : ""}`}
    >
      <h1>
        t<span>.</span>
      </h1>
      <Nav flexDirection="column" hideFullPageNav={hideFullPageNav} />
    </div>
  );
};

export default FullPageNav;
