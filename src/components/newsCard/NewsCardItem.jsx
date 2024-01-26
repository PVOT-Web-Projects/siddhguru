import PropTypes from "prop-types";
import "./newsCard.scss";

const NewsCardItem = ({ image, title, content, date }) => {
  const removeTags = (str) => {
    if (str === null || str === "") return false;
    else str = str.toString();
    return str.replace(/(<([^>]+)>)/gi, "");
  };
  return (
    <div className="newsCardItem">
      <div className="newsCardItem_wrapper">
        <div className="newsCardItem_wrapper_left">
          <div className="newsCardItem_wrapper_left_image">
            <img src={image} alt={title} />
          </div>
        </div>
        <div className="newsCardItem_wrapper_right">
          <div className="newsCardItem_wrapper_right_inner">
            <h4>{title}</h4>
            <p>{removeTags(content)}</p>
            <div className="newsCardItem_wrapper_right_inner_bottomText">
              <div className="left">Ahmedabad/Report</div>
              <div className="right">{date}</div>
              <div className="right">Jan, 15, 2024</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NewsCardItem;

NewsCardItem.propTypes = {
  image: PropTypes.any,
  title: PropTypes.string,
  content: PropTypes.string,
  date: PropTypes.string,
};
