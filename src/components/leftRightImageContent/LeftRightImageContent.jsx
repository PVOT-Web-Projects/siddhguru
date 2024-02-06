import PropTypes from "prop-types";
import "./leftRightImageContent.scss";
import { motion } from "framer-motion";

const LeftRIghtImageContent = ({
  img,
  title,
  text,
  text2,
  text3,
  text4,
  text5,
  descriptiontitle1,
  descriptiontext1,
  descriptiontitle2,
  descriptiontext2,
  conclution,
  titleColor,
  index,
  id,
}) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        // if odd index card,slide from right instead of left
        x: index % 2 === 0 ? 100 : -100,
      }}
      whileInView={{
        opacity: 1,
        x: 0, // Slide in to its original position
        transition: {
          duration: 1, // Animation duration
        },
      }}
      viewport={{ once: true }}
      className="leftRightImageContent_wrapper"
      id={id}
    >
      <div className="leftRightImageContent_wrapper_image">
        <img src={img} className="thesaintimg" />
      </div>
      <div className="leftRightImageContent_wrapper_text">
        <div className="title" style={{ color: titleColor }}>
          {title}
        </div>
        {text && <div className="text">{text}</div>}
        {text2 && <div className="text2">{text2}</div>}
        {text3 && <div className="text2">{text3}</div>}
        {text4 && <div className="text2">{text4}</div>}
        {text5 && <div className="text2">{text5}</div>}
        {(descriptiontext1 ||
          descriptiontext2 ||
          descriptiontitle1 ||
          descriptiontitle2) && (
          <div className="mantra">
            {(descriptiontext1 || descriptiontitle1) && (
              <div className="descriptiontitle">
                {descriptiontitle1 && (
                  <span className="descriptiontitle1">{descriptiontitle1}</span>
                )}
                {descriptiontext1 && (
                  <span className="descriptiontext1">{descriptiontext1}</span>
                )}
              </div>
            )}
            {(descriptiontitle2 || descriptiontext2) && (
              <div className="descriptiontitle">
                {descriptiontitle2 && (
                  <span className="descriptiontitle2">{descriptiontitle2}</span>
                )}
                {descriptiontext2 && (
                  <span className="descriptiontext2">{descriptiontext2}</span>
                )}
              </div>
            )}
          </div>
        )}
        {conclution && <div className="conclution">{conclution}</div>}
      </div>
    </motion.div>
  );
};

export default LeftRIghtImageContent;
LeftRIghtImageContent.propTypes = {
  index: PropTypes.number,
  img: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  text2: PropTypes.string,
  descriptiontitle1: PropTypes.string,
  descriptiontext1: PropTypes.string,
  descriptiontitle2: PropTypes.string,
  descriptiontext2: PropTypes.string,
  conclution: PropTypes.string,
  titleColor: PropTypes.string,
  id: PropTypes.string,
};
