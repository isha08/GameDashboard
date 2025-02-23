import React, { useState } from "react";
import { FaWallet, FaBars } from "react-icons/fa";
import "../styles/Header.css";

const Header = ({ user }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header-wrapper">
      {/* Burger Menu */}
      <div className="burger-menu" onClick={toggleMenu}>
        <FaBars size={24} />
      </div>

      {/* Navigation Drawer (if needed) */}
      {isMenuOpen && (
        <nav className="nav-menu">
          <ul>
            <li>##</li>
          </ul>
        </nav>
      )}

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
