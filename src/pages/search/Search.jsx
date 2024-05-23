import React, { useEffect, useState } from "react";
import styles from "./Search.module.css";
import { useLocation } from "react-router-dom";
import NewsCard from "../../components/newsCard/NewsCard";

const Search = () => {
  const [news, setNews] = useState([]);
  const { state } = useLocation();

  const apiKey = process.env.REACT_APP_API_KEY;

  const query = state ? state : "";
  const url = `https://newsapi.org/v2/top-headlines?q=${query}&apiKey=${apiKey}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setNews(data.articles))
      .catch((error) => console.log(error));
  }, [url]);
  console.log(news);

  return (
    <div className={styles.searchPage}>
      <h1>
        News About: <span>{query.toUpperCase()}</span>
      </h1>
      <div className={styles.searchNews}>
        {news.length === 0 ? (
          <h1>The searched word did not match</h1>
        ) : (
          news.map((item, index) => <NewsCard key={index} {...item} />)
        )}
      </div>
    </div>
  );
};

export default Search;
