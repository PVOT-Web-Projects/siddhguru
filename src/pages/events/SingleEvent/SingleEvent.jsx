import InnerPageBanner from "../../../components/innerPageBanner/InnerPageBanner";
import "./singleEvent.scss";
import deskImage from "../../../images/AsiaTour.jpeg";
import mobileImage from "../../../images/MAsiaTour.jpg";
import InnerPageCommonText from "../../../components/innerPageCommonText/InnerPageCommonText";
import SelectCity from "../../../components/SelectCity.jsx/SelectCity";

const SingleEvent = () => {
  return (
    <div className="singleEvent">
      <InnerPageBanner image={deskImage} mobileImage={mobileImage} />
      <InnerPageCommonText
        text1={`Experience the ancient practice of "Brahm Sparsh", where powerful spiritual energy is transferred to individuals. Join the Brahm Sparsh tour led by Siddhguru Sri Siddheswar Brahmrishi Gurudev, a global ambassador of peace, unity, and humanity, as he blesses attendees with transformative spiritual energy.`}
      />
      <SelectCity />
    </div>
  );
};
export default SingleEvent;
