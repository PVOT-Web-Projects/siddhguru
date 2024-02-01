import InnerPageCommonHeading from "../../components/innerPageCommonHeading/InnerPageCommonHeading";
import VideoCards from "../../components/videoCards/VideoCards";
import "./experience.scss";

const Experience = () => {
  return (
    <div className="experience">
      <InnerPageCommonHeading heading={"Experience"} />
      <VideoCards />
    </div>
  );
};
export default Experience;
