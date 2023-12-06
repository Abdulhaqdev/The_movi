import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

function navbar() {
  const [navSize, setnavSize] = useState("10rem");
  const [navColor, setnavColor] = useState("transparent");
  const listenScrollEvent = () => {
    window.scrollY > 10 ? setnavColor("#161A30") : setnavColor("transparent");
    window.scrollY > 10 ? setnavSize("5rem") : setnavSize("2rem");
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);
  return (
    <div
      className="navbar"
      style={{
        backgroundColor: navColor,
        height: navSize,
        transition: "all 1s",
      }}
    >
      <Link to="/" className="logo">
        TheMovi
      </Link>
      <ul className="navlinks">
        <li className="nav-link">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-link">
          <Link to="/movies/pages/:page">Movies</Link>
        </li>
        <li className="nav-link">
          <Link to="/Series/pages/:page">TV Series</Link>
        </li>
      </ul>
    </div>
  );
}

export default navbar;
