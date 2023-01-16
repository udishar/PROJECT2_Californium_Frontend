import React from "react";
import "../Styles/Footer.css";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <>
      <footer>
        <div className="footer1">
          <div className="container">
            <div className="table1">
              <div className="col1" id="gym">
                <li>
                  <h1 className="color">GYM</h1>
                  <div className="parag">
                    <p> Loreum ipsum dolor sitt feugiat varius nue aliquet.</p>
                  </div>
                  <div className="tags">
                    <a href="https://www.instagram.com/">
                      {" "}
                      <FaInstagram />
                    </a>
                    <a href="https://www.facebook.com/">
                      {" "}
                      <FaFacebook />
                    </a>
                    <a href="https://www.twitter.com/">
                      {" "}
                      <FaTwitter />
                    </a>
                  </div>
                </li>
              </div>

              <div className="col1">
                <ul>
                  <li>
                    <h3> Healthy Living </h3>
                    <a href="#"> Loreum</a>
                  </li>
                  <li>
                    <a href="#"> Loreum ipsum</a>
                  </li>
                  <li>
                    <a href="#"> Loreum</a>
                  </li>
                  <li>
                    <a href="#">Loreum ipsum</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="table2">
              <div className="col1">
                <ul>
                  <li>
                    <h3> Services</h3>
                    <a href="#"> Loreum</a>
                  </li>
                  <li>
                    <a href="#">Loreum ipsum</a>
                  </li>
                  <li>
                    <a href="#"> Loreum ipsum</a>
                  </li>
                  <li>
                    <a href="#">Loreum ipsum</a>
                  </li>
                </ul>
              </div>
              <div className="col1">
                <ul>
                  <li>
                    <h3> Programms</h3>
                    <a href="#">Loreum </a>
                  </li>
                  <li>
                    <a href="#">Loreum ipsum </a>
                  </li>
                  <li>
                    <a href="#">Loreum ipsum </a>
                  </li>
                  <li>
                    <a href="#"> Loreum ipsum</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <hr />
        <div className="mt">
          <p className="paragraph ">@2023 isr All rights copy reserved.</p>
        </div>
      </footer>
    </>
  );
}
export default Footer;
