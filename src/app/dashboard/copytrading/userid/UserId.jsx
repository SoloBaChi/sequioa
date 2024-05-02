import React from "react";
import MainMenu from "../../MainMenu";
import SideMenu from "../../SideMenu";

function UserId(props) {
  return (
    <div className="dashboard-container copy-trader">
      <div className="container-item">{/* <Header /> */}</div>
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

export default UserId;
