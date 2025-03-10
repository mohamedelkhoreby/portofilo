import React from "react";
import batwansbek from "../../Assets/batwansbek.png";
import photo2 from "../../Assets/photo2.png";
import photo3 from "../../Assets/photo3.png";
import { Form } from "./Form";

const AboutMe = () => {
  return (
    <div>
      <div className="about-me">
        <h2>About Me</h2>
        <p>
          I'm Mohamed Gamal, born in Mansoura in 2000. I graduated from ACU in
          2022
          <br /> with a Bachelor's degree in Computer Science and later
          completed a Frontend Diploma from Route.
          <br /> To sharpen my skills, I worked at two reputable companies: Al
          Alamy Al Hura in Mansoura and Beetleware in Maadi,
          <br /> where I contributed to the design and development of several
          applications, including Thimar.
          <br /> I've also had the pleasure of collaborating with talented
          professionals to create digital products for both businesses and
          consumers,
          <br /> such as MedAssist, Fashion Club, and Fresh Cart. Beyond app
          development, I have a keen interest in Artificial Intelligence (AI),
          where I implemented Glaucoma Detection and Classification using optic
          nerve data and worked on identifying myocardial infarction
          complications. Outside of tech, I'm passionate about photography,
          writing, history, and mythology. I'm also a car enthusiast and enjoy
          following motorsports. I'm currently seeking a challenging opportunity
          to leverage my skills and experience in a new or existing project. I'm
          excited to continue learning and growing in the IT field, and I'm
          eager to contribute to a team that values creativity, hard work, and
          innovation.
        </p>
      </div>
      <div className="portraits">
        <div className="portrait">
          <div className="Container-image">
            <img src={batwansbek} alt="photo" className="portrait-image" />
          </div>
        </div>
        <div className="portrait">
          <div className="Container-image">
            <img src={photo2} alt="photo" className="portrait-image" />
          </div>
        </div>
        <div className="portrait">
          <div className="Container-image">
            <img src={photo3} alt="photo" className="portrait-image" />
          </div>
        </div>
      </div>
      <div
        style={{
          textAlign: "center",
          color: "#ffffff",
          backgroundColor: "#001f3f",
          padding: "20px",
        }}
      >
        <h1>See More</h1>
      </div>
      <div className="form">
        <h1>Let's talk</h1>
      </div>
    <div>
      <Form/>
    </div>
    </div>
  );
};

export default AboutMe;
