import React from "react";
import Link from "next/link";

function SideMenu(props) {
  return (
    <div className="side-menu">
      <h3>
        welcome <strong>Cheta !</strong>
      </h3>
      <nav className="dashboard-side-menu">
        <ul className="list">
          <div className="top-section">
            <li class="list-item">
              <Link href="/dashboard" className="inner-flex-2 active">
                <div className="img-icon">
                  <img
                    src={`/dashboard/icons/dashboard-sidebar-icon.svg`}
                    alt="dashboard"
                  />
                </div>
                <p>dashboard</p>
              </Link>
            </li>
            <li className="list-item">
              <Link href="#" className="inner-flex-2">
                <div className="img-icon">
                  <img
                    src={`/dashboard/icons/wallet-sidebar-icon.svg`}
                    alt="wallet"
                  />
                </div>
                <p>wallet</p>
              </Link>
            </li>
            <li className="list-item">
              <Link href="#" className="inner-flex-2">
                <div className="img-icon">
                  <img
                    src={`/dashboard/icons/copy-trading-path-icon.svg`}
                    alt="copy trading"
                  />
                </div>
                <p>copy trading</p>
              </Link>
            </li>
            <li className="list-item">
              <Link href="#" className="inner-flex-2">
                <div class="img-icon">
                  <img
                    src={`/dashboard/icons/trading-account-icon.svg`}
                    alt="trading accounts"
                  />
                </div>
                <p>trading accounts</p>
              </Link>
            </li>
            <li className="list-item">
              <Link href="#" className="inner-flex-2">
                <div className="img-icon">
                  <img
                    src={`/dashboard/icons/leaderboard-icon.svg`}
                    alt="leader board"
                  />
                </div>
                <p>leader board</p>
              </Link>
            </li>
            <li className="list-item">
              <Link href="#" className="inner-flex-2">
                <div className="img-icon">
                  <img
                    src={`/dashboard/icons/investors.svg`}
                    alt="investor account"
                  />
                </div>
                <p>investor account</p>
              </Link>
            </li>
            <li className="list-item">
              <Link href="#" className="inner-flex-2">
                <div className="img-icon">
                  <img src={`/dashboard/icons/investors.svg`} alt="profile" />
                </div>
                <p>profile</p>
              </Link>
            </li>
          </div>
          <div className="bottom-section">
            <li class="list-item">
              <Link href="#" className="inner-flex-2">
                <div class="img-icon">
                  <img
                    src={`/dashboard/icons/settings-sidebar-icon.svg`}
                    alt="settings"
                  />
                </div>
                <p>settings</p>
              </Link>
            </li>
            <li class="list-item">
              <Link href="#" className="inner-flex-2">
                <div class="img-icon">
                  <img
                    src={`/dashboard/icons/logout-sidebar-icon.svg`}
                    alt="logout"
                  />
                </div>
                <p>logout</p>
              </Link>
            </li>
          </div>
        </ul>
      </nav>
    </div>
  );
}

export default SideMenu;
