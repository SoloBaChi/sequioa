import React from "react";
import Link from "next/link";
import Rarrow from "../icons/Rarrow";
import InstagramIcon from "../icons/InstagramIcon";
import TelegramIcon from "../icons/TelegramIcon";
import YoutubeIcon from "../icons/YoutubeIcon";

function Footer(props) {
  return (
    <footer className="footer-container">
      <section className="footer-section">
        <div className="flex-container-2">
          <div className="flex-item">
            <h4>Subscribe for our newslatters</h4>
            <div className="form-container">
              <form>
                <div className="form-field">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="E-mail"
                    required
                  />
                  <div className="icon-container">
                    <button type="submit">
                      {/* <img src={`/assets/icons/rarrow-icon.svg`} alt="" /> */}
                      <Rarrow />
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="social-media-icons">
              <Link href="/">
                <TelegramIcon />
              </Link>
              <Link href="/">
                <InstagramIcon />
              </Link>
              <Link href="/">
                <YoutubeIcon />
              </Link>
            </div>
          </div>
          <div className="flex-item">
            <nav className="nav-menu">
              <ul className="list-menu">
                <li>
                  <Link href="#">about us</Link>
                  <ul className="nested-list-menu flex-container-2">
                    <div className="flex-item">
                      <li>
                        <Link href="/">copy trading</Link>
                      </li>
                      <li>
                        <Link href="/">guides</Link>
                      </li>
                      <li>
                        <Link href="/">webinars</Link>
                      </li>
                      <li>
                        <Link href="/">news</Link>
                      </li>
                      <li>
                        <Link href="/">about us</Link>
                      </li>
                    </div>
                    <div className="flex-item">
                      <li>
                        <Link href="/">testimonials</Link>
                      </li>
                      <li>
                        <Link href="/">contacts</Link>
                      </li>
                    </div>
                  </ul>
                </li>
                <li>
                  <Link href="#">contact us</Link>
                  <ul className="nested-list-menu">
                    <li>
                      <Link href="tel:+1 (001) 981-76-17">
                        +1 (001) 981-76-17
                      </Link>
                    </li>
                    <li>
                      <Link href="mailto:info@logoipsum.com">
                        info@logoipsum.com
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
