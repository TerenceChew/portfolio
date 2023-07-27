import { useEffect, useState } from "react";
import "./Header.css";
import Nav from "../Nav/Nav";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import FullPageNav from "../FullPageNav/FullPageNav";

const debounce = (cb, delay = 500) => {
  let timeout;

  return (...args) => {
    clearTimeout(timeout);

    timeout = setTimeout(() => {
      cb(...args);
    }, delay);
  };
};

const Header = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
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

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);

      if (window.innerWidth >= 950) {
        setShouldShowFullPageNav(false);
      }
    };
    const debouncedHandleResize = debounce(handleResize);

    window.addEventListener("resize", debouncedHandleResize);

    return () => {
      window.removeEventListener("resize", debouncedHandleResize);
    };
  }, []);

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
