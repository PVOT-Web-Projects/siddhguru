import "./galaryimage.scss";
import galaryimg1 from "../../images/galaryimg1.png";
import galaryimg2 from "../../images/galaryimg2.png";
import galaryimg3 from "../../images/galaryimg3.png";
import galaryimg4 from "../../images/galaryimg4.png";
import galaryimg5 from "../../images/galaryimg5.png";
import galaryimg6 from "../../images/galaryimg6.png";
function galaryimages(){
  
  return (
  
    <div className="galary_image_conatainer">
    <div className="galary_image">
      <div className="galary_img1">
        <img src={galaryimg1} className="galaryimg" />
      </div>
      <div className="galary_img1">
        <img src={galaryimg2} className="galaryimg" />
      </div>
      <div className="galary_img1">
        <img src={galaryimg3} className="galaryimg" />
      </div>
      <div className="galary_img1">
        <img src={galaryimg4} className="galaryimg" />
      </div>
      <div className="galary_img1">
        <img src={galaryimg5} className="galaryimg" />
      </div>
      <div className="galary_img1">
        <img src={galaryimg6} className="galaryimg" />
      </div>
    </div>

    </div>
   
  );
}
export default galaryimages;
