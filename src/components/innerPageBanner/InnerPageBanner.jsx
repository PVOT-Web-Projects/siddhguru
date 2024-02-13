import { useEffect, useState } from "react";
import "./innerPageBanner.scss";
import { Blurhash } from "react-blurhash";

const InnerPageBanner = ({
  image,
  text,
  color,
  mobileImage,
  bigText,
  bigText2,
  overlay,
}) => {
  const [imageLoader, setImageLoader] = useState(false);
  console.log(imageLoader);

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setImageLoader(true);
    };
    img.src = image;
  }, [image]);
  return (
    <>
      {!imageLoader && (
        <Blurhash
          hash="LEHLk~WB2yk8pyo0adR*.7kCMdnj"
          width="100%"
          height="100%"
          resolutionX={32}
          resolutionY={32}
          punch={1}
        />
      )}
      <div className="innerPageBanner">
        {imageLoader && (
          <div
            className={`innerPageBanner_wrapper ${overlay ? "overlay" : ""}`}
          >
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
                <br />
                {bigText2 && bigText2}
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
};
export default InnerPageBanner;
