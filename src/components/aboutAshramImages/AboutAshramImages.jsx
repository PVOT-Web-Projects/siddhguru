import PropTypes from "prop-types";
import "./aboutAshramImages.scss";

const AboutAshramImages = ({
  imageUrl1,
  imageUrl1_mobile,
  imageUrl2,
  imageUrl3,
}) => {
  return (
    <div className="about_ashram_images">
      <div className="about_ashram_image1">
        <img src={imageUrl1} className="images desktop" />
        <img src={imageUrl1_mobile} className="images_mobile" />
      </div>
      <div className="about_ashram_fleximages">
        <div className="about_ashram_image2">
          <img src={imageUrl2} className="images" />
        </div>
        <div className="about_ashram_image3">
          <img src={imageUrl3} className="images" />
        </div>
      </div>
    </div>
  );
};

AboutAshramImages.propTypes = {
  imageUrl1: PropTypes.string,
  imageUrl2: PropTypes.string,
  imageUrl3: PropTypes.string,
  imageUrl1_mobile: PropTypes.string,
};

export default AboutAshramImages;
