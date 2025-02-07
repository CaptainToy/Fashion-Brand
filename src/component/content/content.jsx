import React from "react";
import "./content.css";

const Content = () => {
  return (
    <div className="content">
      <h1 className="title">
        FRONTEND <span className="highlight">ENGINEER</span>
      </h1>
      <p className="description">
        Passionate about creating intuitive and engaging user experiences.
        Specialize in transforming ideas into beautifully crafted products.
      </p>
      <div className="stats">
        <div className="stat">
          <h2>+8</h2>
          <p>Years of Experience</p>
        </div>
        <div className="stat">
          <h2>+70</h2>
          <p>Projects Completed</p>
        </div>
        <div className="stat">
          <h2>+20</h2>
          <p>Worldwide Clients</p>
        </div>
      </div>
      <div className="cards">
        <div className="card orange">
          <div className="icon-bi"><i class="bi bi-bookmark-check"></i></div>
          <p>Dynamic Animation, Responsive Design</p>
        </div>
        <div className="card green">
        <div className="icon-bi"><i class="bi bi-arrow-left-right"></i></div>
          <p>CSS Framworks, Figma, Redux, ReactJS</p>
        </div>
      </div>
    </div>
  );
};

export default Content;
