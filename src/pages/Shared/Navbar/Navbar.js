import { Box, Button } from "@mui/material";
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
// import useAuth from '../../../Hooks/useAuth';
import "./Navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const { user, handleLogout } = useAuth()

  const handleClick = () => setClick(!click);

  return (
    <>
      <nav
        className="navbar"
        style={{
          boxShadow:
            "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
          paddingBottom: "70px",
          opacity: " 0.8",
        }}
      >
        <div className="nav-container">
          <label className="nav-logo">SHOPIST</label>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                to="/"
                // activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/hospitals"
                // activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Hospitals
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/schools"
                // activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                School
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/contact"
                // activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Contact
              </NavLink>
            </li>
            {/* {user.email && <li className="nav-item">
                        <NavLink
                            to="/dashboard"
                            // activeClassName="active"
                            className="nav-links"
                            onClick={handleClick}
                        >
                            Dashboard
                        </NavLink>
                    </li>} */}
            <li className="nav-item">
              <NavLink
                to="/dashboard"
                // activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Dashboard
              </NavLink>
            </li>
            {/* <li className="nav-item">
              <NavLink
                to="/login"
                //    activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Login
              </NavLink>
            </li> */}

            {
                        user.email ?

                            <li className="nav-item">
                                <NavLink
                                    to="/login"
                                    // activeClassName="active"
                                    className="nav-links"
                                    onClick={handleClick}
                                >
                                    <Button className="logout-btn" sx={{ color: "black" }} onClick={handleLogout}>logOut</Button>
                                </NavLink>
                            </li>
                            :
                            <li className="nav-item">
                                <NavLink
                                    to="/login"
                                    // activeClassName="active"
                                    className="nav-links"
                                    onClick={handleClick}
                                >
                                    Login
                                </NavLink>
                            </li>
                    }
            <li className="nav-item " style={{ paddingRight: "20px" }}>
              <NavLink
                to="/cart"
                // activeClassName="active"
                // className="nav-links"
                className="shopping-cart"
                onClick={handleClick}
              >
                <Box className="shopping-cart">
                  <i className="fas fa-shopping-cart"></i>
                </Box>
              </NavLink>
            </li>
            <li className="nav-item ">
              <NavLink
                to="/wishlist"
                // activeClassName="active"
                // className="nav-links"
                className="shopping-cart"
                onClick={handleClick}
              >
                <Box className="shopping-cart">
                  <i className="fas fa-shopping-bag"></i>
                </Box>
              </NavLink>
            </li>
            {/* <li className=" search-align">
             
              <div className="search-box">
                <input
                  className="search-text"
                  type="text"
                  placeholder="Search"
                />
                <a className="search-btn" href="">
                  <i className="fas fa-search"></i>
                </a>
              </div>
            </li> */}
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;