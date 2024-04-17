import { useContext } from "react";
import "./headingContentAshram.scss";
import PropTypes from "prop-types";
import LanguageContext from "../language/Language";
import { Player } from "video-react";
import fullVideo from "../../images/videcScienceVideo-FyWQQtnN.mp4";
import posterImage from "../../images/AboutashraminnerThumbnail.jpg";
import posterImageHindi from "../../images/AboutashraminnerThumbnailHindi.jpg";
const headingContentAshram = ({
  heading,
  content,
  extracontent,
  extracontentHindi,
  extracontent1,
  extracontentHindi1,
  heading1,
  content1,
  image1,
  image2,
  image3,
  image4,
  list1,
  list1Hindi,
  list2,
  list2Hindi,
  list3,
  list3Hindi,
  list4,
  list4Hindi,
  list5,
  list5Hindi,
  list6,
  list6Hindi,
  hindiHeading,
  hindiContent,
  hindiHeading1,
  hindiContent1,
}) => {
  const { language } = useContext(LanguageContext);
  const englishImages = posterImage;
  const hindiImages = posterImageHindi;
  const images = language === "en" ? englishImages : hindiImages;

  return (
    <div className="headingContentWithImagesItem">
      <div className="headingContentWithImagesItem_wrapper">
        <div className="heading">
          <h3>{language === "en" ? heading : hindiHeading}</h3>
        </div>
        <div className="content">
          <p>{language === "en" ? content : hindiContent}</p>
        </div>
        <div className="content">
          <p>{language === "en" ? extracontent : extracontentHindi}</p>
        </div>
        <div className="content">
          <p>{language === "en" ? extracontent1 : extracontentHindi1}</p>
        </div>
        <div>
          <a href="https://youtu.be/Yd3gMgcazvg?si=WYdKfEWBWfMZNW12" target="_blank">
            <img src={images} alt="image" className="vedicScienceVideo"/>
          </a>
        {/* <Player
          playsInline={true}
          src={
            // "https://res.cloudinary.com/djkswfmo5/video/upload/v1710225855/siddhguru/x5jsisbrhoksxnlos0p1.mp4"
            fullVideo
          }
          poster={posterImage}
        /> */}
      </div>
        {(list1 || list2 || list3 || list4 || list5 || list6) && (
          <div className="list">
            <ul>
              {list1 && <li>{language === "en" ? list1 : list1Hindi}</li>}
              {list2 && <li>{language === "en" ? list2 : list2Hindi}</li>}
              {list3 && <li>{language === "en" ? list3 : list3Hindi}</li>}
              {list4 && <li>{language === "en" ? list4 : list4Hindi}</li>}
              {list5 && <li>{language === "en" ? list5 : list5Hindi}</li>}
              {list6 && <li>{language === "en" ? list6 : list6Hindi}</li>}
            </ul>
            <div className="content">
              <p className="content1">
                {language === "en" ? heading1 : hindiHeading1}
              </p>
              <p>{language === "en" ? content1 : hindiContent1}</p>
            </div>
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
export default headingContentAshram;

headingContentAshram.propTypes = {
  heading: PropTypes.string,
  content: PropTypes.string,
  heading1: PropTypes.string,
  content1: PropTypes.string,
  extracontent: PropTypes.string,
  extracontentHindi: PropTypes.string,
  extracontent1: PropTypes.string,
  extracontentHindi1: PropTypes.string,
  image1: PropTypes.any,
  image2: PropTypes.any,
  image3: PropTypes.any,
  image4: PropTypes.any,
  list1: PropTypes.string,
  list1Hindi: PropTypes.string,
  list2: PropTypes.string,
  list2Hindi: PropTypes.string,
  list3: PropTypes.string,
  list3Hindi: PropTypes.string,
  list4: PropTypes.string,
  list4Hindi: PropTypes.string,
  list5: PropTypes.string,
  list5Hindi: PropTypes.string,
  list6: PropTypes.string,
  list6Hindi: PropTypes.string,
  hindiHeading: PropTypes.string,
  hindiContent: PropTypes.string,
  hindiHeading1: PropTypes.string,
  hindiContent1: PropTypes.string,
};
