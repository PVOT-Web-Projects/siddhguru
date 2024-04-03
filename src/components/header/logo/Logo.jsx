import { Link } from "react-router-dom";
import logo from "../../../images/newLogo.png";
import "./logo.scss";

const Logo = () => {
  return (
    <div className="logo">
      <Link to={"/"}>
      <img src={logo} alt="logo" />
      </Link>
    </div>
  );
};
export default Logo;
