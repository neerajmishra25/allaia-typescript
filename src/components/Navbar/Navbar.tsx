import React, { useState } from "react";
import Logo from "../Logo/Logo";
import NavMenu from "../NavMenu/NavMenu";
import "./Navbar.scss";
import { Desktop, Laptop, Tablet } from "../../Devices";
import { FaBars, FaPhone } from "react-icons/fa";
import SidebarNav from "./SidebarNav";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="nav-wrapper">
      <div className="container nav-container">
        <Laptop>
          <div className="burger-menu">
            <FaBars onClick={handleClick} />
          </div>
        </Laptop>
        <div className="logo-container">
          <Logo width={100} height={35} />
        </div>
        <Desktop>
          <div className="nav-links-wrapper">
            <NavMenu />
          </div>
        </Desktop>
        <div className="help-text-wrapper">
          <Desktop>
            <strong>
              <span>Need Help?</span> +94 423-23-221
            </strong>
          </Desktop>

          <Laptop>
            <div className="phone-icon">
              <FaPhone />
            </div>
          </Laptop>
          <Laptop>
            <div className="side-menu">
              <SidebarNav show={isOpen} handleClick={handleClick} />
            </div>
          </Laptop>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
