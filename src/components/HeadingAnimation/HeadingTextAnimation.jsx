import AnimatedTextWord from "./HeadingAnimation";

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
