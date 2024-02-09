import EventsHomePage from "../../components/EventsHomePage/EventsHomePage";
import FormHomePage from "../../components/Form_homePage/FormHomePage";
import AboutAshram from "../../components/aboutAshram/AboutAshram";
import AllVideoHome from "../../components/allVideoHome/AllVideoHome";
import CircleSpin from "../../components/3DHomeSection/CircleSpin";
import BrahmSutra from "../../components/brahmSutra/BramhSutra";
import Space from "../../components/counter_HomePage/CounterHomePage";
import HeroSection from "../../components/heroSection/HeroSection";
import HomePageSlider1 from "../../components/homePageSlider1/HomePageSlider1";
import HomePageVideoSection from "../../components/homePageVideoSection/HomePageVideoSection";
import OurProgramSlider from "../../components/ourProgramSlider/OurProgramSlider";
import TextSection from "../../components/textSection/TextSection";
import ThreeVideos from "../../components/threeVideos/ThreeVideos";
import TabSection from "../../components/tabSection/TabSection";
import TabSectionNew from "../../components/tabSectionNew/TabSectionNew";
import NewHeroSection from "../../components/newHeroSection/NewHeroSection";
const NewHome = () => {
  return (
    <>
      {/* <HeroSection /> */}
      <NewHeroSection />
      {/* <TextSection /> */}
      {/* <HomePageSlider1 /> */}
      {/* <TabSection /> */}
      <TabSectionNew />
      <AboutAshram />
      <ThreeVideos />
      {/* <CircleSpin /> */}
      <EventsHomePage />
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
