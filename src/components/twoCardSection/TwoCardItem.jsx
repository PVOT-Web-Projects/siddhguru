import PropTypes from "prop-types";

const TwoCardItem = ({ image, content, imageText }) => {
  return (
    <div className="twoCardItem">
      <div className="twoCardItem_image">
        <img src={image} alt={imageText} />
        <div className="imageText">{imageText}</div>
      </div>
      <div className="twoCardItem_content">
        <p>{content}</p>
      </div>
    </div>
  );
};
export default TwoCardItem;

TwoCardItem.propTypes = {
  image: PropTypes.any,
  content: PropTypes.string,
  imageText: PropTypes.string,
};
