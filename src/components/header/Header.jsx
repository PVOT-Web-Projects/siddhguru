import "./header.scss";
import Logo from "./logo/Logo";
import Navbar from "./navbar/Navbar";

const Header = () => {
  return (
    <div className="header">
      <div className="header_container">
        <div className="header_wrapper">
          <Logo />
          <Navbar />
        </div>
      </div>
    </div>
  );
};
export default Header;
