import InnerPageBanner from "../../components/innerPageBanner/InnerPageBanner";
import InnerPageCommonHeading from "../../components/innerPageCommonHeading/InnerPageCommonHeading";
import VideoCards from "../../components/videoCards/VideoCards";
import "./experience.scss";
import bannerImage from "../../images/ExperiencePage.jpg";

const Experience = () => {
  return (
    <div className="experience">
      {/* <InnerPageCommonHeading heading={"Experience"} /> */}
      <InnerPageBanner image={bannerImage} />
      <VideoCards />
    </div>
  );
};
export default Experience;
