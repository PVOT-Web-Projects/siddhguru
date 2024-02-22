import "./headingCotnentWithImages.scss";
import PropTypes from "prop-types";

const HeadingContentWithImages = ({
  heading,
  content,
  image1,
  image2,
  image3,
  image4,
}) => {
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
          {image3 && <img src={image3} alt={heading} />}
          {image4 && <img src={image4} alt={heading} />}
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
  image3: PropTypes.any,
  image4: PropTypes.any,
};
