import React from "react";
import web from "../../Assets/web.png";
import mobile from "../../Assets/mobile.png";
import tech from "../../Assets/tech.png";

export const Skills = () => {
  return (
    <div className="skills">
      <div className="skills-container">
        {/* Logo */}
        <img src={web} alt="Frontend Developer Logo" className="skills-logo" />

        {/* Title */}
        <h1 className="skills-title">Frontend Developer</h1>

        {/* Description */}
        <p className="skills-description">
          Love crafting websites from the ground up, <br />
          transforming ideas into smooth, <br />
          interactive, and engaging web experiences. <br />
          Beautiful and intuitive websites.
        </p>

        {/* Technologies Used */}
        <h2 className="skills-subtitle">I used</h2>
        <p className="skills-list">
          HTML <br />
          CSS <br />
          JavaScript <br />
          Sass <br />
          Bootstrap <br />
          jQuery <br />
          Redux <br />
          React.js <br />
          Next.js <br />
          TypeScript
        </p>
      </div>
      <div className="skills-container">
        {/* Logo */}
        <img
          src={mobile}
          alt="Mobile Application Developer Logo"
          className="skills-logo"
        />

        {/* Title */}
        <h1 className="skills-title">Mobile Application Developer</h1>

        {/* Description */}
        <p className="skills-description">
          I love building mobile apps from scratch <br />
          and turning ideas into seamless,
          <br />
          interactive experiences on any device." 📱
        </p>

        {/* Technologies Used */}
        <h2 className="skills-subtitle">I used</h2>
        <p className="skills-list">Flutter, Kotlin, Xml </p>
        <h2 className="skills-subtitle">Dev tools</h2>
        <p className="skills-list">
          VS Code, Android Studio, Xcode
          <br />
          Postman
          <br />
          GitHub
          <br />
        </p>
        <h2 className="skills-subtitle">List of state management approaches</h2>
        <p className="skills-list">Provider, Bloc, Cubit, Redux, GetX</p>
        <h2 className="skills-subtitle">Clean Architecture </h2>
        <p className="skills-list">MVVM</p>

      </div>
      {/* Technical skills */}
      <div className="skills-container">
        {/* Logo */}
        <img src={tech} alt="Technical skills Logo" className="skills-logo" />
        {/* Title */}
        <h1 className="skills-title">Technical skills </h1>
        {/* Description */}
        <p className="skills-description">
          Crafting innovative solutions with precision and expertise
        </p>
        {/* Technologies Used */}
        <h2 className="skills-subtitle">Language</h2>
        <p className="skills-list">Python, Java, C++, Dart, Kotlin</p>
        <h2 className="skills-subtitle">Object-Oriented Programming (OOP)</h2>
        <p className="skills-list">Java, Dart</p>
        <h2 className="skills-subtitle">Database Management</h2>
        <p className="skills-list">MongoDB, MySQL, JSON</p>
        <h2 className="skills-subtitle">APIs & Integrations</h2>
        <p className="skills-list">Google Maps API, ChatGPT API </p>
        <h2 className="skills-subtitle">
          Project Management & Version Control
        </h2>
        <p className="skills-list">Agile (Jira), Git</p>

        <h2 className="skills-subtitle">
          {" "}
          Artificial Intelligence & Machine Learning
        </h2>
        <p className="skills-list">Python, TensorFlow</p>
      </div>
    </div>
  );
};
