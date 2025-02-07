import React from "react";
import Layout from "../components/layout/Layout";
import { Link } from "react-router-dom";
import "../styles/LayoutStyle.css";

const Home = () => {
  return (
    <Layout>
      <div className="header-container">
        <div className="font-container">
          <h1>Webb Café</h1>
          <p>Your Favorite Dishes, Just a Click Away.</p>
          <Link to="/menu">
            <button className="order-button">Order Now</button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
