import { useState, useEffect } from "react";
import "./App.css";
import Header from "../components/Header/Header";

const App = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <div className="app">
      <Header windowWidth={windowWidth} />
    </div>
  );
};

export default App;
