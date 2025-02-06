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
       <a href="https://wa.me/qr/VJONEQ5ZXJP7F1 "> <i className="bi bi-whatsapp"></i></a>
       <a href="https://github.com/CaptainToy"> <i className="bi bi-github"></i></a>
       <a href="https://www.instagram.com/oluwakorede_abdulmalik?igsh=MWdhNXBzdWVsYm1qOQ=="> <i className="bi bi-instagram"></i></a>
       <a href="https://www.linkedin.com/in/abdulsalam-olukorede-b25831269?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><i className="bi bi-linkedin"></i></a>
      </div>
    </div>
  );
};

export default Sidebar;
