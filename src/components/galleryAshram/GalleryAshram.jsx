import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import "./galleryAshram.scss";
import image1 from "../../images/galleryImage1.webp";
import image2 from "../../images/galleryImage2.webp";
import image4 from "../../images/galleryImage3.webp";
import image3 from "../../images/galleryImage4.webp";
import image5 from "../../images/galleryImage5.webp";
import image6 from "../../images/galleryImage6.webp";
import image7 from "../../images/galleryImage7.webp";
import image8 from "../../images/galleryImage8.webp";
import image9 from "../../images/galleryImage9.webp";
import image10 from "../../images/galleryImage10.webp";
import image11 from "../../images/galleryImage11.webp";
import image12 from "../../images/galleryImage12.webp";
import image13 from "../../images/galleryImage13.webp";
import image14 from "../../images/galleryImage14.webp";
import image15 from "../../images/galleryImage15.webp";
import image16 from "../../images/galleryImage16.webp";
import image17 from "../../images/galleryImage17.webp";
import image18 from "../../images/galleryImage18.webp";
import image19 from "../../images/galleryImage19.webp";
import image20 from "../../images/galleryImage20.webp";
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
