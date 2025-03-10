import React from "react";
import medassist from "../../Assets/medassist.png";
import fashionclub from "../../Assets/fashionclub.png";
import FreshCart from "../../Assets/FreshCart.png";
export const Projects = () => {
  return (
    <div className="Projects">
      <div className="medassist">
        <div className="medassist-image-container">
          <img src={medassist} alt="MedAssist" className="project-image" />
        </div>
        <div className="medassist-info">
          <div className="medassist-title">
            <h2>MedAssist</h2>
          </div>
          <div className="projects-description">
            <p>
              MedAssist is a mobile application that helps patients to book
              appointments with doctors, order medicine, and get medical advice
              online.
            </p>
          </div>
        </div>
      </div>
      <div className="fashionclub">
        <div className="fashionclub-info">
          <div className="fashionclub-title">
            <h2>FashionClub</h2>
          </div>
          <div className="projects-description">
            <p>
              MedAssist is a mobile application that helps patients to book
              appointments with doctors, order medicine, and get medical advice
              online.
            </p>
          </div>
        </div>
        <div className="fashionclub-image-container">
          <img src={fashionclub} alt="fashionclub" className="project-image" />
        </div>
      </div>
      <div className="medassist">
        <div className="medassist-image-container">
          <img src={FreshCart} alt="MedAssist" className="project-image" />
        </div>
        <div className="medassist-info">
          <div className="medassist-title">
            <h2>FreshCart</h2>
          </div>
          <div className="projects-description">
            <p>
              MedAssist is a mobile application that helps patients to book
              appointments with doctors, order medicine, and get medical advice
              online.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
