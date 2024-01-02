import { motion } from "framer-motion";
import Button from "../../components/buttons/button";
import { useInView } from "react-intersection-observer";
import "./featuredBlogs.scss";
import img1 from "../../images/featuredBlog1.png";
import img2 from "../../images/featuredBlog2.png";
import img3 from "../../images/featuredBlog3.png";
import img4 from "../../images/featuredBlog1.png";
const FeaturedBlog = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  const cardVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  };
  const textVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <div ref={ref} className="fratured_blog">
      <div className="blogsOuter">
        <motion.div
          variants={textVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ duration: 0.9 }}
          className="blogsText"
        >
          Blogs
        </motion.div>
        <div className="blogsCardsOuter">
          <a href="" className="Blogscardmain">
            <motion.div
              className="blogsCard"
              variants={cardVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ duration: 0.5 }}
            >
              <div className="blogsCardImageOuter">
                <img className="blogsCardImage" src={img1} alt="" />
              </div>
              <div className="blogsCardTextOuter">
                <div className="blogsCardTitle">
                  Reconnect with yourself through Siddhasana
                </div>
                {/* <div className="blogsCardText">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </div>
                <div className="blogsCardText2">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </div> */}
                <div className="blogCardsBtn">
                  <Button btn_text="Read More" />
                </div>
              </div>
            </motion.div>
          </a>
          <a href="" className="Blogscardmain">
            <motion.div
              className="blogsCard"
              variants={cardVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="blogsCardImageOuter">
                <img className="blogsCardImage" src={img2} alt="" />
              </div>
              <div className="blogsCardTextOuter">
                <div className="blogsCardTitle">
                  Pran Mudra is your ‘absolutely free’ immunity booster
                </div>
                {/* <div className="blogsCardText">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </div>
                <div className="blogsCardText2">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </div> */}
                <div className="blogCardsBtn">
                  <Button btn_text="Read More" />
                </div>
              </div>
            </motion.div>
          </a>
          <a href="" className="Blogscardmain">
            <motion.div
              className="blogsCard"
              variants={cardVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="blogsCardImageOuter">
                <img className="blogsCardImage" src={img3} alt="" />
              </div>
              <div className="blogsCardTextOuter">
                <div className="blogsCardTitle">
                  5 Benefits of walking meditation
                </div>
                {/* <div className="blogsCardText">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </div>
                <div className="blogsCardText2">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </div> */}
                <div className="blogCardsBtn">
                  <Button btn_text="Read More" />
                </div>
              </div>
            </motion.div>
          </a>
          <a href="" className="Blogscardmain">
            <motion.div
              className="blogsCard"
              variants={cardVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className="blogsCardImageOuter">
                <img className="blogsCardImage" src={img4} alt="" />
              </div>
              <div className="blogsCardTextOuter">
                <div className="blogsCardTitle">
                  How to activate the body’s Chakras?
                </div>

                {/* <div className="blogsCardText">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </div>
                <div className="blogsCardText2">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </div> */}
                <div className="blogCardsBtn">
                  <Button btn_text="Read More" />
                </div>
              </div>
            </motion.div>
          </a>
        </div>
      </div>
    </div>
  );
};
export default FeaturedBlog;
