import InnerPageBanner from "../../../components/innerPageBanner/InnerPageBanner";
import "../SingleEvent/singleEvent.scss";
import deskImage from "../../../images/america-min.jpg";
import mobileImage from "../../../images/usa-tour-mobile-banner-min.jpg";
import InnerPageCommonText from "../../../components/innerPageCommonText/InnerPageCommonText";
// import SelectCity from "../../../components/SelectCity.jsx/SelectCity";
import UsaTourCity from "../../../components/SelectCity.jsx/UsaTourCity";

const UsaTour = () => {
  return (
    <div className="singleEvent">
      <InnerPageBanner image={deskImage} mobileImage={mobileImage} />
      <InnerPageCommonText
        text1={`Experience the ancient practice of "Brahm Sparsh", where powerful spiritual energy is transferred to individuals. Join the Brahm Sparsh tour led by Siddhguru Sri Siddheswar Brahmrishi Gurudev, a global ambassador of peace, unity, and humanity, as he blesses attendees with transformative spiritual energy.`}
      />
      <UsaTourCity />
    </div>
  );
};
export default UsaTour;
