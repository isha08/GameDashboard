import React from "react";
import "../styles/BattleArena.css";

const BattleArena = ({ battleArena, bgImage }) => {
  return (
    <section className="battle-arena-wrapper" style={{ backgroundImage: `url(${bgImage})` }}>
      <div>
        <p>{battleArena.stakes} Worth of Stakes</p>
        <p>{battleArena.upcomingMatches} Upcoming Matches</p>
        <p>{battleArena.totalMatchesPlayed} Total Matches Played</p>
      </div>
      <button className="arena-button">View Matches</button>
    </section>
  );
};

export default BattleArena;
