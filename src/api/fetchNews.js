// api/fetchNews.js
import axios from "axios";

const fetchNews = async () => {
  const res = await axios.get(
    `https://${process.env.REACT_APP_MICROCMS_SERVICE_DOMAIN}.microcms.io/api/v1/hell`,
    {
      headers: {
        "X-MICROCMS-API-KEY": process.env.REACT_APP_MICROCMS_API_KEY,
      },
    }
  );
  return res.data.contents;
};

export default fetchNews;
