import React from "react";
import Logo from "../../assets/logo.png";
import InstagramIcon from "../../Assets/instagram.svg";
import LinkedInIcon from "../../Assets/linkedin.svg";
import GitHubIcon from "../../Assets/github.svg";
import { Link } from "react-router-dom";

export default function Footer() {
  const currentPath = window.location.pathname;

  return (
    <>
      <div className="footer">
        <div className="top-container">
          {currentPath === "/home" ? (
            <h3 className="stack-footer-title">Start Collaboration</h3>
          ) : (
            <h3 className="stack-footer-title">Back to Home</h3>
          )}
          {currentPath === "/home" ? (
            <p className="stack-footer-text">
              Excited to collaborate? Let's schedule a time <br /> to chat I’ll
              bring the coffee!" ☕😊
            </p>
          ) : (
            <p className="stack-footer-text">
            Passionate about innovation? Let’s connect and turn ideas<br /> into reality.
            I’ll bring the creativity, you bring the vision! 🚀✨"
          </p>
          )}

          {currentPath === "/home" ? (
            <Link
              to="/about"
              className="stack-footer-button"
              onClick={() => (window.location.href = "/about")}
            >
              About Me
            </Link>
          ) : (
            <Link
              to="/home"
              className="stack-footer-button"
              onClick={() => (window.location.href = "/home")}
            >
              Home
            </Link>
          )}
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
            href="https://www.linkedin.com/in/mohamedgamalelkhoreby/"
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
            href="https://www.instagram.com/moohgamal/"
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
            href="https://github.com/mohamedelkhoreby"
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
        <p className="crafted">Handcrafted by Me Using React.js</p>
      </div>
    </>
  );
}
