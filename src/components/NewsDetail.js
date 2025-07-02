// components/NewsDetail.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const NewsDetail = () => {
  const { id } = useParams();
  const [news, setNews] = useState(null);

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        const res = await axios.get(
          `https://${process.env.REACT_APP_MICROCMS_SERVICE_DOMAIN}.microcms.io/api/v1/hell/${id}`,
          {
            headers: {
              "X-MICROCMS-API-KEY": process.env.REACT_APP_MICROCMS_API_KEY,
            },
          }
        );
        setNews(res.data);
      } catch (err) {
        console.error("取得に失敗しました:", err);
      }
    };

    fetchDetail();
  }, [id]);

  if (!news) return <div>読み込み中...</div>;

  return (
    <div>
      <h2>{news.title}</h2>
      <p>{new Date(news.publishedAt).toLocaleDateString()}</p>
      <div dangerouslySetInnerHTML={{ __html: news.content }} />
    </div>
  );
};

export default NewsDetail;
