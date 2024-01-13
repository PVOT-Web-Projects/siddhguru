import corePillarImage1 from "../../images/corePillarsImage1.png";
import corePillarImage2 from "../../images/corePillarsImage2.png";
import corePillarImage3 from "../../images/corePillarsImage3.png";
import corePillarImage4 from "../../images/corePillarsImage4.png";
import CorePillarsItem from "./CorePillarsItem";
import "./corePillars.scss";

const corePillarsData = [
  {
    image: corePillarImage1,
    title: "Utsav",
  },
  {
    image: corePillarImage2,
    title: "Seva",
  },
  {
    image: corePillarImage3,
    title: "Pooja",
  },
  {
    image: corePillarImage4,
    title: "Sadhana",
  },
];
const CorePillars = () => {
  return (
    <div className="corePillars">
      <div className="corePillars_wrapper">
        <div className="corePillars_wrapper_heading">
          <h3>{"The core Pillars of Ashram are:"}</h3>
        </div>
        <div className="corePillars_wrapper_images">
          {corePillarsData.map((item, index) => (
            <CorePillarsItem key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default CorePillars;
