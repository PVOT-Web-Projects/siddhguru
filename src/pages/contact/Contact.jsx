import ContactForm from "../../components/ContactForm/ContactForm";
import ContactAddress from "../../components/contactAddress/ContactAddress";
import InnerPageCommonHeading from "../../components/innerPageCommonHeading/InnerPageCommonHeading";
import Map from "../../map/Map";
import "./contact.scss";
import { Link } from "react-router-dom";
import facebook from "../../images/facebook.svg";
import insta from "../../images/insta.svg";
import youtube from "../../images/youtube.svg";
import twitter from "../../images/twittercopy.svg";
import InnerPageBanner from "../../components/innerPageBanner/InnerPageBanner";
import bannerImage from "../../images/Contact-Banners-D_2.jpg";
import mobilebannerImage from "../../images/Contact-Banners-M_2.jpg";

const Contact = () => {
  return (
    <div className="contact">
      {/* <InnerPageCommonHeading heading={"Contact"} /> */}
      <InnerPageBanner image={bannerImage} mobileImage={mobilebannerImage} text={"Connect with SiddhGuru: Let Divine Wisdom Light Your Path"} />
      <div className="contact_wrapper">
        <div className="contact_wrapper_left">
          <div className="heading">
            Stay connected with Gurudev's blessings!
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
            {/* <li>
              <Link to={"https://twitter.com/sri_sidheswar"} target="_blank">
                <img src={twitter} alt="youtube" />
              </Link>
            </li> */}
          </ul>
        </div>
      </div>
      <ContactAddress />
      <Map />
    </div>
  );
};
export default Contact;
