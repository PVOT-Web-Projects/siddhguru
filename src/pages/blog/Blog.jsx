
import Blogs from "../../components/blogs/Blogs";
import InnerPageCommonHeading from "../../components/innerPageCommonHeading/InnerPageCommonHeading";
import InnerPageCommonText from "../../components/innerPageCommonText/InnerPageCommonText";
import "./blog.scss";

const Blog = () => {
  return (
    <div className="blog">
      <InnerPageCommonHeading heading={"Blog"} />
      <InnerPageCommonText
        text1={
          "Dive into some insightful reading here; you'll find articles that share the wisdom of Siddhguru, covering topics that connect the spiritual stuff with everyday life. It is a digital library where each article is a nugget of knowledge, guiding you towards a more meaningful and purposeful life. Whether you're just starting on your spiritual journey or you're already deep into it, these blogs are your friendly space to explore Siddhguru's teachings."
        }
      />
      <Blogs />
    </div>
  );
};

export default Blog;
