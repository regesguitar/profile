import React from "react";
import "../styles/home.css";

interface Props {}

const Home: React.FC<Props> = () => {
  return (
    <div>
      <h1>Welcome to my personal webpage</h1>
      <p>
        This is the homepage of my personal website built with React and
        TypeScript
      </p>
    </div>
  );
};  

export default Home;
