import "./footer.scss";
import footerimg from "../../images/footerimg.png";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import icon2 from "../../images/facebook_icon.svg";
import icon3 from "../../images/youtube_icon.svg";
import icon1 from "../../images/instagram_icon.svg";
import icon4 from "../../images/twitter.svg";
import { useContext } from "react";
import LanguageContext from "../language/Language";

const Footer = () => {
  const { language } = useContext(LanguageContext);
  const [ref, inView] = useInView({
    triggerOnce: true, // Only trigger once
  });
  return (
    <div className="footer_main">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="footer_img_container"
      >
        <img className="footer_img" src={footerimg}></img>
      </motion.div>
      <div className="footer_text">
        <p>{language === "en" ? "Address :" : "पता:"}</p>
        {language === "en"
          ? "Sri Sidheshwar Tirth, Shri Brahmrishi Ashram, R.C Road, C. Ramapuram, Ramchandrapuram Mandal, Tirupati, Andhra Pradesh  - 517561, India. Call :"
          : "श्री सिद्धेश्वर तीर्थ, ब्रह्मर्षि आश्रम, आर. सी. रोड, सी. रामपुरम, रामचंद्रपुरम मंडलम, तिरुपति के पास, आन्ध्र प्रदेश - 517561, भारत।. फोन:"}
        <a href="tel:91 7207811011">+91 7207811011</a>,{" "}
        <a href="tel:91 0986 6622049">+91 0986 6622049</a>,{" "}
        <a href="tel:91 877 2247056">+91 877 2247056</a>,{" "}
        <a href="tel:91 877 2247669">+91 877 2247669</a> |{" "}
        {/* {language === "en" ? "Tele Fax :" : "टैली फैक्स : "}
        <a href="tel:918772247059">+91 0877 2247059</a>|{" "} */}
        {language === "en" ? "WhatsApp :" : "टैली फैक्स : "}
        <a href="tel:91 9676516006">+91 9676516006</a>|{" "}
        {language === "en" ? "Email :" : "ई-मेल : "}
        <a href="mailto:enquiry.sbashram@gmail.com">
        enquiry.sbashram@gmail.com
        </a>,
        <a href="mailto:eesystem.sbashram@gmail.com">
        eesystem.sbashram@gmail.com
        </a>
      </div>

      <div className="footer_link_container">
        <div className="instagram_icon social_icon">
          <a
            href="https://www.instagram.com/srisidheshwarbrahmrishi/"
            target="_blank"
          >
            <img src={icon1} height="20px" />
          </a>
        </div>
        <div className="facebook_icon social_icon">
          <a
            href=" https://www.facebook.com/siddhgurusrisidheshwarbrahmrishi"
            target="_blank"
          >
            <img src={icon2} />
          </a>
        </div>
        <div className="youtube_icon social_icon">
          <a
            href=" https://www.youtube.com/@srisidheshwartirth-brahmri5318"
            target="_blank"
          >
            <img src={icon3} />
          </a>
        </div>
        <div className="youtube_icon social_icon">
          <a href="https://twitter.com/sri_sidheswar" target="_blank">
            <img src={icon4} />
          </a>
        </div>
      </div>
    </div>
  );
};
export default Footer;
