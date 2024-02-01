import { useEffect, useState } from "react";
import BlogSingleItem from "../../../components/blogs/blogSingleItem/BlogSingleItem";
import axios from "axios";
import Spinner from "../../../components/spinner/Spinner";
import { useParams } from "react-router-dom";
import "./blogSingle.scss";

const BlogSingle = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios
      .get("https://siddhguru.pvotdesigns.xyz//wp-json/wp/v2/blogs/?_embed")
      .then((response) => {
        setBlogs(response.data);
        console.log(response.data);
        setLoading(false);
      })
      .catch((error) => console.error(error));
  }, []);
  const { name } = useParams();
  console.log(name);
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          {blogs
            ?.filter((item) => item.slug === name)
            .map((item, index) => {
              console.log(item.acf);
              return (
                <BlogSingleItem
                  key={index}
                  // image={
                  //   item._embedded["wp:featuredmedia"] &&
                  //   item._embedded["wp:featuredmedia"][0].media_details.sizes.full
                  //     .source_url
                  // }
                  image={item.acf.banner_image}
                  title={item.title.rendered}
                  // description={item.excerpt.rendered}
                  // name={item.slug}
                  //   cardVariants={cardVariants}
                />
              );
            })}
        </>
      )}
    </>
  );
};
export default BlogSingle;
