import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "../../index.css"; // Import CSS for styling
import Logo from "../../assets/logo.png";
import LOGO2X from "../../assets/logo2x.png";
const Splash = () => {
  const navigate = useNavigate();
  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      navigate("/home"); // Call function to hide splash screen
    }, 3000); // Show splash for 3 seconds

    return () => clearTimeout(timer); // Cleanup timeout
  }, [navigate]);

  return (
    <div className="splash-screen">
      <picture>
        <source srcSet={LOGO2X} media="(min-width: 768px)" />
        <img src={Logo} alt="Logo" className="logo" />
      </picture>{" "}
    </div>
  );
};

export default Splash;
