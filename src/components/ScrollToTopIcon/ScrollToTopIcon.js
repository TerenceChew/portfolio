import "./ScrollToTopIcon.css";

const ScrollToTopIcon = () => {
  return (
    <a href="#header">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="70"
        height="70"
        fill="#edf5e1"
        stroke="#edf5e1"
        className="icon flat-color scroll-to-top-icon"
        data-name="Flat Color"
        viewBox="-2.4 -2.4 28.8 28.8"
      >
        <g>
          <circle cx="12" cy="12" r="10" fill="#000000edf5e1" />
          <path
            fill="#000"
            d="M14.83 9.5l-2.14-3.12a.82.82 0 00-1.38 0L9.17 9.5a1 1 0 00.69 1.5H11v6a1 1 0 002 0v-6h1.14a1 1 0 00.69-1.5z"
          />
        </g>
      </svg>
    </a>
  );
};

export default ScrollToTopIcon;
