import { motion } from "framer-motion";
import Button from "../buttons/button";
import { useInView } from "react-intersection-observer";
import PropTypes from "prop-types";

const BlogItem = ({ image, title, description, url, cardVariants }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  //   const textVariants = {
  //     hidden: { opacity: 0, y: 100 },
  //     visible: { opacity: 1, y: -160 },
  //   };
  return (
    <div className="blogCardWrapper">
      <a href={url} className="Blogscardmain">
        <motion.div
          className="blogsCard"
          variants={cardVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ duration: 0.5, delay: 0.5 }}
          ref={ref}
        >
          <div className="blogsCardImageOuter">
            <img className="blogsCardImage" src={image} alt="" />
          </div>
          <div className="blogsCardTextOuter">
            <div className="blogsCardTitle">{title}</div>
            {description && (
              <div className="blogsCardDescription">{description}</div>
            )}
            <div className="blogCardsBtn">
              <Button btn_text="Read More" />
            </div>
          </div>
        </motion.div>
      </a>
    </div>
  );
};
export default BlogItem;

BlogItem.propTypes = {
  image: PropTypes.any,
  title: PropTypes.string,
  description: PropTypes.string,
  url: PropTypes.any,
  cardVariants: PropTypes.any,
};
