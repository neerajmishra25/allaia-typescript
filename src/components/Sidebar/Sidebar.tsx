import React from "react";
import "./Sidebar.css";
import { AiOutlineClose } from "react-icons/ai";

interface SidebarProps {
  show?: boolean;
  handleClick: () => void;
}
const Sidebar: React.FC<SidebarProps> = ({ show, handleClick, children }) => {
  let drawerClasses = "side-drawer";
  if (show) {
    drawerClasses = "side-drawer open";
  }
  return (
    <div id="sidebar" className={`sidebar ${drawerClasses}`}>
      <div className="close-icon-container">
        <AiOutlineClose onClick={handleClick} />
      </div>
      {children}
    </div>
  );
};

export default Sidebar;
