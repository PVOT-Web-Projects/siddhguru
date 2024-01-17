import "./allVideoHome.scss";
import sidhhguru_layout1 from "../../images/videoImage1.png";
import Button from "../../components/buttons/button2";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import sidhhguru_layout2 from "../../images/videoImage2.png";
import lotus_image from "../../images/lotus.png";
function AllVideoHome() {
  const [ref, inView] = useInView({
    triggerOnce: true, // Only trigger once
  });
  return (
    <div className="sidhhguru_first_container">
      <div className="sidhhguru_layout">
        <div className="sidhhguru_gurudev_first_content">
          <div className="allVideoLeft">
            <p className="sidhhguru_gurudev_content">
              Latest Wisdom from Brahmashri Gurudev
            </p>
            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="sidhhguru_gurudev_btn_outer"
            >
              <Button btn_text="See all Videos" />
            </motion.div>
          </div>
          <div className="allVideoRight_wrap">
            <div className="allVideoRight">
              <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="sidhhguru_gurudev_second_content"
              >
                <a
                  href="https://www.instagram.com/p/C1ovE2VtnlX/"
                  target="_blank"
                >
                  <img
                    src={sidhhguru_layout1}
                    alt="none"
                    className="sidhhguru_layout1_img"
                  />
                  <div className="sidhhguru_gurudev_second_content_text">
                    <p className="sidhhguru_gurudev_second_content_innertext">
                      Elevate your soul through yoga sadhana,
                      <br /> and spiritual interventions.
                    </p>
                  </div>
                </a>
              </motion.div>
              <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="sidhhguru_gurudev_second_content"
              >
                <a href="https://www.instagram.com/p/CxaBjzHM4Ku/" target="_blank">
                  <img
                    src={sidhhguru_layout2}
                    alt="none"
                    className="sidhhguru_layout1_img"
                  />
                  <div className="sidhhguru_gurudev_second_content_text1">
                    <p className="sidhhguru_gurudev_second_content_innertext">
                      London gets ready to embrace the
                      <br /> divine wisdom of Sri Sidhhguru.
                    </p>
                  </div>
                </a>
              </motion.div>
            </div>
          </div>
        </div>
        <div className="lotus_img_outer">
          <img src={lotus_image} alt="none" className="lotus_img" />
        </div>
      </div>
    </div>
  );
}
export default AllVideoHome;
