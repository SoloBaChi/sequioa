import React from "react";
import NavBar from "./DashboardNavbar";

function DashboardHeader({ handleShowSidebar }) {
  return (
    <>
      <header className="dashboard header-container">
        <NavBar handleShowSidebar={handleShowSidebar} />
      </header>
    </>
  );
}

export default DashboardHeader;
