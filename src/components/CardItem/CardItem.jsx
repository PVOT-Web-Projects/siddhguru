import PropTypes from "prop-types";
import "./cardItem.scss";

const CardItem = ({ imageUrl, title, description, imageText }) => {
  const removeTags = (str) => {
    if (str === null || str === "") return false;
    else str = str.toString();
    return str.replace(/(<([^>]+)>)/gi, "");
  };
  return (
    <div className="card_wraper">
      <div className="card_item">
        <div className="card_image">
          <img src={imageUrl} alt="Card Image" className="card-image" />
          {imageText && <div className="imageText">{imageText}</div>}
        </div>
        <div className="card-content">
          <h2 className="card-title">{title}</h2>
          <p className="card-description">{removeTags(description)}</p>
          <p className="svg_line">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="2"
              viewBox="0 0 50 2"
              fill="none"
            >
              <path d="M0.5 1H49.5" stroke="black" />
            </svg>
          </p>
        </div>
      </div>
    </div>
  );
};

CardItem.propTypes = {
  imageUrl: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  imageText: PropTypes.string,
};

export default CardItem;
