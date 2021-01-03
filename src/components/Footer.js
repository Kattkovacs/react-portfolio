import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-details">
        {/* <p className="footer-details-heading">Contact me</p>
        <p className="footer-details-text">kattkovacs@gmail.com</p>
        <div className="footer-links">
          <div className="footer-link-wrapper">
            <div className="footer-link-items">
              <h2>About me</h2>
              <Link to="/contact">Contact</Link>
            </div>
          </div>
        </div> */}
        <section className="social-media">
          <div className="social-media-wrap">
            <div className="footer-logo">
              <Link to="/" className="social-logo">
                KATTINCH <p>&nbsp;</p>
                <i className="fas fa-fire" />
              </Link>
            </div>
            <small className="website-rights">Kattinch © 2021</small>
            <div className="social-icons">
              <Link
                class="social-icon-link linkedin"
                to="/"
                target="_blank"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin" />
              </Link>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}

export default Footer;
