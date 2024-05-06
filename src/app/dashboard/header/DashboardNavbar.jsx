"use client";
import React, { useState } from "react";
import MenuBarIcon from "@/app/components/icons/MenuBarIcon";
import Link from "next/link";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import DashboardMenu from "./DashboardMenu";

function DashboardNavBar({ handleShowSidebar }) {
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleToggleMenu = () => {
    setToggleMenu((prev) => !prev);
  };
  return (
    <div className="dashboard navbar-container">
      <div className="flex-container-2">
        <div className="flex-item ri-menu-icon" onClick={handleShowSidebar}>
          <RiMenu3Line />
        </div>
        <div className="flex-item logo-container">
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
            <DashboardMenu />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardNavBar;
