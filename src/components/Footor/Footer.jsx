import React from "react";
import Logo from "../../assets/logo.png";
import InstagramIcon from "../../Assets/instagram.svg";
import LinkedInIcon from "../../Assets/linkedin.svg";
import GitHubIcon from "../../Assets/github.svg";
import {Link} from 'react-router-dom'

export default function Footer() {
  return (
    <>
      <div className="footer">
      <div className="top-container">
          <h3 className="stack-footer-title">Start Collaboration</h3>
          <p className="stack-footer-text">
            Excited to collaborate? Let's schedule a time <br /> to chat I’ll
            bring the coffee!" ☕😊
          </p>
          <Link to="/about" className="stack-footer-button" >Let's Go</Link>
        </div>
        <img
          src={Logo}
          alt="Logo"
          className="logo-footer"
          style={{ width: "120px" }}
        />
        <p className="main-footer-text">
          Work, Living, learning & growing
          <br /> to be ready for opportunity.
        </p>
        <div className="social-icons">
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={LinkedInIcon}
              alt="LinkedIn"
              className="linkedIn-icon"
              style={{ width: "30px" }}
            />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={InstagramIcon}
              alt="Instagram"
              className="instagram-icon"
              style={{ width: "35px" }}
            />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={GitHubIcon}
              alt="GitHub"
              className="github-icon"
              style={{ width: "30px" }}
            />
          </a>
        </div>
        <p className="crafted" >
          Handcrafted by me
        </p>
       
      </div>
    </>
  );
}
