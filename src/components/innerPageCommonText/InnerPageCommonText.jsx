import PropTypes from "prop-types";
import "./innerPageCommonText.scss";
import { useContext } from "react";
import LanguageContext from "../language/Language";

const InnerPageCommonText = ({
  boldText,
  text1,
  text2,
  text3,
  hindiBoldText,
  hindiText1,
  hindiText2,
  hindiText3,
}) => {
  const {language} = useContext(LanguageContext);
  return (
    <div className="innerPageCommonText">
      <div className="innerPageCommonText_wrapper">
        {(boldText || text1 || hindiBoldText || hindiText1) && (
          <p>
            {(boldText || hindiBoldText) && (
              <span>{language === "en" ? boldText : hindiBoldText}</span>
            )}
            {language === "en" ? text1 : hindiText1}
          </p>
        )}
        {(text2 || hindiText2) && <p>{language === "en" ? text2 : hindiText2}</p>}
        {(text3 || hindiText3) && <p>{language === "en" ? text3 : hindiText3}</p>}
      </div>
    </div>
  );
};
export default InnerPageCommonText;

InnerPageCommonText.propTypes = {
  text1: PropTypes.string,
  text2: PropTypes.string,
  text3: PropTypes.string,
  boldText: PropTypes.string,
  hindiBoldText: PropTypes.string,
  hindiText1: PropTypes.string,
  hindiText2: PropTypes.string,
  hindiText3: PropTypes.string,
};
