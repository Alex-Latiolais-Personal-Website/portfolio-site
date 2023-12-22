import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header>
      <p className="name">Alex Latiolais</p>
      <p className="links">
        <Link to="/">Home</Link> |&nbsp;
        <Link to="/About">About</Link> |&nbsp;
        <Link to="/Portfolio">Portfolio</Link> |&nbsp;
        <Link to="/Contact">Contact</Link> |&nbsp;
        <Link to="/Miscellaneous">Misc</Link>
      </p>
    </header>
  );
}

export default Navbar;
