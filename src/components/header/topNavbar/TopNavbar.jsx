import { Link } from "react-router-dom";
import "./topNavbar.scss";
const TopNavbar = () => {
  return (
    <div className="topNavbar" id="hide-topNav">
      <div className="topNavbar_container">
        <div className="topNavbar_wrapper">
          <ul>
            <li>
              <Link to="/news">News</Link>
            </li>
            {/* <li>
              <Link to="/galary">Gallery</Link>
            </li> */}
            <li>
              <Link to="/blog">Blogs</Link>
            </li>
            <li>
              <Link to="/devotee">Register Devotee/Volunteer</Link>
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
