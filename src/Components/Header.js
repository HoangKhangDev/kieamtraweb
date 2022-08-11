import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <NavLink  className="navbar-brand" to="/">
              Rin
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <NavLink  className="nav-link" aria-current="page" to="/" >
                  Home
                </NavLink>
                <NavLink  className="nav-link" to="/about">
                  About
                </NavLink>
                <NavLink  className="nav-link" to="/login">
                  Login
                </NavLink>
              </div>
            </div>
          </div>
        </nav>
      </>
    );
  }
}
