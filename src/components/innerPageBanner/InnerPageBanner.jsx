import { useContext } from "react";
import "./innerPageBanner.scss";
import LanguageContext from "../language/Language";
import PropTypes from "prop-types"

const InnerPageBanner = ({
  image,
  text,
  color,
  mobileImage,
  bigText,
  bigText2,
  overlay,
  hindiText,
  hindiBigText,
  hindiBigText2,
}) => {
  const { language } = useContext(LanguageContext);

  return (
    <div className="innerPageBanner">
      <div className={`innerPageBanner_wrapper ${overlay ? "overlay" : ""}`}>
        <img src={image} alt="bannerImage" className="deskImage" />
        <img src={mobileImage} alt="bannerImage" className="mobileImage" />
        {(text || hindiText) && (
          <div className="bannerText" style={{ color: color }}>
            {language === "en" ? text : hindiText}
          </div>
        )}
        {(bigText || bigText2 || hindiBigText || hindiBigText2) && (
          <div className="bannerBigText" style={{ color: color }}>
            {language === "en" ? bigText : hindiBigText}
            <br />
            {(bigText2 || hindiBigText2) && language === "en"
              ? bigText2
              : hindiBigText2}
          </div>
        )}
      </div>
    </div>
  );
};
export default InnerPageBanner;

InnerPageBanner.propTypes = {
  image : PropTypes.string,
  text : PropTypes.string,
  color : PropTypes.string,
  mobileImage : PropTypes.string,
  bigText : PropTypes.string,
  bigText2 : PropTypes.string,
  overlay : PropTypes.bool,
  hindiText : PropTypes.string,
  hindiBigText : PropTypes.string,
  hindiBigText2 : PropTypes.string,
}