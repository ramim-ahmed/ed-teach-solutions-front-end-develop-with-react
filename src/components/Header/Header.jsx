/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
  return (
    <div className=" border-bottom">
      <div className="container">
        <nav class="navbar navbar-expand-lg navbar-light bg-light rounded">
          <a class="navbar-brand text-info font-weight-bolder" href="/"></a>
          <button
            class="custom-toggler navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarsExample09"
            aria-controls="navbarsExample09"
            aria-expanded={!isNavCollapsed ? true : false}
            aria-label="Toggle navigation"
            onClick={handleNavCollapse}
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div
            class={`${isNavCollapsed ? "collapse" : ""} navbar-collapse`}
            id="navbarsExample09"
          >
            <Link to='/services' className="nav-link text-black nav-items" >
              Services
            </Link>
            <Link to='/support' className="nav-link text-black nav-items" >
              Support
            </Link>
            <Link to='/login' className="nav-link text-black nav-items" >
              Login
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
