import PropTypes from "prop-types";
import "./leftRightImageContent.scss";

const LeftRIghtImageContent = ({
  img,
  title,
  text,
  descriptiontitle1,
  descriptiontext1,
  descriptiontitle2,
  descriptiontext2,
  conclution,
}) => {
  return (
    <div className="leftRightImageContent_wrapper">
      <div className="leftRightImageContent_wrapper_image">
        <img src={img} className="thesaintimg" />
      </div>
      <div className="leftRightImageContent_wrapper_text">
        <div className="title">{title}</div>
        <div className="text">{text}</div>
        <div className="mantra">
          <div className="descriptiontitle">
            <span className="descriptiontitle1">{descriptiontitle1}</span>
            <span className="descriptiontext1">{descriptiontext1}</span>
          </div>
          <div className="descriptiontitle">
            <span className="descriptiontitle2">{descriptiontitle2}</span>
            <span className="descriptiontext2">{descriptiontext2}</span>
          </div>
        </div>
        <div className="conclution">{conclution}</div>
      </div>
    </div>
  );
};

export default LeftRIghtImageContent;
LeftRIghtImageContent.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  descriptiontitle1: PropTypes.string,
  descriptiontext1: PropTypes.string,
  descriptiontitle2: PropTypes.string,
  descriptiontext2: PropTypes.string,
  conclution: PropTypes.string,
};
