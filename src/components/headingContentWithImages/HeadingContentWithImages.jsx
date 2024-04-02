import "./headingCotnentWithImages.scss";
import PropTypes from "prop-types";

const HeadingContentWithImages = ({
  heading,
  content,
  image1,
  image2,
  image3,
  image4,
  list1,
  list2,
  list3,
  list4,
  list5,
  list6,
}) => {
  return (
    <div className="headingContentWithImagesItem">
      <div className="headingContentWithImagesItem_wrapper">
        <div className="heading">
          <h3>{heading}</h3>
        </div>
        <div className="content">
          <p>{content}</p>
        </div>
        {(list1 || list2 || list3 || list4 || list5 || list6) && (
          <div className="list">
            <ul>
              {list1 && <li>{list1}</li>}
              {list2 && <li>{list2}</li>}
              {list3 && <li>{list3}</li>}
              {list4 && <li>{list4}</li>}
              {list5 && <li>{list5}</li>}
              {list6 && <li>{list6}</li>}
            </ul>
          </div>
        )}
        <div className="images">
          {image1 && <img src={image1} alt={heading} />}
          {image2 && <img src={image2} alt={heading} />}
          {image3 && <img src={image3} alt={heading} />}
          {image4 && <img src={image4} alt={heading} />}
        </div>
      </div>
    </div>
  );
};
export default HeadingContentWithImages;

HeadingContentWithImages.propTypes = {
  heading: PropTypes.string,
  content: PropTypes.string,
  image1: PropTypes.any,
  image2: PropTypes.any,
  image3: PropTypes.any,
  image4: PropTypes.any,
};
