import PropTypes from "prop-types";
import "./innerPageCommonText.scss";

const InnerPageCommonText = ({boldText, text1, text2, text3 }) => {
  return (
    <div className="innerPageCommonText">
      <div className="innerPageCommonText_wrapper">
        {text1 && <p>{boldText && <span>{boldText}</span>}{text1}</p>}
        {text2 && <p>{text2}</p>}
        {text3 && <p>{text3}</p>}
      </div>
    </div>
  );
};
export default InnerPageCommonText;

InnerPageCommonText.propTypes = {
  text1: PropTypes.string,
  text2: PropTypes.string,
  text3: PropTypes.string,
};
