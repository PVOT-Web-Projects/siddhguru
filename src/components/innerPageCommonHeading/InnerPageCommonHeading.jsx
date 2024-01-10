import PropTypes from "prop-types";
import "./innerPageCommonHeading.scss";

const InnerPageCommonHeading = ({ heading }) => {
  return (
    <div className="innerPageCommonHeading">
      <div className="innerPageCommonHeading_wrapper">
        <h2>{heading}</h2>
      </div>
    </div>
  );
};
export default InnerPageCommonHeading;

InnerPageCommonHeading.propTypes = {
  heading: PropTypes.string,
};
