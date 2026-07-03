import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css"; // optional: for custom styling

function Home() {
  const navigate = useNavigate();

  const handleLogout = () => {
    alert("Logged out!");
    navigate("/"); // navigate back to login
  };

  return (
    <div className="home-container">
      <div className="home-box">
        <h1 className="home-title">Welcome to the Decision Making App!</h1>
        <p className="home-message">You have successfully logged in.</p>
        <button onClick={handleLogout} className="logout-button">
          Logout
        </button>
      </div>
    </div>
  );
}

export default Home;
