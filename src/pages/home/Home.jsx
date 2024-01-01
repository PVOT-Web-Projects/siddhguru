import HomePage3D from "../../components/3DHomeSection/HomePage3D";
import EventsHomePage from "../../components/EventsHomePage/EventsHomePage";
import FormHomePage from "../../components/Form_homePage/FormHomePage";
import AboutAshram from "../../components/aboutAshram/AboutAshram";
import AllVideoHome from "../../components/allVideoHome/AllVideoHome";
import BrahmSutra from "../../components/brahmSutra/BramhSutra";
import Space from "../../components/counter_HomePage/CounterHomePage";
import HeroSection from "../../components/heroSection/HeroSection";
import HomePageSlider1 from "../../components/homePageSlider1/HomePageSlider1";
import HomePageVideoSection from "../../components/homePageVideoSection/HomePageVideoSection";
import OurProgramSlider from "../../components/ourProgramSlider/OurProgramSlider";
import TextSection from "../../components/textSection/TextSection";
const Home = () => {
  return (
    <div>
      <HeroSection />
      <TextSection />
      <HomePageSlider1 />
      <AboutAshram />
      <HomePage3D />
      <BrahmSutra />
      <EventsHomePage />
      <HomePageVideoSection />
      <OurProgramSlider />
      <AllVideoHome />
      <FormHomePage />
      <Space />
    </div>
  );
};
export default Home;