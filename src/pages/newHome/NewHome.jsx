import EventsHomePage from "../../components/EventsHomePage/EventsHomePage";
import AboutAshram from "../../components/aboutAshram/AboutAshram";
import AllVideoHome from "../../components/allVideoHome/AllVideoHome";

import ThreeVideos from "../../components/threeVideos/ThreeVideos";
import TabSectionNew from "../../components/tabSectionNew/TabSectionNew";
import TabSectionNewNew from "../../components/tabSectionNewNew/TabSectionNewNew";
import NewHeroSection from "../../components/newHeroSection/NewHeroSection";
import bannerVideo from "../../images/heroBannerVideo2.mp4";
import bannerMobileVideo from "../../images/Website_banner_video_hindi.mp4";
import bannerVideomobile from "../../images/Website_mobile_banner_video.mp4";
import "./newHome.scss";
import { Player } from "video-react";
import fullVideo from "../../images/Ashokbhai Interview Home.mp4";
import posterImage from "../../images/ashok_poster.jpg";
import { useLocation } from "react-router-dom";
const NewHome = () => {
  const location = useLocation();
  console.log("location", location);
  return (
    <>
      <NewHeroSection
        deskVideoEn={bannerVideo}
        deskVideoHi={bannerMobileVideo}
        mobileVideo={bannerVideomobile}
      />

      <div className="tab">
        <TabSectionNew />
      </div>
      <div className="tabNew">
        <TabSectionNewNew />
      </div>
      <div className="video">
        <Player playsInline={true} src={fullVideo} poster={posterImage} />
      </div>
      <AboutAshram />
      <EventsHomePage
        heading={"Upcoming Events with Sri SiddhGuru"}
        hindiHeading={"गुरुदेव के आगामी कार्यक्रम"}
        content={
          "Stay updated on Sri SiddhGuru's upcoming transformative gatherings and spiritual events."
        }
        hindiContent={
          "श्री सिद्धेश्वर ब्रह्मर्षि गुरुदेव [तिरुपति] के आध्यात्मिक कार्यक्रमों एवं यात्राओं के बारे में विस्तृत जानकारी यहाँ प्राप्त करें"
        }
      />
      <ThreeVideos />

      <AllVideoHome />
    </>
  );
};
export default NewHome;
