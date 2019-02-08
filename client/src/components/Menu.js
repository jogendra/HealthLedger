import React, { useState, useEffect } from "react";

// Components
import Links from "./Links";
import MenuIcon from "./MenuIcon";

const Menu = ({ isMobile }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const menuColumn = Array.from(
      document
        .getElementsByClassName("menu-wrapper")[0]
        .getElementsByClassName("menu-column")
    );

    const linkContainer = document
      .getElementsByClassName("menu-wrapper")[0]
      .getElementsByClassName("link-container")[0];

    addDelayTime(menuColumn);

    if (isOpen) {
      showHideMenu("translateX(0)", "1", menuColumn);
    } else {
      showHideMenu("translateX(-100%)", "0", menuColumn);
    }
  });

  const setIsOpenFunc = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="menu-wrapper">
      {isMobile && <MenuIcon isOpen={isOpen} setIsOpen={setIsOpenFunc} />}

      <Links />
    </div>
  );
};

// Function to add delay time to All menu columns
function addDelayTime(elems) {
  let delay = 0;
  elems.forEach(elem => {
    elem.style.transitionDelay = `${delay}s`;
    delay += 0.1;
  });
}

// Function to show/hide menu columns
function showHideMenu(translate, opacity, elems) {
  elems.forEach(elem => {
    elem.style.transform = translate;
    elem.style.opacity = opacity;
  });
}

export default Menu;
