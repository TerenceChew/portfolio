import "./FullPageNav.css";
import Nav from "../Nav/Nav";

const FullPageNav = ({ shouldShowFullPageNav, hideFullPageNav }) => {
  return (
    <div
      className={`full-page-nav flex f-column 
        ${shouldShowFullPageNav ? "expand" : ""}`}
    >
      <div className="wrapper">
        <h1 className="flex f-center">
          t<span>.</span>
        </h1>
        <Nav flexDirection="column" hideFullPageNav={hideFullPageNav} />
      </div>
    </div>
  );
};

export default FullPageNav;
