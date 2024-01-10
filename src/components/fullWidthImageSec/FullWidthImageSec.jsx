import PropTypes from "prop-types";
import "./fullWidthImageSec.scss";

const FullWidthImageSec = ({ imageUrl, text }) => {
  return (
    <div className="image-textoverlay_main">
      <div className="image-with-text-overlay">
        <img src={imageUrl} alt="Overlay" className="overlay-image" />
        <div className="text-overlay">{text}</div>
      </div>
    </div>
  );
};

FullWidthImageSec.propTypes = {
  imageUrl: PropTypes.string,
  text: PropTypes.string,
};

export default FullWidthImageSec;
