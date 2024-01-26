import FormHomePage from "../../components/Form_homePage/FormHomePage";
import CorePillars from "../../components/corePillars/CorePillars";
import FullWidthImageSec from "../../components/fullWidthImageSec/FullWidthImageSec";
import InnerPageCommonHeading from "../../components/innerPageCommonHeading/InnerPageCommonHeading";
import InnerPageCommonText from "../../components/innerPageCommonText/InnerPageCommonText";
import fullWidthImage from "../../images/fullWidthImage1.png";
import "./activities.scss";

const Activities = () => {
  return (
    <div className="activities">
      <InnerPageCommonHeading heading={"Activities"} />
      <CorePillars />
      <FullWidthImageSec
        imageUrl={fullWidthImage}
        text={
          "As Gurudev always says there are 3 stages of everyone's life - “Learning; Learning and Earning; Learning, Earning and Returning”"
        }
      />
      <InnerPageCommonText
        text1={
          "A vibrant showcase of activities inspired by Siddhguru's teachings, each adding a unique brushstroke to the canvas of positive change. Here, his divine wisdom transforms into impactful actions that uplift and empower, offering a visual tapestry of endeavors that range from profound spiritual practices to heartfelt community service initiatives."
        }
        text2={
          "Gurudev often emphasizes the three stages of life, and at the core of the Ashram's pillars are Utsav (celebrations), Seva (service), Pooja (worship), and Sadhna (spiritual practice). Witness the harmonious blend of spirituality and action, where the principles of divine wisdom not only illuminate individual spiritual paths but also contribute to collective efforts for the greater good."
        }
      />
      <FormHomePage />
    </div>
  );
};
export default Activities;
