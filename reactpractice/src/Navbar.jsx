// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import Logo from "./assets/white.png";

const Navbar = () => {
  const [searchInput, setSearch] = useState("");

  const handleInput = (e) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <nav className="navbar navbar-custom navbar-dark bg-dark fixed-top ">
        <div className="container-fluid">
          <button
            className="navbar-toggler custom-togler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasDarkNavbar"
            aria-controls="offcanvasDarkNavbar"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="navbar-brand logo">
            <a href="" target="_blank">
              <img src={Logo} className="logo" alt="logo" />
            </a>
          </div>

          <div className="icons">
            <a href="">
              <i className=" iconClass  fa-brands fa-searchengin"></i>
            </a>
            <a href="">
              <i className="iconClass fa-solid fa-cart-arrow-down"></i>
            </a>
          </div>
          <div
            className="offcanvas offcanvas-start text-bg-dark"
            tabIndex={-1}
            id="offcanvasDarkNavbar"
            aria-labelledby="offcanvasDarkNavbarLabel"
          >
            <div className="offcanvas-header">
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              />
            </div>
            <div className="   offcanvas-body">
              <ul className=" navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    NEW IN
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    TREDING
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    NECKLACE
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    BRACELETS
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    RINGS
                  </a>
                </li>
              </ul>
              <form className="d-flex mt-3" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  value={searchInput}
                  placeholder="Search"
                  aria-label="Search"
                  onChange={handleInput}
                />
                <button className="btn btn-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
