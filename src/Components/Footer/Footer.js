import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
function Footer() {
  return (
    <>
      <footer className="footer-distributed " style={{}}>
        <div className="footer-left">
          <p
            style={{
              fontFamily: 'Poppins',
              margin: '0px',
              transform: 'translateY(-4px)',
              color: 'rgba(20,20,20)',
              fontSize: '26px'
            }}
          >
            <span
              style={{
                color: '#ec436f',
                fontFamily: 'Pacifico',
                fontSize: '30px',
                textDecoration: 'none'
              }}
            >
              Up
            </span>
            store
          </p>

          <p className="footer-links">
            <Link to="/">Home</Link> | <Link to="/">About us</Link> | <Link to="/">Terms and conditions</Link>
          </p>

          <p className="footer-company-name">© 2019 Upstore Pvt. Ltd.</p>
        </div>

        <div className="footer-center">
          <div>
            <i className="fa fa-map-marker"></i>
            <p>
              <span>309 - Rupa Solitaire, Bldg. No. A - 1, Sector - 1</span>
              Mahape, Navi Mumbai - 400710
            </p>
          </div>

          <div>
            <i className="fa fa-phone"></i>
            <p>+91 8459252535</p>
          </div>
          <div>
            <i className="fa fa-envelope"></i>
            <p>
              <a style={{ color: '#ec436f' }} href="mailto:support@eduonix.com">
                shukladeshpande@gmail.com
              </a>
            </p>
          </div>
        </div>
        <div className="footer-right">
          <p className="footer-company-about">
            <span>About the company</span>
            We offer training and skill building courses across Technology, Design, Management, Science and Humanities.
          </p>
          <div className="footer-icons">
            <a href="/">
              <i className="fa fa-facebook"></i>
            </a>
            <a href="/">
              <i className="fa fa-twitter"></i>
            </a>
            <a href="/">
              <i className="fa fa-instagram"></i>
            </a>
            <a href="/">
              <i className="fa fa-linkedin"></i>
            </a>
            <a href="/">
              <i className="fa fa-youtube"></i>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
