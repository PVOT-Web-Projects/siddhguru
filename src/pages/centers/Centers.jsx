import FullWidthImageSec from "../../components/fullWidthImageSec/FullWidthImageSec";
import InnerPageCommonHeading from "../../components/innerPageCommonHeading/InnerPageCommonHeading";
import InnerPageCommonText from "../../components/innerPageCommonText/InnerPageCommonText";
import TwoCardSection from "../../components/twoCardSection/TwoCardSection";
import bigImage1 from "../../images/centerPage_bigImage1.png";
import bigImage2 from "../../images/centerPage_bigImage2.png";

const Centers = () => {
  return (
    <div className="centers">
      <InnerPageCommonHeading heading={"Centers"} />
      <InnerPageCommonText
        text1={
          "Isha is supported by over 17 million volunteers worldwide in more than 300 centers worldwide. The most prominent of these centers are the Isha Yoga Center in Coimbatore and the Sadhguru Sannidhi in Bengaluru in India, and the Isha Institute of Inner-sciences in Tennessee and Isha Yoga Center in Los Angeles in the United States. These were established by Sadhguru as large-scale infrastructure for raising human consciousness. The centers offer energized spaces for inner transformation, where one can imbibe classical Yoga, meditation, and rejuvenating processes for health and inner freedom."
        }
      />
      <TwoCardSection />
      <FullWidthImageSec
        imageUrl={bigImage1}
        text={
          "As Gurudev always says there are 3 stages of everyone’s life - “Learning; Learning and Earning; Learning, Earning and Returning”"
        }
      />
      <FullWidthImageSec
        imageUrl={bigImage2}
        text={
          "As Gurudev always says there are 3 stages of everyone’s life - “Learning; Learning and Earning; Learning, Earning and Returning”"
        }
      />
    </div>
  );
};
export default Centers;
