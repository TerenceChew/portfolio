import "./Header.css";
import Nav from "../Nav/Nav";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

const Header = ({ windowWidth }) => {
  return (
    <div className="header flex f-center">
      <h1 className="h-title">
        Terence<span className="h-span">.dev</span>
      </h1>
      {windowWidth < 950 ? <BurgerMenu /> : <Nav />}
    </div>
  );
};

export default Header;
