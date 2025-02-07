import React from "react";
import Layout from "../components/layout/Layout";
import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import "../styles/PageNotFound.css";

const PageNotFound = () => {
  return (
    <Layout>
      <div className="pagenotfound-container">
        <h1 className="error-code">404</h1>
        <h2 className="subtitle">Uh-oh! Page Not Found</h2>
        <p className="description">
          It seems like you're lost in space. Let’s get you back on track!
        </p>
        <Button variant="contained" className="back-home-button">
          <NavLink to="/" className="home-link">Go Back to Home</NavLink>
        </Button>
      </div>
    </Layout>
  );
};

export default PageNotFound;