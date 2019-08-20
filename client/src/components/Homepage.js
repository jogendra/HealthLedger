import React, { useState, useEffect } from "react";

// Static
import icon from "../assets/img/icon.png";

// Components
import Links from "./Links";
import Menu from "./Menu";

const Homepage = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const icon = document.getElementsByClassName("icon")[0];
    icon.style.opacity = "1";

    window.addEventListener("resize", () => {
      window.innerWidth < 1024 ? setIsMobile(true) : setIsMobile(false);
    });
    window.innerWidth < 1024 ? setIsMobile(true) : setIsMobile(false);
  });

  return (
    <div id="homepage">
      <div className="overlay">
        <Menu isMobile={isMobile} />

        <div className="container">
          <a
            className="link github"
            href="https://github.com/jogendra/HealthLedger"
          >
            <i className="fab fa-github" />
            Source Code
          </a>

          <img className="icon" src={icon} alt="health ledger icon" />

          <h1>HealthLedger</h1>

          <h6>
            Applsication for tracking Organs donations in hospitals and
            minimizing the scope of Organ trafficking using Blockchain
            (Hyperledger) technology.
          </h6>

          {!isMobile && <Links />}
        </div>
      </div>
    </div>
  );
};

export default Homepage;
