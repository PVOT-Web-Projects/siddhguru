import { useContext } from "react";
import "./newHeroSection.scss";
// import bannerVideo from "../../images/newHomeBanner.mp4";
// import bannerVideomobile from "../../images/newHomeMobileBanner.mp4";
import LanguageContext from "../../components/language/Language";


const NewHeroSection = ({ mobileVideo, deskVideoEn, deskVideoHi}) => {
  const { language } = useContext(LanguageContext);
  const deskVideo = language === "en" ? deskVideoEn : deskVideoHi;
  
  return (
    <div className="newHeroSection">
      <div className="newHeroSection_wrapper">
        {/* <img src="" alt="" /> */}
        <video src={deskVideo} loop autoPlay muted className="desk"></video>
        <video src={mobileVideo} loop autoPlay playsInline muted className="mobile"></video>
      </div>
    </div>
  );
};
export default NewHeroSection;
