import "./blogs.scss";
import image1 from "../../images/featuredBlog1.png";
import image2 from "../../images/featuredBlog2.png";
import image3 from "../../images/featuredBlog3.png";
import image4 from "../../images/featuredBlog1.png";
import image5 from "../../images/featuredBlog1.png";
import image6 from "../../images/featuredBlog2.png";
import image7 from "../../images/featuredBlog3.png";
import image8 from "../../images/featuredBlog1.png";
import BlogItem from "./blogItem";

const BlogsData = [
  {
    image: image1,
    title: "Lorem Ipsum is simply dummy text ",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    url: "#",
  },
  {
    image: image2,
    title: "Lorem Ipsum is simply dummy text ",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    url: "#",
  },
  {
    image: image3,
    title: "Lorem Ipsum is simply dummy text ",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    url: "#",
  },
  {
    image: image4,
    title: "Lorem Ipsum is simply dummy text ",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    url: "#",
  },
  {
    image: image5,
    title: "Lorem Ipsum is simply dummy text ",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    url: "#",
  },
  {
    image: image6,
    title: "Lorem Ipsum is simply dummy text ",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    url: "#",
  },
  {
    image: image7,
    title: "Lorem Ipsum is simply dummy text ",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    url: "#",
  },
  {
    image: image8,
    title: "Lorem Ipsum is simply dummy text ",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    url: "#",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0 },
};

const Blogs = () => {
  return (
    <div className="blogs">
      <div className="blogsCardsOuter">
        {BlogsData.map((item, index) => (
          <BlogItem key={index} {...item} cardVariants={cardVariants} />
        ))}
      </div>
    </div>
  );
};
export default Blogs;
