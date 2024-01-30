import PropTypes from "prop-types";

const BlogSingleItem = ({ image, title }) => {
  return (
    <div className="blogSingle">
      <div className="blogSingleBanner">
        <div className="blogSingleBanner_wrapper">
          <img src={image} alt={title} />
        </div>
      </div>
    </div>
  );
};
export default BlogSingleItem;

BlogSingleItem.propTypes = {
  image: PropTypes.any,
  title: PropTypes.string,
};
