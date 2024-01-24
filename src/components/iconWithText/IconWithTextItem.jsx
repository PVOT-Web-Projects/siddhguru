import PropTypes from "prop-types";

const IconWithTextItem = ({ image, text }) => {
  return (
    <div className="iconWithText">
      <div className="iconWithText_left">
        <img src={image} alt={text} />
      </div>
      <div className="iconWithText_right">
        <p>{text}</p>
      </div>
    </div>
  );
};
export default IconWithTextItem;

IconWithTextItem.propTypes = {
  image: PropTypes.any,
  text: PropTypes.string,
};
