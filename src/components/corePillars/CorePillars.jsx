import corePillarImage1 from "../../images/corePillar1.png";
import corePillarImage2 from "../../images/corePillar2.png";
import corePillarImage3 from "../../images/corePillar3.png";
import corePillarImage4 from "../../images/corePillar4.png";
import CorePillarsItem from "./CorePillarsItem";
import "./corePillars.scss";
import { motion } from "framer-motion";

const corePillarsData = [
  {
    id: 0,
    image: corePillarImage1,
    title: "Utsav",
    delayTime: 0.2,
  },
  {
    id: 1,
    image: corePillarImage2,
    title: "Seva",
    delayTime: 0.4,
  },
  {
    id: 2,
    image: corePillarImage3,
    title: "Pooja",
    delayTime: 0.6,
  },
  {
    id: 3,
    image: corePillarImage4,
    title: "Sadhana",
    delayTime: 0.8,
  },
];
const CorePillars = () => {
  return (
    <motion.div
      className="corePillars"
      // initial={{
      //   opacity: 0,
      //   // if odd index card,slide from right instead of left
      //   x: -300,
      // }}
      // whileInView={{
      //   opacity: 1,
      //   x: 0, // Slide in to its original position
      //   transition: {
      //     duration: 1, // Animation duration
      //     delay:1
      //   },
      // }}
      // viewport={{ once: true }}
    >
      <div className="corePillars_wrapper">
        <div className="corePillars_wrapper_heading">
          <h3>{"The Core Pillars of Ashram are:"}</h3>
        </div>
        <div className="corePillars_wrapper_images">
          {corePillarsData.map((item) => (
            <CorePillarsItem key={item.id} {...item} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};
export default CorePillars;
