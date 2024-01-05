import AnimatedTextWord from "./HeadingAnimation";
import PropTypes from "prop-types";

const HeadingTextAnimation = ({ heading, fontSize, justifyContent }) => {
  return (
    <div
      className="animatedText"
      style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}
    >
      <AnimatedTextWord
        text={heading ? heading : ""}
        fontSize={fontSize ? fontSize : ""}
        justifyContent={justifyContent ? justifyContent : ""}
      />
    </div>
  );
};
export default HeadingTextAnimation;

HeadingTextAnimation.propTypes = {
  heading: PropTypes.string,
  fontSize: PropTypes.string,
  justifyContent: PropTypes.string,
};
