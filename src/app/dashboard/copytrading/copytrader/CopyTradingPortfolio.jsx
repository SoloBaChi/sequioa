import React from "react";
import SetButtons from "../../SetButtons";
import DownArrowIcon from "@/app/components/icons/DownArrowIcon";
import UpArrowIcon from "@/app/components/icons/UpArrowIcon";
import GoldSymbol from "@/app/components/icons/GoldSymbol";
import BitcoinSymbol from "@/app/components/icons/BitcoinSymbol";

function CopyTradingPortfolio(props) {
  return (
    <div className="trading-leaderboard trading-portfolio">
      <div className="table-container">
        <div className="flex-container-2">
          <h4 className="mb-4">trading portfolio</h4>
          <SetButtons text1="open" text2="closed" />
        </div>
        <table className="table-element">
          <thead>
            <tr>
              <th>symbol</th>
              <th>asset type</th>
              <th>asset</th>
              <th>type</th>
              <th>volume</th>
              <th>open price</th>
              <th>open time</th>
              <th>close time</th>
              <th>close price</th>
              <th>profit</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className="flex-container">
                  <div className="img-container">
                    <GoldSymbol />
                  </div>
                </div>
              </td>
              <td>precious metal</td>
              <td>gold</td>
              <td>BUY</td>
              <td>1.00</td>
              <td>2101.44</td>
              <td>
                <span>09:06 am</span> <br /> <span>12 mar 24</span>
              </td>
              <td>2101.44</td>
              <td>
                <span>09:06 am</span> <br /> <span>12 mar 24</span>
              </td>
              <td className="text-[#1dc0c2] profit">$4100.1</td>
            </tr>
            <tr>
              <td>
                <div className="flex-container">
                  <div className="img-container">
                    <BitcoinSymbol />
                  </div>
                </div>
              </td>
              <td>cryptocurrency</td>
              <td>bitcoin</td>
              <td>SELL</td>
              <td>1.00</td>
              <td>2101.44</td>
              <td>
                <span>09:06 am</span> <br /> <span>12 mar 24</span>
              </td>
              <td>2101.44</td>
              <td>
                <span>09:06 am</span> <br /> <span>12 mar 24</span>
              </td>
              <td className="text-[#e2413b] loss">$4100.1</td>
            </tr>
            <tr>
              <td>
                <div className="flex-container">
                  <div className="img-container">
                    <GoldSymbol />
                  </div>
                </div>
              </td>
              <td>precious metal</td>
              <td>gold</td>
              <td>BUY</td>
              <td>1.00</td>
              <td>2101.44</td>
              <td>
                <span>09:06 am</span> <br /> <span>12 mar 24</span>
              </td>
              <td>2101.44</td>
              <td>
                <span>09:06 am</span> <br /> <span>12 mar 24</span>
              </td>
              <td className="text-[#1dc0c2] profit">$4100.1</td>
            </tr>
            <tr>
              <td>
                <div className="flex-container">
                  <div className="img-container">
                    <BitcoinSymbol />
                  </div>
                </div>
              </td>
              <td>cryptocurrency</td>
              <td>bitcoin</td>
              <td>SELL</td>
              <td>1.00</td>
              <td>2101.44</td>
              <td>
                <span>09:06 am</span> <br /> <span>12 mar 24</span>
              </td>
              <td>2101.44</td>
              <td>
                <span>09:06 am</span> <br /> <span>12 mar 24</span>
              </td>
              <td className="text-[#e2413b] profit">$4100.1</td>
            </tr>
            <tr>
              <td>
                <div className="flex-container">
                  <div className="img-container">
                    <GoldSymbol />
                  </div>
                </div>
              </td>
              <td>precious metal</td>
              <td>gold</td>
              <td>BUY</td>
              <td>1.00</td>
              <td>2101.44</td>
              <td>
                <span>09:06 am</span> <br /> <span>12 mar 24</span>
              </td>
              <td>2101.44</td>
              <td>
                <span>09:06 am</span> <br /> <span>12 mar 24</span>
              </td>
              <td className="text-[#1dc0c2] profit">$4100.1</td>
            </tr>
            <tr>
              <td>
                <div className="flex-container">
                  <div className="img-container">
                    <BitcoinSymbol />
                  </div>
                </div>
              </td>
              <td>cryptocurrency</td>
              <td>bitcoin</td>
              <td>SELL</td>
              <td>1.00</td>
              <td>2101.44</td>
              <td>
                <span>09:06 am</span> <br /> <span>12 mar 24</span>
              </td>
              <td>2101.44</td>
              <td>
                <span>09:06 am</span> <br /> <span>12 mar 24</span>
              </td>
              <td className="text-[#1dc0c2] profit">$4100.1</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CopyTradingPortfolio;
