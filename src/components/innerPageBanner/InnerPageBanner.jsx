import "./innerPageBanner.scss";

const InnerPageBanner = ({ image, text, color, mobileImage, bigText }) => {
  return (
    <div className="innerPageBanner">
      <div className="innerPageBanner_wrapper">
        <img src={image} alt="bannerImage" className="deskImage" />
        <img src={mobileImage} alt="bannerImage" className="mobileImage" />
        {text && (
          <div className="bannerText" style={{ color: color }}>
            {text}
          </div>
        )}
        {bigText && (
          <div className="bannerBigText" style={{ color: color }}>
            {bigText}
          </div>
        )}
      </div>
    </div>
  );
};
export default InnerPageBanner;
