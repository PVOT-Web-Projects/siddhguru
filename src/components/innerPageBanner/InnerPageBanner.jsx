import "./innerPageBanner.scss"

const InnerPageBanner = ({image}) => {
  return (
    <div className="innerPageBanner">
      <div className="innerPageBanner_wrapper">
        <img src={image} alt="bannerImage" />
      </div>
    </div>
  );
};
export default InnerPageBanner;
