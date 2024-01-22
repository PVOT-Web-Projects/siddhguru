import PropTypes from "prop-types";

const CorePillarsItem = ({ image, title, id }) => {
  return (
    <div className={`corePillarsItem image_${id}`}>
      <div className={`corePillarsItem_image`}>
        <img src={image} alt={title}  />
        <div className="title">{title}</div>
      </div>
    </div>
  );
};
export default CorePillarsItem;
CorePillarsItem.propTypes = {
  id: PropTypes.number,
  image: PropTypes.any,
  title: PropTypes.string,
};
