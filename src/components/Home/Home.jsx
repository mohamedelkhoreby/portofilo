import React from "react";
import alalmiya from "../../Assets/alalmiya.png";
import beetleware from "../../Assets/beetleware.png";
import { Skills } from "./Skills";
import { Projects } from "./Projects";
import me from "../../Assets/me.png";
export default function Home() {
  return (
    <div
      className="home"
      style={{
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <div className="intro">
        <div className="home-photo-container">
          <img src={me} alt="photo" className="home-photo" />
        </div>
        <div className="home-info">
          <h2>Hi, I’m Mohamed Gamal. Nice to meet you.</h2>
          <p style={{ color: "#707070" }}>
            "I'm software developer with expertise in Flutter, Frontend, and AI.
            <br />
            I believe that technology, like beauty, lies in the details, and I
            strive to create intuitive
            <br />
            and impactful digital solutions.
          </p>
        </div>
      </div>
      <div className="section-title">
        <h1 style={{ color: "white" }}>My Startup Projects</h1>
        <p style={{ color: "white", marginTop: "10px" }}>
          I have a passion for digital products, exploring countless web and
          mobile apps across various industries.
          <br /> Over time, I embraced the challenge of designing and building
          my own, turning ideas into reality." 🚀
        </p>
      </div>
      <Projects />
      <div className="section-title">
        <h1 style={{ color: "white" }}>
          Bringing ideas to life through code, design, and innovation.
        </h1>
      </div>
      <Skills />
      <div className="horizontal-line"></div>
      <p style={{ fontWeight: "bold" }}>
        I'm honored to have worked with some amazing
        <br />
        companies on exciting projects." 🚀
      </p>
      <div
        style={{
          justifyContent: "space-evenly",
          marginTop: "20px",
          flexDirection: "row",
          display: "flex",
        }}
      >
        <img
          src={alalmiya}
          alt="logo"
          style={{ width: "200px", height: "auto" }}
        />
        <img
          src={beetleware}
          alt="logo"
          style={{ width: "200px", height: "auto" }}
        />
      </div>
    </div>
  );
}
