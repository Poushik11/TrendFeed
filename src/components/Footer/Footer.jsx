import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer dark">
      <div className="container">
        <span className="text">
          &copy; 2023{" "}
          <a href="https://flowbite.com/" className="link">
            Flowbite™
          </a>
          . All Rights Reserved.
        </span>
        <ul className="menu">
          <li>
            <a href="#" className="link">
              About
            </a>
          </li>
          <li>
            <a href="#" className="link">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" className="link">
              Licensing
            </a>
          </li>
          <li>
            <a href="#" className="link">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
