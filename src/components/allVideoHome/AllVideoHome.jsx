import "./allVideoHome.scss";

import lotus_image from "../../images/lotus.png";
import FormHomePage from "../Form_homePage/FormHomePage";
function AllVideoHome() {
  return (
    <div className="sidhhguru_first_container">
      <div className="sidhhguru_layout">
        <div className="sidhhguru_gurudev_first_content">
          <div className="allVideoLeft">
            <FormHomePage />
          </div>
        </div>
        <div className="lotus_img_outer">
          <img src={lotus_image} alt="none" className="lotus_img" />
        </div>
      </div>
    </div>
  );
}
export default AllVideoHome;
