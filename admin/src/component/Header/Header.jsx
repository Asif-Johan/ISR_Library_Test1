import React from "react";
import { Link } from "react-router-dom";

//import isoruet logo from public
import logo from "../Header/ISORUETlogo.png";
//import header css
import "../Header/Header.css";

//Header is used as Navbar

const Header = () => {
  //custom css for myStyles
  const logoStyle = {
    margin: "-25px",
    padding: "5px 10px",
    height: "5rem",
    weight: "5rem",
  };
  const containerStyle = {
    maxWidth: "90vw",
    margin: "auto",
  };

var toggleFlag = true;
  const toggleBurger = () => {
toggleFlag = !toggleFlag;
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary ">
        <div className="container-fluid text-center" style={containerStyle}>
          <Link className="navbar-brand " to="/">
            <img
              src={logo}
              alt="Islamic Society of RUET Logo"
              style={logoStyle}
            />
          </Link>

          <button 
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded={toggleFlag ? "true" : "false"}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div onClick={toggleBurger} className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link active home" aria-current="page">
                  Home
                </Link>
              </li>
            </ul>
            <div className="d-flex justify-content-center align-items-lg-center gap-2 flex-column flex-sm-column flex-md-row flex-lg-row">
              <div className="nav-item">
                <Link
                  to="/login"
                  className="nav-link text-success fw-bold hover-log">
                  Login
                </Link>
              </div>
              <div className="nav-item dropdown">
                <Link
                  to="/register"
                  className="nav-link bg-success text-white p-2 rounded hover-reg"  
                >
                 <span className="hover-text-reg">Register</span> 
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
