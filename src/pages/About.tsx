import React from "react";
import "../styles/about.css";

interface Props {}

const About: React.FC<Props> = () => {
  return (
    <div className="about-container">
      <h1>About Me</h1>
      <p>
        I am a developer who enjoys building web applications using React and
        TypeScript. This is my personal website and you can find some
        information about me and my projects here.
      </p>
      <button className="about-button">Learn More</button>
    </div>
  );
};

export default About;
