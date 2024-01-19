import { useEffect, useState } from "react";
import "./news.scss";
import axios from "axios";
import NewsCardItem from "../../components/newsCard/NewsCardItem";

const News = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios
      .get("https://siddhguru.pvotdesigns.xyz//wp-json/wp/v2/news/?_embed")
      .then((response) => {
        setNews(response.data);
        console.log(response.data);
      })
      .catch((error) => console.error(error));
  }, []);
  return (
    <div className="news">
      <div className="news_wrapper">
        
        <div className="news_wrapper_cardList">
          {news?.map((item) => (
            <NewsCardItem
              key={item.id}
              image={
                item._embedded["wp:featuredmedia"] &&
                item._embedded["wp:featuredmedia"][0].media_details.sizes.full
                  .source_url
              }
              title={item.title.rendered}
              content={item.content.rendered}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default News;
