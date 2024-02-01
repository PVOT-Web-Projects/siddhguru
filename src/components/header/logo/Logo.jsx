import { Link } from "react-router-dom";
import logo from "../../../images/logo.png";
import "./logo.scss";

const Logo = () => {
  return (
    <div className="logo">
      <Link to={"/siddhguru"}>
      <img src={logo} alt="logo" />
      </Link>
    </div>
  );
};
export default Logo;
