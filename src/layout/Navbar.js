import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-primary navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
          <i class="fa-solid fa-t"></i><i class="fa-solid fa-5"></i> Restful Web App
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/home">
                <i class="fa-solid fa-users"></i> Users
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  <i className="fas fa-info-circle"></i> About
                </Link>
              </li>       
            </ul>
            <Link className="btn btn-outline-light" to="/addUser">
              <i className="fas fa-user-plus"></i> Add User
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
