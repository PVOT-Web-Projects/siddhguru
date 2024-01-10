import PropTypes from "prop-types";
import "./innerPageCommonText.scss";

const InnerPageCommonText = ({ text }) => {
  return (
    <div className="innerPageCommonText">
      <div className="innerPageCommonText_wrapper">
        <p>{text}</p>
      </div>
    </div>
  );
};
export default InnerPageCommonText;

InnerPageCommonText.propTypes = {
  text: PropTypes.string,
};
