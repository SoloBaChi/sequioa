import React from "react";
import SideMenu from "../SideMenu";
import Search from "../Search";
import ProfileCard from "../ProfileCard";
import Link from "next/link";

function CopyTrading(props) {
  return (
    <div className="dashboard-container copytrading">
      <div className="container-item">{/* <Header /> */}</div>
      <div className="container-item main-view">
        <div className="grid-2">
          <div className="side-menu">
            <SideMenu />
          </div>
          <div className="main-side">
            <div className="search-menu">
              <Search />
            </div>
            <div className="trading-cards">
              <div className="grid-container">
                <div className="grid-item">
                  <Link href="/dashboard/copytrading/userid">
                    <ProfileCard />
                  </Link>
                </div>
                <div className="grid-item">
                  <Link href="/dashboard/copytrading/userid">
                    <ProfileCard />
                  </Link>
                </div>
                <div className="grid-item">
                  <Link href="/dashboard/copytrading/userid">
                    <ProfileCard />
                  </Link>
                </div>
                <div className="grid-item">
                  <Link href="/dashboard/copytrading/userid">
                    <ProfileCard />
                  </Link>
                </div>
                <div className="grid-item">
                  <Link href="/dashboard/copytrading/userid">
                    <ProfileCard />
                  </Link>
                </div>
                <div className="grid-item">
                  <Link href="/dashboard/copytrading/userid">
                    <ProfileCard />
                  </Link>
                </div>
                <div className="grid-item">
                  <Link href="/dashboard/copytrading/userid">
                    <ProfileCard />
                  </Link>
                </div>
                <div className="grid-item">
                  <Link href="/dashboard/copytrading/userid">
                    <ProfileCard />
                  </Link>
                </div>
                <div className="grid-item">
                  <Link href="/dashboard/copytrading/userid">
                    <ProfileCard />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container-item footer">Yes</div> */}
    </div>
  );
}

export default CopyTrading;
