import PropTypes from "prop-types";
import "./fullWidthImageSec.scss";

const FullWidthImageSec = ({ imageUrl, text, id }) => {
  return (
    <div className="image-textoverlay_main" id={id && id}>
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
  id: PropTypes.string,
};

export default FullWidthImageSec;
