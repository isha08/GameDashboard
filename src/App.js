import React from "react";
import Header from "./components/Header";
import GameCard from "./components/GameCard";
import BattleArena from "./components/BattleArena";
import Footer from "./components/Footer";
import "./App.css";

// Assets
import GunBottle from "./assests/Guns_Bottles.png";
import knife from "./assests/knife-hit.jpeg";
import panda from "./assests/run-panda-run.jpeg";
import BattleArenaImg from "./assests/battle-arena.jpeg";
import FruitNinja from "./assests/fruit-ninja.jpeg";
import dunkShot from "./assests/dunk-shot.jpeg";

const data = {
  user: {
    id: "MOB99100N",
    coins: 10,
  },
  featuredGame: {
    title: "GUNS & BOTTLES",
    image: GunBottle,
    weeklyWinnings: 400000,
    liveUsers: 55000,
    playNow: true,
  },
  games: [
    {
      title: "MONSTERS-UP",
      image: "https://odencat.com/bakemono/img/WebsiteBanner@en_sp.jpg",
      coinsRequired: 300000,
      liveUsers: 32000,
    },
    {
      title: "KNIFE HIT",
      image: knife,
      coinsRequired: 275000,
      liveUsers: 32000,
    },
    {
      title: "RUN PANDA RUN",
      image: panda,
      coinsRequired: 275000,
      liveUsers: 32000,
    },
    {
      title: "SEA SHIP RACING",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrIB373Ad6AMYfr38-Q3C8vAFCbHTQmW-5LA&s",
      coinsRequired: 275000,
      liveUsers: 32000,
    },
    {
      title: "FRUIT NINJA",
      image: FruitNinja,
      coinsRequired: 275000,
      liveUsers: 32000,
    },
    {
      title: "DUNK SHOT",
      image: dunkShot,
      coinsRequired: 275000,
      liveUsers: 32000,
    },
  ],
  battleArena: {
    image: BattleArenaImg,
    stakes: 900000,
    upcomingMatches: 45,
    totalMatchesPlayed: 510,
  },
};

const App = () => {
  return (
    <div className="content-wrapper">
      <Header user={data.user} />

      {/* Featured Game Section */}
      <section
        className="featured-game-section"
        style={{ backgroundImage: `url(${GunBottle})` }}
        onClick={() => alert("Game starting soon!")}
      >
        <div className="stats">
          <span>Weekly Winnings: {data.featuredGame.weeklyWinnings}</span>
          <span>Live Users: {data.featuredGame.liveUsers}</span>
        </div>
        {data.featuredGame.playNow && <button>Play Now</button>}
      </section>

      {/* Game Grid Section */}
      <section className="game-grid">
        {data.games.map((game, index) => (
          <GameCard key={index} {...game} />
        ))}
      </section>

      <BattleArena battleArena={data.battleArena} bgImage={BattleArenaImg} onClick={() => alert("Game starting soon!")} />
      <Footer />
    </div>
  );
};

export default App;
