import PropTypes from "prop-types";
import "./fullWidthImage.scss";

const FullWidthImage = ({ image }) => {
  return (
    <div className="fullWidthImage">
      <div className="fullWidthImage_wrapper">
        <img src={image} alt="fullImage" />
      </div>
    </div>
  );
};
export default FullWidthImage;

FullWidthImage.propTypes = {
  image: PropTypes.any,
};
