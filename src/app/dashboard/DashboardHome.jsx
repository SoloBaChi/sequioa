import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import SideMenu from "./SideMenu";
import MainMenu from "./MainMenu";

function DashboardHome(props) {
  return (
    <div className="dashboard-container">
      <div className="container-item">
        <Header />
      </div>
      <div className="main-view">
        <div className="grid-2">
          <div className="side-menu">
            <SideMenu />
          </div>
          <div className="main-side">
            <MainMenu />
          </div>
        </div>
      </div>
      {/* <div className="container-item footer">Yes</div> */}
    </div>
  );
}

export default DashboardHome;
