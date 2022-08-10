import React from "react";
import reactDom from "react-dom";
import { Nav } from "react-bootstrap";
import logo from "../img/logo.jpg";
import { SocialIcon } from "react-social-icons";

const Footer = (props) => {
  return (
    <>
      <footer className="bg-dark ">
        <div className="footer-container">
          <div className="row">
            {/*column1 */}
            <div id="leftColumn" className="col-md-3 col-sm-3">
            <div className="right">
                <h5>My Site</h5>
                <br />
                <ul className="list-unstyled">
                  <li>
                    <Nav.Link className="links" href="/">Account</Nav.Link>
                  </li>
                  <li>
                    <Nav.Link className="links" href="/about">Favourites</Nav.Link>
                  </li>
                  <li>
                    <Nav.Link className="links" href="/faq">Settings</Nav.Link>
                  </li>
                  <li>
                    <Nav.Link className="links" href="/contact">Favourites</Nav.Link>
                  </li>
                </ul>

                <br />
              </div>
            </div>
            
            {/*column3 */}
            <div className="col-md-3 col-sm-3 text-center">
              <div className="right">
                <h5>Watch</h5>
                <br />
                <ul className="list-unstyled">
                  <li>
                    <Nav.Link className="links" href="/">Movies</Nav.Link>
                  </li>
                  <li>
                    <Nav.Link className="links" href="/about">Shows</Nav.Link>
                  </li>
                  <li>
                    <Nav.Link className="links" href="/faq">Featured</Nav.Link>
                  </li>
                  <li>
                    <Nav.Link className="links" href="/contact">Top Rated</Nav.Link>
                  </li>
                </ul>

                <br />
              </div>
            </div>

            {/*column3 */}
            <div className="col-md-3 col-sm-3 text-center">
              <div className="right">
                <h5>Links</h5>
                <br />
                <ul className="list-unstyled">
                  <li>
                    <Nav.Link className="links" href="/">Home</Nav.Link>
                  </li>
                  <li>
                    <Nav.Link className="links" href="/about">About</Nav.Link>
                  </li>
                  <li>
                    <Nav.Link className="links" href="/faq">FAQ</Nav.Link>
                  </li>
                  
                  <li>
                    <Nav.Link className="links" href="/contact">Contact Us</Nav.Link>
                  </li>
                </ul>

                <br />
              </div>
            </div>

            {/*column4 */}
            <div className="col-md-3 col-sm-3 text-center">
              <div className="middle">
                
              <img src={logo} className="app-logo" alt="logo" />
                
                <br /><br /><br />
                <br />
                <ul className="list-unstyled list-inline">
                  <li class="list-inline-item">
                    <SocialIcon network="twitter" bgColor="#d1f2ff" />
                  </li>
                  <li class="list-inline-item">
                    <SocialIcon network="facebook" bgColor="#d1f2ff" />
                  </li>
                  <li class="list-inline-item">
                    <SocialIcon network="youtube" bgColor="#d1f2ff" />
                  </li>
                </ul>
                
              </div>
            </div>


          </div>
        </div>
        {/*Footer bottom*/}
      </footer>
    </>
  );
};

export default Footer;
