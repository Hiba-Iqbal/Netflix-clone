import React, { useEffect, useState } from "react";
import "./NavBar.css";

const NavBar = () => {
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);
  return (
    <div className={colorChange ? "nav_black nav colorChange" : "nav"}>
      <img
        className="nav_logo"
        src="https://about.netflix.com/images/logo.png"
        alt="Netflix Logo"
        style={{ width: "100px" }}
      />
    </div>
  );
};

export default NavBar;
