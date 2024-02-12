import "./footer.scss";
import footerimg from "../../images/footerimg.png";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import icon2 from "../../images/facebook_icon.svg";
import icon3 from "../../images/youtube_icon.svg";
import icon1 from "../../images/instagram_icon.svg";
import icon4 from "../../images/twitter.svg";

const Footer = () => {
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
        <p>Address :</p>
        Sri Sideshwar Tirth – Sri Brahmrishi Ashram, R.C.Road, C. Ramapuram,
        Ramachandrapuram Mandalam, Tirupati – 517561, India. Call :
        <a
          href="to:91 986
        6622049"
        >
          +91 0986 6622049
        </a>
        , <a href="to:918772247056">+91 0877 2247056</a> | Tele Fax :
        <a href="to:918772247059">+91 0877 2247059</a>| Email :
        <a href="mailto:contact@sribrahmrishiashram.org">
          contact@sribrahmrishiashram.org
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
