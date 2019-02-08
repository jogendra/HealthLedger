import React from "react";

const MenuIcon = ({ setIsOpen, isOpen }) => {
  return (
    <div id="menu-icon" onClick={() => setIsOpen(!isOpen)}>
      <div className={`line ${isOpen ? "js-rotate-1" : ""}`} />
      <div className={`line ${isOpen ? "js-opacity" : ""}`} />
      <div className={`line ${isOpen ? "js-rotate-2" : ""}`} />
    </div>
  );
};

export default MenuIcon;
