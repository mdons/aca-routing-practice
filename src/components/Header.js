import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => (
  <ul className="header">
    <li>
      <Link to="/">Landing</Link>
    </li>
    <li>
      <Link to="/home">Home</Link>
    </li>
    <li>
      <Link to="/about">About</Link>
    </li>
    <li>
      <Link to="/HelloWorld">Hello World!</Link>
    </li>
    <li>
      <Link to="/granny">My Grandma</Link>
    </li>
  </ul>
);

export default Header;
