import { useContext } from "react";
import Button from "../buttons/button4";
import "./weAreHere.scss";
import LanguageContext from "../language/Language";

const WeAreHere = () => {
  const { language } = useContext(LanguageContext);
  return (
    <div className="weAreHere">
      <div className="weAreHere_wrapper">
        <div className="weAreHere_wrapper_heading">
          {language === "en"
            ? "WE ARE HERE TO HELP YOU"
            : "आपकी सहायता के लिए हम तत्पर हैं"}
        </div>
        <div className="weAreHere_wrapper_content">
          <p>
            {language === "en"
              ? "We are living such a stressful life that taking a retreat has become a necessity. And trust us it is quite beneficial. We can relax and understand others and ourselves better. A retreat is an ideal way of relaxation amidst nature."
              : "आज की हमारी बेहद तनाव से भरी ज़िंदगी में रिट्रीट में समय व्यतीत करना एक बहुत बड़ी ज़रुरत बन चुका है। विश्वास करें कि यह आपके लिए अत्यंत लाभदायक है। यहाँ पर हम निश्चिंत हो कर स्वयं को बेहतर समझ सकते हैं। प्रकृति के सानिध्य में चिंता मुक्त होने के लिए रिट्रीट सर्वश्रेष्ठ माध्यम है।"}
          </p>
          <div className="boldText">
            {language === "en"
              ? "In the era of 5G lets get connected to 5E"
              : "5G के ज़माने में आइये इन 5E के साथ जुड़ें"}
          </div>
        </div>
        <ul>
          <li>
            <div className="index">1</div>
            <div className="text">
              {language === "en" ? "Exploring Self" : "स्वयं की खोज"}
            </div>
          </li>
          <li>
            <div className="index">2</div>
            <div className="text">
              {language === "en"
                ? "Energizing the Form"
                : " स्वयं को ऊर्जावान बनाओ"}
            </div>
          </li>
          <li>
            <div className="index">3</div>
            <div className="text">
              {language === "en"
                ? "Elevating Thoughts"
                : "सोच को अधिक ऊँचा उठाओ"}
            </div>
          </li>
          <li>
            <div className="index">4</div>
            <div className="text">
              {language === "en" ? "Empowering Soul" : "अपनी आत्मा को शक्ति दो"}
            </div>
          </li>
          <li>
            <div className="index">5</div>
            <div className="text">
              {language === "en" ? "Experience of Silence" : "मौन का अनुभव करो"}
            </div>
          </li>
        </ul>
        <Button
          btn_text={language === "en" ? "Contact Us" : "संपर्क करें"}
          link={"https://app.sribrahmrishiashram.org/devotee/login"}
        />
      </div>
    </div>
  );
};
export default WeAreHere;
