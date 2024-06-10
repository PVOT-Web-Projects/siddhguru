import { useContext } from "react";
import "./headingCotnentWithImages.scss";
import PropTypes from "prop-types";
import LanguageContext from "../language/Language";
import Button from "../../components/buttons/button5";
import Button1 from "../../components/buttons/button6";
import { useLocation } from "react-router-dom";
import border from "../../images/aboutAshramBorder.svg";
import { HashLink } from "react-router-hash-link";
const HeadingContentWithImages = ({
  heading,
  content,
  extracontent,
  hindiExtracontent,
  extracontent1,
  hindiExtracontent1,
  content2,
  content3,
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
  list7,
  list7Hindi,
  list8,
  list8Hindi,
  list9,
  list9Hindi,
  list10,
  list10Hindi,
  hindiHeading,
  hindiContent,
  hindiContent1,
  hindiContent2,
  hindiContent3,
  showDivider,
  link,
  knowMore,
}) => {
  const { language } = useContext(LanguageContext);

  const location = useLocation();
  console.log(location);
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
          <p>{language === "en" ? extracontent : hindiExtracontent}</p>
        </div>
        <div className="content">
          <p>{language === "en" ? extracontent1 : hindiExtracontent1}</p>
        </div>
        {/* {showDivider && (
          <div className="divider">
            <img src={border} alt="border" />
          </div>
        )} */}
        {link && (
          <div className="btn_link">
            <Button1 link={link} btn_text="Register Now" />
            <div>
              <HashLink to={knowMore} className="button-61">
                <span className="text">Know more about Sri Siddhguru</span>
                <span>Know more about Sri Siddhguru</span>
              </HashLink>
            </div>
          </div>
        )}
        {knowMore && <div></div>}
        {(list1 || list2 || list3 || list4 || list5 || list6) && (
          <div className="list">
            <div className="list_item">
              <ul>
                {list1 && <li>{language === "en" ? list1 : list1Hindi}</li>}
                {list2 && <li>{language === "en" ? list2 : list2Hindi}</li>}
                {list3 && <li>{language === "en" ? list3 : list3Hindi}</li>}
                {list4 && <li>{language === "en" ? list4 : list4Hindi}</li>}
                {list5 && <li>{language === "en" ? list5 : list5Hindi}</li>}
              </ul>

              <ul>
                {list6 && <li>{language === "en" ? list6 : list6Hindi}</li>}
                {list7 && <li>{language === "en" ? list7 : list7Hindi}</li>}
                {list8 && <li>{language === "en" ? list8 : list8Hindi}</li>}
                {list9 && <li>{language === "en" ? list9 : list9Hindi}</li>}
                {list10 && <li>{language === "en" ? list10 : list10Hindi}</li>}
              </ul>
            </div>
            <div className="content">
              <p className="content1">
                {language === "en" ? content1 : hindiContent1}
              </p>
              <p>{language === "en" ? content2 : hindiContent2}</p>
              <p>{language === "en" ? content3 : hindiContent3}</p>
            </div>
            {location.pathname != "/prana-vriddhi" && (
              <Button
                className="button5"
                // btn_text={language === "en" ? "Join Now" : "अब शामिल हों"}
                btn_text="Know More"
              />
            )}
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
  heading1: PropTypes.string,
  content1: PropTypes.string,
  extracontent: PropTypes.string,
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
  hindiExtracontent: PropTypes.string,
  extracontent1: PropTypes.string,
  hindiExtracontent1: PropTypes.string,
  content2: PropTypes.string,
  content3: PropTypes.string,
  list7: PropTypes.string,
  list7Hindi: PropTypes.string,
  list8: PropTypes.string,
  list8Hindi: PropTypes.string,
  list9: PropTypes.string,
  list9Hindi: PropTypes.string,
  list10: PropTypes.string,
  list10Hindi: PropTypes.string,
  hindiContent2: PropTypes.string,
  hindiContent3: PropTypes.string,
  showDivider: PropTypes.bool,
};
