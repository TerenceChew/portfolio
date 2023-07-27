import { useEffect, useState } from "react";
import "./Header.css";
import Nav from "../Nav/Nav";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import FullPageNav from "../FullPageNav/FullPageNav";

const Header = ({ windowWidth }) => {
  const [shouldShowFullPageNav, setShouldShowFullPageNav] = useState(false);

  const toggleFullPageNav = () => {
    setShouldShowFullPageNav((prevVal) => !prevVal);
  };

  const hideFullPageNav = () => {
    setShouldShowFullPageNav(false);
  };

  useEffect(() => {
    if (shouldShowFullPageNav) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "scroll";
    }
  }, [shouldShowFullPageNav]);

  return (
    <div id="header" className="header flex f-center">
      <h1 className="h-title">
        Terence<span className="h-span">.dev</span>
      </h1>
      {windowWidth < 950 ? (
        <BurgerMenu
          toggleFullPageNav={toggleFullPageNav}
          shouldShowFullPageNav={shouldShowFullPageNav}
        />
      ) : (
        <Nav />
      )}
      {windowWidth < 950 && (
        <FullPageNav
          shouldShowFullPageNav={shouldShowFullPageNav}
          hideFullPageNav={hideFullPageNav}
        />
      )}
    </div>
  );
};

export default Header;
