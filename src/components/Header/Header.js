import { useState } from "react";
import "./Header.css";
import Nav from "../Nav/Nav";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import FullPageNav from "../FullPageNav/FullPageNav";

const Header = ({ windowWidth }) => {
  const [showFullPageNav, setShowFullPageNav] = useState(false);

  const handleClick = () => {
    setShowFullPageNav((prevVal) => !prevVal);
  };

  return (
    <div className="header flex f-center">
      <h1 className="h-title">
        Terence<span className="h-span">.dev</span>
      </h1>
      {
        windowWidth < 950 ?
        <BurgerMenu 
          fullPageNavToggler={handleClick}
          showFullPageNav={showFullPageNav}
        /> :
        <Nav />
      }
      {
        windowWidth < 950 && <FullPageNav showFullPageNav={showFullPageNav} />
      }
    </div>
  );
};

export default Header;
