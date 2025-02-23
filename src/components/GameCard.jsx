import React from "react";
import { FaCoins } from "react-icons/fa";
import "../styles/GameCard.css";

const GameCard = ({ title, coinsRequired, liveUsers, image }) => {
  return (
    <div
      className="game-card-wrapper"
      style={{ backgroundImage: `url(${image})` }}
      onClick={() => alert("Game starting soon!")}
    >
      <div className="game-rewards">
        <span>
          <FaCoins /> {coinsRequired}
        </span>
        <span>{liveUsers} Users</span>
      </div>
    </div>
  );
};

export default GameCard;
