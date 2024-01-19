import { useEffect, useState } from "react";
import "./news.scss";
import axios from "axios";
import NewsCardItem from "../../components/newsCard/NewsCardItem";

const News = () => {
  const [news, setNews] = useState([]);
  const [categoryValue, setCategoryValue] = useState("national");

  useEffect(() => {
    axios
      .get("https://siddhguru.pvotdesigns.xyz//wp-json/wp/v2/news/?_embed")
      .then((response) => {
        setNews(response.data);
        console.log(response.data);
      })
      .catch((error) => console.error(error));
  }, []);

  const handleCategoryChange = (e) => {
    setCategoryValue(e.target.value);
  };
  console.log("category", categoryValue);

  return (
    <div className="news">
      <div className="news_wrapper">
        <div className="news_wrapper_headingSec">
          <div className="heading">
            <h3>News</h3>
          </div>
          <div className="categories">
            <label className="category">
              <input
                name="radio"
                type="radio"
                value={"national"}
                checked={categoryValue === "national"}
                onChange={handleCategoryChange}
              />
              <span>National</span>
            </label>
            <label className="category">
              <input
                name="radio"
                type="radio"
                value={"international"}
                onChange={handleCategoryChange}
              />
              <span>International</span>
            </label>
          </div>
        </div>
        <div className="news_wrapper_cardList">
          {news?.map((item) => {
            console.log(item._embedded["wp:term"][0][0].slug);
            return (
              <>
                {item._embedded["wp:term"][0][0].slug === categoryValue && (
                  <NewsCardItem
                    key={item.id}
                    image={
                      item._embedded["wp:featuredmedia"] &&
                      item._embedded["wp:featuredmedia"][0].media_details.sizes
                        .full.source_url
                    }
                    title={item.title.rendered}
                    content={item.content.rendered}
                  />
                )}
                
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default News;
