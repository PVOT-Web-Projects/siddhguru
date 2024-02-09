import "./innerPageBanner.scss";

const InnerPageBanner = ({ image, text, color }) => {
  return (
    <div className="innerPageBanner">
      <div className="innerPageBanner_wrapper">
        <img src={image} alt="bannerImage" />
        <div className="bannerText" style={{ color: color }}>
          {text}
        </div>
      </div>
    </div>
  );
};
export default InnerPageBanner;
