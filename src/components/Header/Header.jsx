import React, { useState } from "react";
import styles from "./Header.module.css";
// import Navbar from "../Navbar/Navbar";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/search", { state: search });
    setSearch("");
  };
  const goToHome = (e) => {
    e.preventDefault();
    navigate("/");
  };
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <h1 onClick={goToHome} className={styles.title}>
          TREND FEED
        </h1>
        <ul className={styles.topUl}>
          <li>
            <p>Categories</p>
            <ul className={styles.bottomUl}>
              <li
                onClick={() =>
                  navigate("/categories", { state: { category: "business" } })
                }
              >
                Business
              </li>
              <li
                onClick={() =>
                  navigate("/categories", { state: { category: "general" } })
                }
              >
                General
              </li>
              <li
                onClick={() =>
                  navigate("/categories", { state: { category: "health" } })
                }
              >
                Health
              </li>
              <li
                onClick={() =>
                  navigate("/categories", { state: { category: "science" } })
                }
              >
                Science
              </li>
              <li
                onClick={() =>
                  navigate("/categories", { state: { category: "sports" } })
                }
              >
                Sports
              </li>
            </ul>
          </li>
        </ul>
        <form onSubmit={handleSubmit}>
          <input
            className={styles.search}
            type="text"
            placeholder="Search for a news"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button type="submit">SEARCH</button>
        </form>
      </div>
      {/* <Navbar /> */}
    </div>
  );
};

export default Header;
