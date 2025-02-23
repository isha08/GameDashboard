import React, { useState } from "react";
import { FaHome, FaGamepad, FaBell, FaUser } from "react-icons/fa";
import "../styles/Footer.css";

const Footer = () => {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <footer className="footer-wrapper">
      <div
        className={`icon-wrapper ${activeTab === "home" ? "active" : ""}`}
        onClick={() => setActiveTab("home")}
      >
        <FaHome />
      </div>
      <div
        className={`icon-wrapper ${activeTab === "games" ? "active" : ""}`}
        onClick={() => setActiveTab("games")}
      >
        <FaGamepad />
      </div>
      <div
        className={`icon-wrapper ${activeTab === "notifications" ? "active" : ""}`}
        onClick={() => setActiveTab("notifications")}
      >
        <FaBell />
      </div>
      <div
        className={`icon-wrapper ${activeTab === "profile" ? "active" : ""}`}
        onClick={() => setActiveTab("profile")}
      >
        <FaUser />
      </div>
    </footer>
  );
};

export default Footer;
