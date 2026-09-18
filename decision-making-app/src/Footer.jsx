import React from "react";
import "./Footer.css"; // Optional CSS file

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Decision Making App. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
