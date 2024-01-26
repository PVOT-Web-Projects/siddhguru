import "./navbar.scss";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-submenu/dist/index.css";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Offcanvas,
} from "react-bootstrap";
import { DropdownSubmenu } from "react-bootstrap-submenu";
import { useState } from "react";

const Menu = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Only trigger once
  });
  const [showSubMenu, setShowSubMenu] = useState(false);
  const [showSubMenu2, setShowSubMenu2] = useState(false);
  const [offcanvasVisible, setOffcanvasVisible] = useState(false);

  const toggleBtn = () => {
    setOffcanvasVisible(!offcanvasVisible);
  };

  const handleOffcanvasHide = () => {
    setOffcanvasVisible((prevVisible) => !prevVisible);
  };

  const handleMouseEnter = () => {
    setShowSubMenu(true);
  };
  const handleMouseLeave = () => {
    setShowSubMenu(false);
  };
  const handleMouseEnter2 = () => {
    setShowSubMenu2(true);
  };
  const handleMouseLeave2 = () => {
    setShowSubMenu2(false);
  };

  return (
    <Navbar expand={false}>
      <Container fluid>
        <Navbar.Brand href="#"></Navbar.Brand>
        <Nav className="dekstop">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 0 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="padding"
          >
            <NavDropdown
              title="Siddhguru"
              id="basic-nav-dropdown"
              className="dropdown"
              show={showSubMenu2}
              onMouseEnter={handleMouseEnter2}
              onMouseLeave={handleMouseLeave2}
            >
              <DropdownSubmenu
                title={
                  <Link
                    to="/siddhguru1/the-saint"
                    className="line_underscore nav-link"
                  >
                    The Saint
                  </Link>
                }
                className="react_submenu"
              >
                <HashLink to="/siddhguru1/the-saint/#life_of_nutshell">
                  Life in a Nutshell
                </HashLink>
                <NavDropdown.Divider className="navbar_divider" />
                <HashLink to="/siddhguru1/the-saint#kundalini" smooth>
                  Sadhana & Kundalini Invocation
                </HashLink>
                <NavDropdown.Divider className="navbar_divider" />
                <HashLink to="/siddhguru1/the-saint#asht_siddhi's_&_nav_nidhis">
                  Siddhis and Nidhis
                </HashLink>
                <NavDropdown.Divider className="navbar_divider" />
                <HashLink to="/siddhguru1/the-saint#mission">Mission</HashLink>
              </DropdownSubmenu>

              <NavDropdown.Divider className="navbar_divider" />
              <DropdownSubmenu
                href="#action/3.7"
                title={
                  <Link
                    to="/siddhguru1/Vision"
                    className="line_underscore nav-link"
                  >
                    Vision
                  </Link>
                }
                className="react_submenu"
              >
                <HashLink to="/siddhguru1/vision#anant_diksha">
                  Divine Touch (Digital Diksha)
                </HashLink>
                <NavDropdown.Divider className="navbar_divider" />
                <HashLink to="/siddhguru1/vision#siddhasana">
                  Siddhasana
                </HashLink>
                <NavDropdown.Divider className="navbar_divider" />
                <HashLink to="/siddhguru1/vision#ashram">Ashram</HashLink>
                <NavDropdown.Divider className="navbar_divider" />
                <HashLink to="/siddhguru1/vision#world_spiritual_forum">
                  World Spiritual Forum
                </HashLink>
              </DropdownSubmenu>
              <NavDropdown.Divider className="navbar_divider" />
              <DropdownSubmenu
                href="#action/3.7"
                title={
                  <Link
                    to="/siddhguru1/core-wisdom"
                    className="line_underscore nav-link"
                  >
                    Core Wisdom
                  </Link>
                }
                className="react_submenu"
              >
                <NavDropdown.Item href="#action/8.1">
                  Miracles of Vedic Science
                </NavDropdown.Item>
              </DropdownSubmenu>
            </NavDropdown>
          </motion.div>

          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 0 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link
              to="/siddhguru1/about-ashram"
              className="line_underscore nav-link"
            >
              About Ashram
            </Link>
          </motion.div>
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 0 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {/* <Nav.Link href="#link" className="line_underscore">
              Knowledge
            </Nav.Link> */}
            <Link
              to="/siddhguru1/knowledge"
              className="line_underscore nav-link"
            >
              Knowledge
            </Link>
          </motion.div>
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 0 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Link
              to="/siddhguru1/activities"
              className="line_underscore nav-link"
            >
              Activities
            </Link>
          </motion.div>
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 0 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Link
              to={"/siddhguru1/events"}
              className="line_underscore nav-link"
            >
              Events
            </Link>
          </motion.div>

          <motion.p
            ref={ref}
            initial={{ opacity: 0, y: 0 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="padding"
          >
            <NavDropdown
              title={
                <Link to="/siddhguru1/centers" className="nav_link">
                  Centers
                </Link>
              }
              id="basic-nav-dropdown"
              className="dropdown"
              show={showSubMenu}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <NavDropdown.Item href="#action/3.1">Indian</NavDropdown.Item>
              <NavDropdown.Divider className="navbar_divider" />
              <NavDropdown.Item href="#action/3.1">
                International
              </NavDropdown.Item>
            </NavDropdown>
          </motion.p>
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 0 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Link
              to={"/siddhguru1/contact"}
              className="line_underscore nav-link"
            >
              Contact
            </Link>
          </motion.div>
        </Nav>

        {/* mobile design */}

        <Navbar.Toggle
          aria-controls="offcanvasNavbar"
          className="Mobile"
          onClick={toggleBtn}
        />
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
          show={offcanvasVisible}
          onHide={handleOffcanvasHide}
        >
          <Offcanvas.Header closeButton>
            {/* <Offcanvas.Title id="offcanvasNavbarLabel">Sidebar</Offcanvas.Title> */}
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              {/* <Link
                to="/siddhguru1/news"
                className="nav_link_mobile"
                onClick={() => setOffcanvasVisible(false)}
              >
                News
              </Link>
              <Nav.Link href="#link">Gallery</Nav.Link>
              <Link
                to="/siddhguru1/devotee"
                className="nav_link_mobile"
                onClick={() => setOffcanvasVisible(false)}
              >
                Register Devotee/Volunteer
              </Link>
              <Nav.Link href="#link">Donate </Nav.Link> */}
              <NavDropdown
                title="Siddhguru"
                id="basic-nav-dropdown"
                className="mobile_dropdown"
              >
                <NavDropdown
                  title={
                    <Link
                      to="/siddhguru1/the-saint"
                      className="nav_link_mobile"
                      onClick={() => setOffcanvasVisible(false)}
                    >
                      The Saint
                    </Link>
                  }
                  id="basic-nav-dropdown"
                  className="dropdownsubmenu_btn"
                >
                  <HashLink
                    to="/siddhguru1/the-saint#life_of_nutshell"
                    onClick={() => setOffcanvasVisible(false)}
                    className="dropdownsubmenu_btn"
                  >
                    Life in a Nutshell
                  </HashLink>
                  <NavDropdown.Divider className="navbar_divider" />
                  <HashLink
                    to="/siddhguru1/the-saint#kundalini"
                    smooth
                    onClick={() => setOffcanvasVisible(false)}
                    className="dropdownsubmenu_btn"
                  >
                    Sadhana & Kundalini Invocation
                  </HashLink>
                  <NavDropdown.Divider className="navbar_divider" />
                  <HashLink
                    to="/siddhguru1/the-saint#asht_siddhi's_&_nav_nidhis"
                    onClick={() => setOffcanvasVisible(false)}
                    className="dropdownsubmenu_btn"
                  >
                    Siddhis and Nidhis
                  </HashLink>
                  <NavDropdown.Divider className="navbar_divider" />
                  <HashLink
                    to="/siddhguru1/the-saint#mission"
                    onClick={() => setOffcanvasVisible(false)}
                    className="dropdownsubmenu_btn"
                  >
                    Mission
                  </HashLink>
                  {/* <NavDropdown.Divider /> */}
                </NavDropdown>
                <NavDropdown.Divider />
                <NavDropdown
                  title={
                    <Link
                      to="/siddhguru1/vision"
                      className="nav_link_mobile"
                      onClick={() => setOffcanvasVisible(false)}
                    >
                      Vision
                    </Link>
                  }
                  id="basic-nav-dropdown_sub"
                  className="dropdownsubmenu_btn"
                >
                  <HashLink
                    to="/siddhguru1/vision#anant_diksha"
                    onClick={() => setOffcanvasVisible(false)}
                    className="dropdownsubmenu_btn"
                  >
                    Divine Touch (Digital Diksha)
                  </HashLink>
                  <NavDropdown.Divider className="navbar_divider" />
                  <HashLink
                    to="/siddhguru1/vision#siddhasana"
                    smooth
                    onClick={() => setOffcanvasVisible(false)}
                    className="dropdownsubmenu_btn"
                  >
                    Siddhasana
                  </HashLink>
                  <NavDropdown.Divider className="navbar_divider" />
                  <HashLink
                    to="/siddhguru1/vision#ashram"
                    onClick={() => setOffcanvasVisible(false)}
                    className="dropdownsubmenu_btn"
                  >
                    Ashram
                  </HashLink>
                  <NavDropdown.Divider className="navbar_divider" />
                  <HashLink
                    to="/siddhguru1/vision#world_spiritual_forum"
                    onClick={() => setOffcanvasVisible(false)}
                    className="dropdownsubmenu_btn"
                  >
                    World Spiritual Forum
                  </HashLink>
                </NavDropdown>
                <NavDropdown.Divider />
                <NavDropdown
                  title={
                    <Link
                      to="/siddhguru1/core-wisdom"
                      className="nav_link_mobile"
                      onClick={() => setOffcanvasVisible(false)}
                    >
                      Core Wisdom
                    </Link>
                  }
                  id="basic-nav-dropdown_sub"
                  className="dropdownsubmenu_btn"
                >
                  <NavDropdown.Item
                    href="#action/3.1"
                    className="dropdownsubmenu_btn"
                  >
                    Miracles of Vedic Science
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown.Divider />
              </NavDropdown>
              <Link
                to="/siddhguru1/about-ashram"
                className="mobile_nav_link"
                onClick={() => setOffcanvasVisible(false)}
              >
                About Ashram
              </Link>
              <Link
                to="/siddhguru1/Knowledge"
                className="mobile_nav_link"
                onClick={() => setOffcanvasVisible(false)}
              >
                Knowledge
              </Link>
              <Link
                to="/siddhguru1/activities"
                className="mobile_nav_link"
                onClick={() => setOffcanvasVisible(false)}
              >
                Activities
              </Link>
              <Link
                to="/siddhguru1/events"
                className="mobile_nav_link"
                onClick={() => setOffcanvasVisible(false)}
              >
                Events
              </Link>
              <NavDropdown
                title={
                  <Link
                    to="/siddhguru1/centers"
                    className="nav_link_mobile"
                    onClick={() => setOffcanvasVisible(false)}
                  >
                    Centers
                  </Link>
                }
                id="basic-nav-dropdown"
                className="dropdown"
              >
                <NavDropdown.Item
                  href="#action/3.1"
                  id="basic-nav-dropdown_sub"
                  className="dropdownsubmenu_btn"
                >
                  Indian
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item
                  id="basic-nav-dropdown_sub"
                  className="dropdownsubmenu_btn"
                  href="#action/3.1"
                >
                  International
                </NavDropdown.Item>
                <NavDropdown.Divider />
              </NavDropdown>
              <Link
                to="/siddhguru1/contact"
                className="mobile_nav_link"
                onClick={() => setOffcanvasVisible(false)}
              >
                Contact Us
              </Link>
              <Link
                to="/siddhguru1/news"
                className="mobile_nav_link"
                onClick={() => setOffcanvasVisible(false)}
              >
                News
              </Link>
              {/* <Link to="#" className="mobile_nav_link">
                Gallery
              </Link> */}
              <Link
                to="/siddhguru1/devotee"
                className="mobile_nav_link"
                onClick={() => setOffcanvasVisible(false)}
              >
                Register Devotee/Volunteer
              </Link>
              <Link className="mobile_nav_link" href="#">
                Donate
              </Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};
export default Menu;
