import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./featuredBlogs.scss";
import img1 from "../../images/featuredBlog1.png";
import img2 from "../../images/featuredBlog2.png";
import img3 from "../../images/featuredBlog3.png";
import img4 from "../../images/featuredBlog1.png";
import BlogItem from "../blogs/blogItem";
import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../spinner/Spinner";

const BlogsData = [
  {
    image: img1,
    title: "Reconnect with yourself through Siddhasana",
    // description:
    //   "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    url: "#",
  },
  {
    image: img2,
    title: " Pran Mudra is your ‘absolutely free’ immunity booster",
    // description:
    //   "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    url: "#",
  },
  {
    image: img3,
    title: " 5 Benefits of walking meditation",
    // description:
    //   "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    url: "#",
  },
  {
    image: img4,
    title: " How to activate the body's Chakras?",
    // description:
    //   "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    url: "#",
  },
];

const FeaturedBlog = () => {
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
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  const cardVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: -110 },
  };
  const textVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: -160 },
  };
  return (
    <div ref={ref} className="fratured_blog">
      <div className="blogsOuter">
        <motion.div
          variants={textVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ duration: 0.9 }}
          className="blogsText"
        >
          Blogs
        </motion.div>
        {loading ? (
          <Spinner />
        ) : (
          <div className="blogsCardsOuter">
            {blogs?.map(
              (item, index) =>
                index < 4 && (
                  <BlogItem
                    key={index}
                    image={
                      item._embedded["wp:featuredmedia"] &&
                      item._embedded["wp:featuredmedia"][0].media_details.sizes
                        .full.source_url
                    }
                    title={item.title.rendered}
                    // description={item.excerpt.rendered}
                    cardVariants={cardVariants}
                    name={item.slug}
                  />
                )
            )}
          </div>
        )}
      </div>
    </div>
  );
};
export default FeaturedBlog;
