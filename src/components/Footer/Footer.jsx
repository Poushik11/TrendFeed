import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer dark">
      <div className="container">
        <span className="text">
          &copy; 2023{" "}
          <a href="https://poushiksweb.netlify.app/" className="link">
            PSY™
          </a>
          . All Rights Reserved.
        </span>
        <ul className="menu">
          <li>
            <a href="https://poushiksweb.netlify.app/" className="link">
              About
            </a>
          </li>
          <li>
            <a href="https://poushiksweb.netlify.app/" className="link">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="https://poushiksweb.netlify.app/" className="link">
              Licensing
            </a>
          </li>
          <li>
            <a href="https://poushiksweb.netlify.app/" className="link">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
