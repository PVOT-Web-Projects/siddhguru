import "./header.scss";
import Logo from "./logo/Logo";
import Menu from "./navbar/Navbar";

const Header = () => {
  return (
    <div className="header" id="hide-header">
      <div className="header_container">
        <div className="header_wrapper">
          <Logo />
          <Menu />
        </div>
      </div>
    </div>
  );
};
export default Header;
