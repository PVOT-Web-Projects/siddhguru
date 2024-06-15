import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import "./galleryAshram.scss";

import image8 from "../../images/008.jpg";

import image13 from "../../images/013.jpg";
import image14 from "../../images/014.jpg";

import image21 from "../../images/021.jpg";
import closeIcon from "../../images/closeIcon.svg";
import { useState } from "react";

const images = [image8, image13, image14, image21];

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
          <button
            disabled={data.index === 0 ? true : false}
            onClick={() => handleNext("prev-img")}
            className="prev"
          >
            Previous
          </button>
          <img src={data.img} alt="imagePopup" />
          <button
            disabled={data.index === images.length - 1 ? true : false}
            onClick={() => handleNext("next-img")}
            className="next"
          >
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
