import { useEffect, useState } from "react";
import BlogSingleItem from "../../../components/blogs/blogSingleItem/BlogSingleItem";
import axios from "axios";
import Spinner from "../../../components/spinner/Spinner";
import { useLocation, useParams } from "react-router-dom";

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
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          {/* <h1>Hello BLog</h1> */}
          {blogs?.filter((item) => {
            return(
              `/${item.slug}` === pathname
              )
              // console.log(`/${item.slug}`);
            })
            .map((item, index) => (
              <BlogSingleItem
                key={index}
                image={
                  item._embedded["wp:featuredmedia"] &&
                  item._embedded["wp:featuredmedia"][0].media_details.sizes.full
                    .source_url
                }
                title={item.title.rendered}
                // description={item.excerpt.rendered}
                // name={item.slug}
                //   cardVariants={cardVariants}
              />
            ))}
        </>
      )}
    </>
  );
};
export default BlogSingle;
