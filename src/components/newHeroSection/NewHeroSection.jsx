import "./newHeroSection.scss";
import bannerVideo from "../../images/newHomeBanner.mp4";
import bannerVideomobile from "../../images/newHomeMobileBanner.mp4";

const NewHeroSection = ({deskVideo, mobileVideo}) => {
  return (
    <div className="newHeroSection">
      <div className="newHeroSection_wrapper">
        {/* <img src="" alt="" /> */}
        <video src={deskVideo} loop autoPlay muted className="desk"></video>
        <video src={mobileVideo} loop autoPlay={true} muted className="mobile"></video>
      </div>
    </div>
  );
};
export default NewHeroSection;
