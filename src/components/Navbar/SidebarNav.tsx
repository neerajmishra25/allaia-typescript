import React from "react";
import "./SideNavbar.css";
import { AiOutlineClose } from "react-icons/ai";
import Logo from "../Logo/Logo";
import NavMenu from "../NavMenu/NavMenu";

interface SidebarNavProps {
  show?: boolean;
  handleClick: () => void;
}
const SidebarNav: React.FC<SidebarNavProps> = ({ show, handleClick }) => {
  let drawerClasses = "side-drawer";
  if (show) {
    drawerClasses = "side-drawer open";
  }
  return (
    <div id="mySidenav" className={`sidenav ${drawerClasses}`}>
      <div className="mobile-header">
        <div className="sidebar-logo-container">
          <Logo color="black" />
        </div>
        <div className="close-icon-container">
          <AiOutlineClose onClick={handleClick} />
        </div>
      </div>
      <div className="mobile-menu">
        <NavMenu />
      </div>
    </div>
  );
};

export default SidebarNav;
