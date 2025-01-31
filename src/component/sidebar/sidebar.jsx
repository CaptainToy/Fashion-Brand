import React from "react";
import "./sidebar.css";
import ceo from "../../assets/ceo.jpg"

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="profile-card">
        <img 
          src={ceo} 
          alt="Abdu" 
          className="profile-img" 
        />
      </div>
      <h2 className="name">Abdulsalam Korede</h2>
      <p className="bio">
        A Software Engineer who has developed countless innovative solutions.
      </p>
      <div className="social-icons">
        <i className="bi bi-whatsapp"></i>
        <i className="bi bi-twitter"></i>
        <i className="bi bi-instagram"></i>
        <i className="bi bi-tiktok"></i>
      </div>
    </div>
  );
};

export default Sidebar;
