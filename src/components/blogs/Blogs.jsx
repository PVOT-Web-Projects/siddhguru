import "./blogs.scss";
// import image1 from "../../images/featuredBlog1.png";
// import image2 from "../../images/featuredBlog2.png";
// import image3 from "../../images/featuredBlog3.png";
// import image4 from "../../images/featuredBlog1.png";
// import image5 from "../../images/featuredBlog1.png";
// import image6 from "../../images/featuredBlog2.png";
// import image7 from "../../images/featuredBlog3.png";
// import image8 from "../../images/featuredBlog1.png";
import BlogItem from "./blogItem";
import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../spinner/Spinner";
import { useParams } from "react-router-dom";

// const BlogsData = [
//   {
//     image: image1,
//     title: "Lorem Ipsum is simply dummy text ",
//     description:
//       "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
//     url: "#",
//   },
//   {
//     image: image2,
//     title: "Lorem Ipsum is simply dummy text ",
//     description:
//       "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
//     url: "#",
//   },
//   {
//     image: image3,
//     title: "Lorem Ipsum is simply dummy text ",
//     description:
//       "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
//     url: "#",
//   },
//   {
//     image: image4,
//     title: "Lorem Ipsum is simply dummy text ",
//     description:
//       "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
//     url: "#",
//   },
//   {
//     image: image5,
//     title: "Lorem Ipsum is simply dummy text ",
//     description:
//       "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
//     url: "#",
//   },
//   {
//     image: image6,
//     title: "Lorem Ipsum is simply dummy text ",
//     description:
//       "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
//     url: "#",
//   },
//   {
//     image: image7,
//     title: "Lorem Ipsum is simply dummy text ",
//     description:
//       "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
//     url: "#",
//   },
//   {
//     image: image8,
//     title: "Lorem Ipsum is simply dummy text ",
//     description:
//       "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
//     url: "#",
//   },
// ];

const cardVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0 },
};

const Blogs = () => {
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
  const name = useParams();
  console.log(name);
  return (
    <div className="blogs">
      {loading ? (
        <Spinner />
      ) : (
        <div className="blogsCardsOuter">
          {blogs?.map((item, index) => (
            <BlogItem
              key={index}
              image={
                item._embedded["wp:featuredmedia"] &&
                item._embedded["wp:featuredmedia"][0].media_details.sizes.full
                  .source_url
              }
              title={item.title.rendered}
              // description={item.excerpt.rendered}
              name={item.slug}
              cardVariants={cardVariants}
            />
          ))}
        </div>
      )}
    </div>
  );
};
export default Blogs;
