import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";

export const Navbar = () => {
  const [authToken, setAuthToken] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    setAuthToken(token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    setAuthToken(null);
    window.location.reload();
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary custom-navbar">
      <div className="container-fluid">
        <Link to="/">
          <span className="navbar-brand" href="#"> StarWars </span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/">
                <span className="nav-link active" aria-current="page"> Home </span>
              </Link>
            </li>
            <li className="nav-item">
            <Link to="/databank">
                <span className="nav-link active" aria-current="page"> Databank </span>
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" aria-disabled="true">
                Private Area
              </a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <Link className="btn btn-outline-success" to="/login">
              Login
            </Link>
          </form>
        </div>
      </div>
    </nav>
  );
};
