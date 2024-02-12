import InnerPageBanner from "../../components/innerPageBanner/InnerPageBanner";
// import InnerPageCommonHeading from "../../components/innerPageCommonHeading/InnerPageCommonHeading";
import VideoCards from "../../components/fourvideocard/fourvideocard";
// import VideoCards_one from "../../components/videoCards/VideoCards";
import "./experience.scss";
import bannerImage from "../../images/Experience-Banners-D_2.jpg";
import mobilebannerImage from "../../images/Experience-Banners-M_2.jpg";

const Experience = () => {
  return (
    <div className="experience">
      {/* <InnerPageCommonHeading heading={"Experience"} /> */}
      <InnerPageBanner
        image={bannerImage}
        mobileImage={mobilebannerImage}
        text={" Divine Encounters: Sharing Experiences with SiddhGuru"}
      />
      <VideoCards />
      {/* <VideoCards_one /> */}
    </div>
  );
};
export default Experience;
