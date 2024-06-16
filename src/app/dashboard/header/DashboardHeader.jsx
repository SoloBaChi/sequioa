import React from "react";
import NavBar from "./DashboardNavbar";

function DashboardHeader({ handleShowSidebar, logoutUser }) {
  return (
    <>
      <header className="dashboard header-container">
        <NavBar handleShowSidebar={handleShowSidebar} logoutUser={logoutUser} />
      </header>
    </>
  );
}

export default DashboardHeader;
