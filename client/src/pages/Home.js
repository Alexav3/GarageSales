import React from "react";
import HotSaleImg from "../assets/HotSale.png";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1 className="home-title">Welcome to Garage Hot Sales!</h1>
        <img src={HotSaleImg} alt="Hot Sale" className="hot-sale-image" />
      </header>

      <main className="home-body">
        <p className="home-description">
          Find the hottest deals on local garage sales near you.
        </p>
      </main>
    </div>
  );
}

export default Home;
