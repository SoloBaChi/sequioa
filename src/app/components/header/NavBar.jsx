"use client";
import React, { useState } from "react";
import Menu from "./Menu";
import MenuBarIcon from "../icons/MenuBarIcon";
import Link from "next/link";

function NavBar(props) {
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleToggleMenu = () => {
    setToggleMenu((prev) => !prev);
  };
  return (
    <div className="navbar-container">
      <div className="flex-container-2">
        <div className="flex-item">
          <Link href="/" className="img-container">
            <img src={`/assets/sequioa-logo.svg`} alt="logo" />
          </Link>
        </div>
        <div className="flex-item">
          <span className="togglebar" onClick={handleToggleMenu}>
            <MenuBarIcon />
          </span>
          <div
            className={toggleMenu ? "nav-menu" : "active"}
            onClick={handleToggleMenu}
          >
            <Menu />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
