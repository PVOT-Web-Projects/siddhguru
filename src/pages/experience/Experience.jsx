import InnerPageBanner from "../../components/innerPageBanner/InnerPageBanner";
import InnerPageCommonHeading from "../../components/innerPageCommonHeading/InnerPageCommonHeading";
import VideoCards from "../../components/videoCards/VideoCards";
import "./experience.scss";
import bannerImage from "../../images/experienceBanner.jpg";

const Experience = () => {
  return (
    <div className="experience">
      {/* <InnerPageCommonHeading heading={"Experience"} /> */}
      <InnerPageBanner image={bannerImage} text={"Experience"} />
      <VideoCards />
    </div>
  );
};
export default Experience;
