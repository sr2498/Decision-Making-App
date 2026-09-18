import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Both fields are required.");
      return;
    }
    
    console.log("Logged in with:", { email, password });
    setError("");
    alert("Login successful!");

    // Navigate to /home
    navigate("/home");
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-heading">Decision Making App</h2>
        <h3 className="login-title">Login</h3>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              className="form-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
            />
          </div>
          {error && <p className="error-text">{error}</p>}
          <button type="submit" className="login-button">
            Login
          </button>
          <div className="login-links">
            <a href="/signup">Don't have an account?</a>
            <a href="/forget-password">Forget Password</a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
