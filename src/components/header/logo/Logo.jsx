import { useContext } from "react";
import { Link } from "react-router-dom";
import newLogo from "../../../images/newLogo.png";
import hindiLogo from "../../../images/newLogoHindi.png";
import "./logo.scss";
import LanguageContext from "../../../components/language/Language";
const Logo = () => {
  const { language } = useContext(LanguageContext); 
  const deskImg = language === "en" ? newLogo : hindiLogo;

  return (
    <div className="logo">
      <Link to={"/"}>
      <img src={deskImg} alt="logo" />
      </Link>
    </div>
  );
};
export default Logo;
