import "./innerPageBanner.scss";

const InnerPageBanner = ({ image, text, color, mobileImage }) => {
  return (
    <div className="innerPageBanner">
      <div className="innerPageBanner_wrapper">
        <img src={image} alt="bannerImage" className="deskImage" />
        <img src={mobileImage} alt="bannerImage" className="mobileImage" />
        <div className="bannerText" style={{ color: color }}>
          {text}
        </div>
      </div>
    </div>
  );
};
export default InnerPageBanner;
