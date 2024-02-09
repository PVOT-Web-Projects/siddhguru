import "./newHeroSection.scss";
import bannerVideo from "../../images/newHomeBanner.mp4";
import bannerVideomobile from "../../images/newHomeMobileBanner.mp4";

const NewHeroSection = () => {
  return (
    <div className="newHeroSection">
      <div className="newHeroSection_wrapper">
        {/* <img src="" alt="" /> */}
        <video src={bannerVideo} loop autoPlay muted className="desk"></video>
        <video src={bannerVideomobile} loop autoPlay muted className="mobile"></video>
      </div>
    </div>
  );
};
export default NewHeroSection;
