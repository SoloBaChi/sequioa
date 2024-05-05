import React from "react";
import AvatarIcon from "../components/icons/AvatarIcon";
import BackArrow from "../components/icons/BackArrow";
import InstagramDashboardIcon from "../components/icons/InstagramDashboardIcon";
import TwitterIcon from "../components/icons/TwitterIcon";
import FacebookIcon from "../components/icons/FacebookIcon";
import ShareIcon from "../components/icons/ShareIcon";
import Link from "next/link";

function ProfileCard({ goback }) {
  return (
    <figure className="profile-card">
      <div className="top-section">
        <div className="flex-2">
          <div className="flex-item">
            <div className="img-container">
              <img
                src={`/dashboard/images/profile-img.svg`}
                alt="user profile"
              />
            </div>
          </div>
          <div className="flex-item">
            <div className="text-wrapper">
              <div className="flex-container-2">
                <div className="flex-item">
                  <div className="icon-container">
                    <AvatarIcon />
                  </div>
                </div>
                <div className="flex-item">
                  <h3>ChetaFx_001</h3>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur. Eu commodo lacus sed
                enim cras eu eu vulputate. Semper massa ut ut amet. Pharetra
                purus quis ac duis sed consectetur molestie ipsum convallis.
                Scelerisque facilisis feugiat neque pulvinar.
              </p>
              <hr />
            </div>
          </div>
        </div>
        <div className="other-resources mb-4">
          <div className="flex justify-end mt-2 gap-4">
            <div className="flex-item">
              <div className="icon-container"></div>
              <h5>Human</h5>
            </div>
            <div className="flex-item">
              <div className="icon-container"></div>
              <h5>426 inestors</h5>
            </div>
            <div className="flex-item">
              <div className="icon-container"></div>
              <h5>Joined mar 2023</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="middle-section relative">
        <div className="flex-6">
          <div className="flex-item">
            <button className="primary-btn">
              <div className="icon-container">
                <img src={`/dashboard/icons/risk-icon.svg`} alt="" />
              </div>
              <div className="text-wrapper">
                <h5>Risk Score</h5>
                <p className="text-[#E2413B]">8.0</p>
              </div>
            </button>
          </div>
          <div className="flex-item">
            <button className="primary-btn">
              <div className="icon-container">
                <img src={`/dashboard/icons/average-rio.svg`} alt="" />
              </div>
              <div className="text-wrapper">
                <h5>average rio</h5>
                <p className="text-[#E9873B]">$400</p>
              </div>
            </button>
          </div>
          <div className="flex-item">
            <button className="primary-btn">
              <div className="icon-container">
                <img src={`/dashboard/icons/fees-icon.svg`} alt="" />
              </div>
              <div className="text-wrapper">
                <h5>fees</h5>
                <p className="text-[#E9873B]">15.5%</p>
              </div>
            </button>
          </div>
          <div className="flex-item">
            <button className="primary-btn">
              <div className="icon-container">
                <img src={`/dashboard/icons/assets-type.svg`} alt="" />
              </div>
              <div className="text-wrapper">
                <h5>asset type</h5>
                <p className="text-[#E9873B]">00</p>
              </div>
            </button>
          </div>
          <div className="flex-item">
            <button className="primary-btn">
              <div className="icon-container">
                <img
                  src={`/dashboard/icons/min-deposit-icon.svg`}
                  alt="deposit"
                />
              </div>
              <div className="text-wrapper">
                <h5>minimum deposit</h5>
                <p className="text-[#E9873B]">$1,000</p>
              </div>
            </button>
          </div>
          <div className="flex-item">
            <button className="primary-btn">
              <div className="icon-container">
                <img src={`/dashboard/icons/bank-icon.svg`} alt="" />
              </div>
              <div className="text-wrapper">
                <h5>total assets managed</h5>
                <p className="text-[#E9873B]">$198,00</p>
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="bottom-section">
        <div className="flex justify-between items-center">
          <Link href={goback} className="flex-item flex gap-2">
            <BackArrow />
            <h5 className="font-bold">back</h5>
          </Link>
          <div className="flex-item">
            <div className="flex items-center gap-4">
              <Link href="#" className="flex-item">
                <InstagramDashboardIcon />
              </Link>
              <Link href="#" className="flex-item">
                <TwitterIcon />
              </Link>
              <Link href="#" className="flex-item">
                <FacebookIcon />
              </Link>
              <Link href="#" className="flex-item">
                <ShareIcon />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </figure>
  );
}

export default ProfileCard;
