import "./header.scss";
import Logo from "./logo/Logo";
import Menu from "./navbar/Navbar";
// import Navbar from "./navbar/Navbar";

const Header = () => {
  return (
    <div className="header">
      <div className="header_container">
        <div className="header_wrapper">
          <Logo />
          {/* <Navbar /> */}
          <Menu />
        </div>
      </div>
    </div>
  );
};
export default Header;
