// import ContactForm from "../../components/ContactForm/ContactForm";
import ContactAddress from "../../components/contactAddress/ContactAddress";
// import InnerPageCommonHeading from "../../components/innerPageCommonHeading/InnerPageCommonHeading";
import Map from "../../map/Map";
import "./contact.scss";
import { Link } from "react-router-dom";
import facebook from "../../images/facebook.svg";
import insta from "../../images/insta.svg";
import youtube from "../../images/youtube.svg";
// import twitter from "../../images/twittercopy.svg";
import whatsApp from "../../images/whatsApp.svg";
import InnerPageBanner from "../../components/innerPageBanner/InnerPageBanner";
import { useContext } from "react";
import LanguageContext from "../../components/language/Language";
import bannerImage from "../../images/Contact_D.jpg";
import mobilebannerImage from "../../images/Contact_M.jpg";

const Contact = () => {
  const { language } = useContext(LanguageContext);
  return (
    <div className="contact">
      {/* <InnerPageCommonHeading heading={"Contact"} /> */}
      <InnerPageBanner
        image={
          // "https://res.cloudinary.com/drzn5vaqq/image/upload/v1707916987/axbanxuqhdz1ltdtfmzp.jpg"
          bannerImage
        }
        mobileImage={
          // "https://res.cloudinary.com/drzn5vaqq/image/upload/v1707917026/rcumi1sjejqn64kppb0j.jpg"
          mobilebannerImage
        }
        bigText={"Connect with SiddhGuru:"}
        bigText2={"Let Divine Wisdom Light Your Path"}
        hindiBigText={"श्री सिद्धगुरु के साथ जुड़ें"}
        hindiBigText2={
          "गुरुदेव के दिव्य ज्ञान के प्रकाश से अपने जीवन का मार्ग प्रकाशित करें"
        }
      />
      <div className="contact_wrapper">
        <div className="contact_wrapper_left">
          <div className="heading">
            {language === "en"
              ? "Stay connected with Gurudev's blessings!"
              : "गुरुदेव के आशीर्वाद निरंतर प्राप्त करते रहें"}
          </div>
        </div>
        {/* <div className="contact_wrapper_right">
          <ContactForm />
        </div> */}
        <div className="socialIcon">
          <ul>
            <li>
              <Link
                to={"https://www.instagram.com/srisidheshwarbrahmrishi/"}
                target="_blank"
              >
                <img src={insta} alt="insta" />
              </Link>
            </li>
            <li>
              <Link
                to={"https://www.facebook.com/siddhgurusrisidheshwarbrahmrishi"}
                target="_blank"
              >
                <img src={facebook} alt="facebook" />
              </Link>
            </li>
            <li>
              <Link
                to={"https://www.youtube.com/@srisidheshwartirth-brahmri5318"}
                target="_blank"
              >
                <img src={youtube} alt="youtube" />
              </Link>
            </li>
            <li>
              <Link
                to={"https://whatsapp.com/channel/0029VaDdUk34NVikwxnIXa2T"}
                target="_blank"
              >
                <img src={whatsApp} alt="whatsapp" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <ContactAddress />
      <Map />
    </div>
  );
};
export default Contact;
