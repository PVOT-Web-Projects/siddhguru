import { Link } from "react-router-dom";
import "./topNavbar.scss";
const TopNavbar = () => {
  return (
    <div className="topNavbar" id="hide-topNav">
      <div className="topNavbar_container">
        <div className="topNavbar_wrapper">
          <ul>
            <li>
              <Link to="/siddhguru1/news">News</Link>
            </li>
            <li>
            <Link to="/siddhguru1/galary">Gallery</Link>
            </li>
            <li>
              <a href="#">Register Devotee/Volunteer</a>
            </li>
            <li>
              <a href="#">Donate</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default TopNavbar;