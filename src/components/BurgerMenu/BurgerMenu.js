import "./BurgerMenu.css";

const BurgerMenu = ({ fullPageNavToggler, showFullPageNav }) => {
  const ariaExpanded = showFullPageNav ? "true" : "false";
  const handleClick = (e) => {
    const burger = e.currentTarget;
    const isExpanded = burger.getAttribute("aria-expanded");

    if (isExpanded === "false") {
      burger.setAttribute("aria-expanded", "true");
    } else {
      burger.setAttribute("aria-expanded", "false");
    }

    fullPageNavToggler();
  };
  const style = showFullPageNav
    ? {
        position: "fixed",
        top: "20px",
        right: "30px",
      }
    : {};

  return (
    <button
      className="burger flex f-center"
      aria-expanded={ariaExpanded}
      onClick={handleClick}
      style={style}
    >
      <svg fill="var(--burger-color)" viewBox="0 0 100 100" width={35}>
        <rect
          className="line top"
          width={80}
          height={10}
          x="10"
          y="25"
          rx={4}
        />
        <rect
          className="line middle"
          width={80}
          height={10}
          x="10"
          y="45"
          rx={4}
        />
        <rect
          className="line bottom"
          width={80}
          height={10}
          x="10"
          y="65"
          rx={4}
        />
      </svg>
    </button>
  );
};

export default BurgerMenu;
