import "./navbar.scss";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-submenu/dist/index.css";

import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Offcanvas,
} from "react-bootstrap";
import { DropdownSubmenu } from "react-bootstrap-submenu";
import { useState } from "react";
import { Link } from "react-router-dom";
const Menu = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Only trigger once
  });
  const [showSubMenu, setShowSubMenu] = useState(false);
  const [showSubMenu2, setShowSubMenu2] = useState(false);

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
            transition={{ duration: 0.6, delay: 1.2 }}
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
                title="The Saint"
                href="/the-saint"
                className="react_submenu"
              >
                <NavDropdown.Item href="#action/8.1">
                  Life in a Nutshell
                </NavDropdown.Item>
                <NavDropdown.Divider className="navbar_divider" />
                <NavDropdown.Item href="#action/8.1">
                  Sadhana & Kundalini Invocation
                </NavDropdown.Item>
                <NavDropdown.Divider className="navbar_divider" />
                <NavDropdown.Item href="#action/8.1">
                  Siddhis and Nidhis
                </NavDropdown.Item>
                <NavDropdown.Divider className="navbar_divider" />
                <NavDropdown.Item href="#action/8.1">Mission</NavDropdown.Item>
              </DropdownSubmenu>
              <NavDropdown.Divider className="navbar_divider" />
              <DropdownSubmenu
                href="#action/3.7"
                title="Vision"
                className="react_submenu"
              >
                <NavDropdown.Item href="#action/8.1">
                  Divine Touch (Digital Diksha)
                </NavDropdown.Item>
                <NavDropdown.Divider className="navbar_divider" />
                <NavDropdown.Item href="#action/8.1">
                  Siddhasana
                </NavDropdown.Item>
                <NavDropdown.Divider className="navbar_divider" />
                <NavDropdown.Item href="#action/8.1">Ashram</NavDropdown.Item>
                <NavDropdown.Divider className="navbar_divider" />
                <NavDropdown.Item href="#action/8.1">
                  World Spiritual Forum
                </NavDropdown.Item>
              </DropdownSubmenu>
              <NavDropdown.Divider className="navbar_divider" />
              <DropdownSubmenu
                href="#action/3.7"
                title="Core Wisdom"
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
            transition={{ duration: 0.6, delay: 1.3 }}
          >
            {/* <Nav.Link href="#link" className="line_underscore">
              About Ashram
            </Nav.Link> */}
            <Link to="/siddhguru1/about-ashram" className="line_underscore nav-link">About Ashram</Link>
          </motion.div>
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 0 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 1.4 }}
          >
            <Nav.Link href="#link" className="line_underscore">
              Knowledge
            </Nav.Link>
          </motion.div>
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 0 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 1.5 }}
          >
            <Nav.Link href="#link" className="line_underscore">
              Activities
            </Nav.Link>
          </motion.div>
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 0 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 1.6 }}
          >
            {/* <Nav.Link href="/siddhguru1/events" className="line_underscore">
              Events
            </Nav.Link> */}
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
            transition={{ duration: 0.6, delay: 1.7 }}
            className="padding"
          >
            <NavDropdown
              title="Centers"
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
            transition={{ duration: 0.6, delay: 1.8 }}
          >
            <Nav.Link href="#link" className="line_underscore">
              Contact Us
            </Nav.Link>
          </motion.div>
        </Nav>
        <Navbar.Toggle aria-controls="offcanvasNavbar" className="Mobile" />
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
        >
          <Offcanvas.Header closeButton>
            {/* <Offcanvas.Title id="offcanvasNavbarLabel">Sidebar</Offcanvas.Title> */}
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="#link">News</Nav.Link>
              <Nav.Link href="#link">Gallery</Nav.Link>
              <Nav.Link href="#link">Register Devotee/Volunteer</Nav.Link>
              <Nav.Link href="#link">Donate </Nav.Link>
              <NavDropdown
                title="Siddhguru"
                id="basic-nav-dropdown"
                className="mobile_dropdown"
              >
                <NavDropdown
                  title="The Saint"
                  id="basic-nav-dropdown"
                  className="dropdownsubmenu_btn"
                >
                  <NavDropdown.Item
                    href="#action/3.1"
                    className="dropdownsubmenu_btn"
                  >
                    Life in a Nutshell
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item
                    href="#action/3.1"
                    className="dropdownsubmenu_btn"
                  >
                    Sadhana & Kundalini Invocation
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item
                    href="#action/3.1"
                    className="dropdownsubmenu_btn"
                  >
                    Siddhis and Nidhis
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item
                    href="#action/3.1"
                    className="dropdownsubmenu_btn"
                  >
                    Mission
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                </NavDropdown>
                <NavDropdown.Divider />
                <NavDropdown
                  title="Vision"
                  id="basic-nav-dropdown_sub"
                  className="dropdownsubmenu_btn"
                >
                  <NavDropdown.Item
                    href="#action/3.1"
                    className="dropdownsubmenu_btn"
                  >
                    Divine Touch (Digital Diksha)
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item
                    href="#action/3.1"
                    className="dropdownsubmenu_btn"
                  >
                    Siddhasana
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item
                    href="#action/3.1"
                    className="dropdownsubmenu_btn"
                  >
                    Ashram
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item
                    href="#action/3.1"
                    className="dropdownsubmenu_btn"
                  >
                    World Spiritual Forum
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                </NavDropdown>
                <NavDropdown.Divider />
                <NavDropdown
                  title="Core Wisdom"
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
              <Nav.Link href="/siddhguru1/about-ashram">About Ashram</Nav.Link>
              <Nav.Link href="#link">Knowledge</Nav.Link>
              <Nav.Link href="#link">Activities</Nav.Link>
              <Nav.Link href="/siddhguru1/events">Events</Nav.Link>
              <NavDropdown
                title="Centers"
                id="basic-nav-dropdown"
                className="dropdown"
              >
                <NavDropdown.Item href="#action/3.1">Indian</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.1">
                  International
                </NavDropdown.Item>
                <NavDropdown.Divider />
              </NavDropdown>
              <Nav.Link href="#link">Contact Us</Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};
export default Menu;
