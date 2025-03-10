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
              MedAssist is a mobile application that helps doctor to Get a
              differential diagnosis, containing diagnosis and investigation.
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
              FashionClub is a mobile application for renting clothes,
              facilitating hand-to-hand exchanges for a fee, making fashion more
              accessible and sustainable.
            </p>
          </div>
        </div>
        <div className="fashionclub-image-container">
          <img src={fashionclub} alt="fashionclub" className="project-image" />
        </div>
      </div>
      <div className="medassist">
        <div className="freshcart-image-container">
          <img src={FreshCart} alt="freshcart" className="project-image" />
        </div>
        <div className="medassist-info">
          <div className="freshcart-title">
            <h2>FreshCart</h2>
          </div>
          <div className="projects-description">
            <p>
              FreshCart is a web application for e-commerce, offering a seamless
              shopping experience with a wide range of products and secure
              transactions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
