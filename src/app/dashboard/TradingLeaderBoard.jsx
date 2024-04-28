import React from "react";
import UpArrowIcon from "../components/icons/UpArrowIcon";
import DownArrowIcon from "../components/icons/DownArrowIcon";

function TradingLeaderBoard(props) {
  return (
    <>
      <h4 className="mb-4">trading leaderboard</h4>
      <div className="table-container">
        <table className="table-element">
          <thead>
            <tr>
              <th>ranking</th>
              <th>member</th>
              <th>drawdown</th>
              <th>trading time</th>
              <th>profit %</th>
              <th>
                portfolio size <br />
                ($m)
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className="flex-container">
                  <span>1</span>
                  <div className="img-container">
                    <UpArrowIcon />
                  </div>
                </div>
              </td>
              <td>lance bogrol</td>
              <td>25</td>
              <td>28:20</td>
              <td className="text-[#1dc0c2] profit">+75</td>
              <td>986</td>
            </tr>
            <tr>
              <td>
                <div className="flex-container">
                  <span>2</span>
                  <div className="img-container">
                    <DownArrowIcon />
                  </div>
                </div>
              </td>
              <td>dianne ameter</td>
              <td>12</td>
              <td>10:21</td>
              <td className="text-[#1dc0c2] profit">+52</td>
              <td>320</td>
            </tr>
            <tr>
              <td>
                <div className="flex-container">
                  <span>3</span>
                  <div className="img-container">
                    <DownArrowIcon />
                  </div>
                </div>
              </td>
              <td>jackson pot</td>
              <td>32</td>
              <td>12:10</td>
              <td className="text-[#1dc0c2] profit">+24</td>
              <td>521</td>
            </tr>
            <tr>
              <td>
                <div className="flex-container">
                  <span>4</span>
                  <div className="img-container">
                    <UpArrowIcon />
                  </div>
                </div>
              </td>
              <td>jake weary</td>
              <td>26</td>
              <td>32:25</td>
              <td className="text-[#1dc0c2] profit">+24</td>
              <td>412</td>
            </tr>
            <tr>
              <td>
                <div className="flex-container">
                  <span>5</span>
                  <div className="img-container">
                    <UpArrowIcon />
                  </div>
                </div>
              </td>
              <td>piff jenkins</td>
              <td>14</td>
              <td>26:20</td>
              <td className="text-[#1dc0c2] profit">+28</td>
              <td>256</td>
            </tr>
            <tr>
              <td>
                <div className="flex-container">
                  <span>6</span>
                  <div className="img-container">
                    <DownArrowIcon />
                  </div>
                </div>
              </td>
              <td>barry tone</td>
              <td>22</td>
              <td>16:18</td>
              <td className="text-[#1dc0c2] profit">+35</td>
              <td>432</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default TradingLeaderBoard;
