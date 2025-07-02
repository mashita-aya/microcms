// components/NewsList.js
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import fetchNews from "../api/fetchNews";

const NewsList = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const getNews = async () => {
      const data = await fetchNews();
      setNews(data);
    };
    getNews();
  }, []);


  return (
    <div>
      <h2>お知らせ一覧</h2>
      <ul>
        {news.map((item) => (
          <li key={item.id}>
            <Link to={`/hell/${item.id}`}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsList;
