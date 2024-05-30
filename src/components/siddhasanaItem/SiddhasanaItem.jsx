import { useContext } from "react";
import "./siddhasanaItem.scss";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import Button from "../buttons/button4";
import LanguageContext from "../../components/language/Language";

const SiddhasanaItem = ({
  heading,
  boldText,
  text1,
  text2,
  text3,
  text4,
  text5,
  text6,
  text7,
  image,
  delay,
  list1,
  list2,
  list3,
  list4,
  list5,
  list6,
  list7,
  list8,
  list9,
  list1bold,
  list2bold,
  list3bold,
  list1light,
  list2light,
  list3light,
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Only trigger once
  });
  const { language } = useContext(LanguageContext);
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: delay }}
      className="SiddhasanaItem"
    >
      <div className="SiddhasanaItem_wrapper">
        <h2>{heading}</h2>
        <p>{text1}</p>
        {text2 && <p>{text2}</p>}
        {text3 && <p>{text3}</p>}
        {text4 && <p>{text4}</p>}
        {text5 && <p>{text5}</p>}
        {text6 && <p>{text6}</p>}
        {boldText && <strong>{boldText}</strong>}
        {text7 && <p>{text7}</p>}
        {(list1bold ||
          list2bold ||
          list3bold ||
          list1light ||
          list2light ||
          list3light) && (
          <ul className="item_bold_and_light_list">
            <li>
              {list1bold}
              <span>{` ${list1light}`}</span>
            </li>
            <li>
              {list2bold}
              <span>{` ${list2light}`}</span>
            </li>
            <li>
              {list3bold}
              <span>{` ${list3light}`}</span>
            </li>
          </ul>
        )}
        {(list1 ||
          list2 ||
          list3 ||
          list4 ||
          list5 ||
          list6 ||
          list7 ||
          list8 ||
          list9) && (
          <ul className="SiddhasanaItem_wrapper_list">
            {list1 && <li>{list1}</li>}
            {list2 && <li>{list2}</li>}
            {list3 && <li>{list3}</li>}
            {list4 && <li>{list4}</li>}
            {list5 && <li>{list5}</li>}
            {list6 && <li>{list6}</li>}
            {list7 && <li>{list7}</li>}
            {list8 && <li>{list8}</li>}
            {list9 && <li>{list9}</li>}
          </ul>
        )}
        {(list1 ||
          list2 ||
          list3 ||
          list4 ||
          list5 ||
          list6 ||
          list7 ||
          list8 ||
          list9) && (
          <>
            {/* <div className="register_now">
              {"Register now at : "}
              <Link
                target="_blank"
                to="https://www.siddheshwarthepowerofsoul.org/registration"
              >
                www.siddheshwarthepowerofsoul.org/<span>registration</span>
              </Link>
            </div> */}
            <Button
              link={"https://www.siddheshwarthepowerofsoul.org/registration"}
              btn_text={
                language === "en" ? "Register Now" : "आज ही रजिस्टर करें"
              }
            />
            <div className="forther_info">
              {language === "en"
                ? "For Further Information:"
                : "अधिक जानकारी के लिए:"}
              {/* For Further Information: */}
            </div>
            <div className="call_info_wrap">
              <div className="list_col1">
                <ul>
                  {/* {"INDIA : "} */}
                  {language === "en" ? "INDIA :" : "भारत :"}
                  <li>
                    <Link to="tel:7847033111">+91 784 703 3111</Link>
                  </li>
                  <li>
                    <Link to="tel:9845549950">+91 984 554 9950</Link>
                  </li>
                  <li>
                    <Link to="tel:9940099501">+91 994 009 9501</Link>
                  </li>
                  <li>
                    <Link to="tel:9343761899">+91 934 376 1899</Link>
                  </li>
                </ul>
              </div>
              <div className="list_col1">
                <ul>
                  {/* {"USA : "} */}
                  {language === "en" ? "USA :" : "अमरिका :"}
                  <li>
                    <Link to="tel:9546818534">+1 954 681 8534</Link>
                  </li>
                </ul>
              </div>
              <div className="list_col1">
                <ul>
                  {/* {"GERMANY : "} */}
                  {language === "en" ? "GERMANY :" : "जर्मनी :"}
                  <li>
                    <Link to="tel:915203930692">+4 91 520 393 0692</Link>
                  </li>
                </ul>
              </div>
            </div>
          </>
        )}
      </div>
      <div className="SiddhasanaItem_image">
        <img src={image} alt="siddhasana" />
      </div>
    </motion.div>
  );
};
export default SiddhasanaItem;
