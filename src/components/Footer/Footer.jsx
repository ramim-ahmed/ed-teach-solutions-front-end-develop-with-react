import React from "react";
import footer_background from "../../assets/footer-bg.png";
import "./Footer.css";
const Footer = () => {
  const footer__bg = {
    backgroundImage: `url(${footer_background})`,
    height: "350px",
    width:'100%',
    backgroundPositon: "center",
    backgroundSize: "cover",
  };
  return (
    <div style={footer__bg} className="footer_bg">
        <footer>
          <div className="container">
            <div style={{height:'350px'}} className="row d-flex align-items-center">
              <div className="col-sm-4 col-md-3 item">
                <h3>Services</h3>
                <ul>
                  <li>
                    <a href="/">Web design</a>
                  </li>
                  <li>
                    <a href="/">Development</a>
                  </li>
                  <li>
                    <a href="/">Hosting</a>
                  </li>
                </ul>
              </div>
              <div className="col-sm-4 col-md-3 item">
                <h3>About</h3>
                <ul>
                  <li>
                    <a href="/">Company</a>
                  </li>
                  <li>
                    <a href="/">Team</a>
                  </li>
                  <li>
                    <a href="/">Legacy</a>
                  </li>
                </ul>
              </div>
              <div className="col-sm-4 col-md-3 item">
                <h3>Careers</h3>
                <ul>
                  <li>
                    <a href="/">Job openings</a>
                  </li>
                  <li>
                    <a href="/">Employee success</a>
                  </li>
                  <li>
                    <a href="/">Benefits</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 item social">
                <a href="/">
                  <i className="icon ion-social-facebook"></i>
                </a>
                <a href="/">
                  <i className="icon ion-social-twitter"></i>
                </a>
                <a href="/">
                  <i className="icon ion-social-snapchat"></i>
                </a>
                <a href="/">
                  <i className="icon ion-social-instagram"></i>
                </a>
                <p className="copyright text-white">Ed-Tech Solutions 2022</p>
              </div>
            </div>
          </div>
        </footer>
    </div>
  );
};

export default Footer;
