import EventsHomePage from "../../components/EventsHomePage/EventsHomePage";
// import FormHomePage from "../../components/Form_homePage/FormHomePage";
import AboutAshram from "../../components/aboutAshram/AboutAshram";
import AllVideoHome from "../../components/allVideoHome/AllVideoHome";
// import CircleSpin from "../../components/3DHomeSection/CircleSpin";
// import BrahmSutra from "../../components/brahmSutra/BramhSutra";
// import Space from "../../components/counter_HomePage/CounterHomePage";
// import HeroSection from "../../components/heroSection/HeroSection";
// import HomePageSlider1 from "../../components/homePageSlider1/HomePageSlider1";
// import HomePageVideoSection from "../../components/homePageVideoSection/HomePageVideoSection";
// import OurProgramSlider from "../../components/ourProgramSlider/OurProgramSlider";
// import TextSection from "../../components/textSection/TextSection";
import ThreeVideos from "../../components/threeVideos/ThreeVideos";
// import TabSection from "../../components/tabSection/TabSection";
import TabSectionNew from "../../components/tabSectionNew/TabSectionNew";
import TabSectionNewNew from "../../components/tabSectionNewNew/TabSectionNewNew";
import NewHeroSection from "../../components/newHeroSection/NewHeroSection";
// import bannerVideo from "../../images/Website Banner video.mp4";
import bannerVideo from "../../images/heroBannerVideo2.mp4";
import bannerMobileVideo from "../../images/Website_banner_video_hindi.mp4";
import bannerVideomobile from "../../images/Website_mobile_banner_video.mp4";
import "./newHome.scss";
// import { Player } from "video-react";
// import fullVideo from "../../images/Ashokbhai Interview Home.mp4";
// import posterImage from "../../images/ashok_poster.jpg";
import { useLocation } from "react-router-dom";
const NewHome = () => {
  const location  = useLocation();
  console.log("location", location);
  return (
    <>
      {/* <HeroSection /> */}
      <NewHeroSection 
        deskVideoEn={bannerVideo}
        deskVideoHi={bannerMobileVideo}
        // deskVideo={
        // "https://res.cloudinary.com/djkswfmo5/video/upload/v1709700937/siddhguru/cry6d20vdqdz2yq7vc1o.mp4"
        // "https://res.cloudinary.com/drzn5vaqq/video/upload/v1707833663/rlqouehxtqvpftanwbue.mp4"
        // bannerVideo
        // }
        mobileVideo={
          // "https://res.cloudinary.com/djkswfmo5/video/upload/v1709700937/siddhguru/ftvbu1caqqxa7wdhnkdo.mp4"
          // "https://res.cloudinary.com/drzn5vaqq/video/upload/v1707833729/rhkym0lc0hcybuyip2q8.mp4"
          bannerVideomobile
        }
      />
      {/* <TextSection /> */}
      {/* <HomePageSlider1 /> */}
      {/* <TabSection /> */}
      <div className="tab">
        <TabSectionNew />
      </div>
      <div className="tabNew">
        <TabSectionNewNew />
      </div>
      {/* <div className="video">
        <Player
          playsInline={true}
          src={
            // "https://res.cloudinary.com/djkswfmo5/video/upload/v1710225855/siddhguru/x5jsisbrhoksxnlos0p1.mp4"
            fullVideo
          }
          poster={posterImage}
          // fluid={true}
        />
      </div> */}
      <AboutAshram />
      <EventsHomePage
        heading={"Upcoming Events with Sri SiddhGuru"}
        hindiHeading={"गुरुदेव के आगामी कार्यक्रम"}
        content={
          "Stay updated on Sri SiddhGuru's upcoming transformative gatherings and spiritual events."
        }
        hindiContent={"श्री सिद्धेश्वर ब्रह्मर्षि गुरुदेव [तिरुपति] के आध्यात्मिक कार्यक्रमों एवं यात्राओं के बारे में विस्तृत जानकारी यहाँ प्राप्त करें"}
      />
      <ThreeVideos />
      {/* <CircleSpin /> */}

      {/* <BrahmSutra /> */}
      {/* <HomePageVideoSection /> */}
      {/* <OurProgramSlider /> */}
      <AllVideoHome />
      {/* <FormHomePage /> */}
      {/* <Space /> */}
    </>
  );
};
export default NewHome;
