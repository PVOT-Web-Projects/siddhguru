import PropTypes from "prop-types";
import brownImage from "../../images/brownHeadingBorderTop.svg";
import greenImage from "../../images/greenHeadingBorderTop.svg";
import orangeImage from "../../images/orangeHeadingBorderTop.svg";
import "./innerPageCommonHeading2.scss";

const InnerPageCommonHeading2 = ({ heading, textColor }) => {
  return (
    <div className="innerPageCommonHeading2">
      <div className="innerPageCommonHeading2_wrapper">
        <div className="top_image">
          {textColor === "#966940" && <img src={brownImage} alt="brownImage" />}
          {textColor === "#1D5A3F" && <img src={greenImage} alt="greenImage" />}
          {textColor === "#FF9900" && (
            <img src={orangeImage} alt="orangeImage" />
          )}
        </div>
        <h2 style={{ color: textColor }}>{heading}</h2>
        <div className="bottom_image">
          <img src={brownImage} alt="brownImage" />
          <img src={greenImage} alt="brownImage" />
          <img src={orangeImage} alt="brownImage" />
        </div>
      </div>
    </div>
  );
};
export default InnerPageCommonHeading2;

InnerPageCommonHeading2.propTypes = {
  heading: PropTypes.string,
  textColor: PropTypes.string,
};
