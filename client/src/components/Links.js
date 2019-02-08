import React from "react";
import { Link } from "react-router-dom";

const Links = () => {
  return (
    <div className="link-container">
      <div className="menu-column">
        <Link className="link" to="/donor">
          Be A Donor!
        </Link>
      </div>
      <div className="menu-column">
        <Link className="link" to="/receiver">
          Be A Receiver!
        </Link>
      </div>
      <div className="menu-column">
        <Link className="link" to="/hospitals-dashboad">
          Hospitals Dashboard
        </Link>
      </div>
      <div className="menu-column">
        <Link className="link" to="/history">
          History
        </Link>
      </div>
      <div className="menu-column">
        <Link className="link" to="/register">
          Register here
        </Link>
      </div>
    </div>
  );
};

export default Links;
