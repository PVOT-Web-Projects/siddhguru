import "./headingCotnentWithImages.scss";
import PropTypes from "prop-types";

const HeadingContentWithImages = ({ heading, content, image1, image2 }) => {
  return (
    <div className="headingContentWithImagesItem">
      <div className="headingContentWithImagesItem_wrapper">
        <div className="heading">
          <h3>{heading}</h3>
        </div>
        <div className="content">
          <p>{content}</p>
        </div>
        <div className="images">
          <img src={image1} alt={heading} />
          <img src={image2} alt={heading} />
        </div>
      </div>
    </div>
  );
};
export default HeadingContentWithImages;

HeadingContentWithImages.propTypes = {
  heading: PropTypes.string,
  content: PropTypes.string,
  image1: PropTypes.any,
  image2: PropTypes.any,
};
