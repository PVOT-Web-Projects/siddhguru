import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import "./galleryAshram.scss";
import image1 from "../../images/galleryImage1-min.jpg";
import image2 from "../../images/galleryImage2-min.jpg";
import image3 from "../../images/galleryImage3-min.jpg";
import image4 from "../../images/galleryImage4-min.jpg";
import image5 from "../../images/galleryImage5-min.jpg";
import image6 from "../../images/galleryImage6-min.jpg";
import image7 from "../../images/galleryImage7-min.jpg";
import image8 from "../../images/galleryImage8-min.jpg";
import image9 from "../../images/galleryImage9-min.jpg";
import image10 from "../../images/galleryImage10-min.jpg";
import image11 from "../../images/galleryImage11-min.jpg";
import image12 from "../../images/galleryImage12-min.jpg";
import image13 from "../../images/galleryImage13-min.jpg";
import image14 from "../../images/galleryImage14-min.jpg";
import image15 from "../../images/galleryImage15-min.jpg";
import image16 from "../../images/galleryImage16-min.jpg";
import image17 from "../../images/galleryImage17-min.jpg";
import image18 from "../../images/galleryImage18-min.jpg";
import image19 from "../../images/galleryImage19-min.jpg";
import image20 from "../../images/galleryImage20-min.jpg";
import image21 from "../../images/galleryImage21-min.jpg";
import closeIcon from "../../images/closeIcon.svg";
import { useState } from "react";

const images = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  image12,
  image13,
  image14,
  image15,
  image16,
  image17,
  image18,
  image19,
  image20,
  image21,
];

const GalleryAshram = () => {
  const [data, setData] = useState({ img: "", index: 0 });
  const viewImage = (img, index) => {
    setData({ img, index });
    console.log(data.img);
  };

  const handleNext = (action) => {
    let index = data.index;
    if (action === "next-img") {
      setData({ img: images[index + 1], index: index + 1 });
      document.body.style.overflow = "hidden";
    }
    if (action === "prev-img") {
      setData({ img: images[index - 1], index: index - 1 });
      document.body.style.overflow = "hidden";
    }
    if (!action) {
      setData({ img: "", index: 0 });
      document.body.style.overflow = "unset";
    }
  };

  return (
    <>
      {data.img && (
        <div className="imagePopup">
          <img
            src={closeIcon}
            alt="close"
            className="close"
            onClick={() => handleNext()}
          />
          <button onClick={() => handleNext("prev-img")} className="prev">
            Previous
          </button>
          <img src={data.img} alt="imagePopup" />
          <button onClick={() => handleNext("next-img")} className="next">
            Next
          </button>
        </div>
      )}
      <div className="galleryAshram">
        <div className="galleryAshram_wrapper">
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 575: 1, 767: 2, 991: 3, 1199: 4 }}
          >
            <Masonry gutter="20px">
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={index}
                  onClick={() => viewImage(image, index)}
                />
              ))}
            </Masonry>
          </ResponsiveMasonry>
        </div>
      </div>
    </>
  );
};
export default GalleryAshram;
