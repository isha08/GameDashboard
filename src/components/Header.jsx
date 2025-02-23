import React from "react";
import { FaWallet } from "react-icons/fa";
import "../styles/Header.css";

const Header = ({ user }) => {
  return (
    <header className="header-wrapper">
      {/* User Info Section */}
      <div className="user-info">
        <div className="user-avatar">
          <span>🐱</span> {/* User Avatar (Cat emoji for example) */}
        </div>
        <span className="user-id">{user.id}</span>
      </div>

      {/* Wallet Info Section */}
      <div className="wallet-info">
        <FaWallet size={24} />
        <span className="wallet-balance">{user.coins}</span>
        <button className="add-button">+</button>
      </div>
    </header>
  );
};

export default Header;
