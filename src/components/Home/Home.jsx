import React from "react";
import alalmiya from "../../Assets/alalmiya.png";
import beetleware from "../../Assets/beetleware.png";
import { Skills } from "./Skills";
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
