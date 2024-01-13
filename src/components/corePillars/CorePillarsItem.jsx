import PropTypes from "prop-types";

const CorePillarsItem = ({ image, title }) => {
  return (
    <div className="corePillarsItem">
      <div className="corePillarsItem_image">
        <img src={image} alt={title} />
        <div className="title">{title}</div>
      </div>
    </div>
  );
};
export default CorePillarsItem;
CorePillarsItem.propTypes = {
  image: PropTypes.any,
  title: PropTypes.string,
};
