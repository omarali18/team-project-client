import { Box, Button } from '@mui/material';
import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
// import useAuth from '../../../Hooks/useAuth';
import "./Navbar.css"

const Navbar = () => {

    const [click, setClick] = useState(false);
    // const { user, logout } = useAuth()

    const handleClick = () => setClick(!click);

    return (
        <>
        <nav className="navbar">
            <div className="nav-container">
                <label className="nav-logo">
                SHOPIST
                </label>

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
                            to="/polices"
                            // activeClassName="active"
                            className="nav-links"
                            onClick={handleClick}
                        >
                            Police
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
                    <li className="nav-item">
                            <NavLink
                                   to="/login"
                                //    activeClassName="active"
                            className="nav-links"
                                    onClick={handleClick}
                                >
                                    Login
                                </NavLink>
                            </li>
                    

                    {/* {
                        user.email ?

                            <li className="nav-item">
                                <NavLink
                                    to="/login"
                                    // activeClassName="active"
                                    className="nav-links"
                                    onClick={handleClick}
                                >
                                    <Button className="logout-btn" sx={{ color: "white" }} onClick={logout}>logOut</Button>
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
                    } */}
                         <li className="nav-item ">
                        {/* <NavLink
                            to="/polices"
                            // activeClassName="active"
                            // className="nav-links"
                            className="shopping-cart"
                            onClick={handleClick}
                        > */}
                        <Box className="shopping-cart">
                            <i className="fas fa-shopping-cart"></i>
                        </Box>
                        {/* </NavLink> */}
                    </li>
                         <li className=" search-align">
                        {/* <NavLink
                            to="/polices"
                            // activeClassName="active"
                            className="nav-links"
                            onClick={handleClick}
                        > */}
                            <div className='search-box'>
                                <input className='search-text' type="text" placeholder='Search' />
                                <a className='search-btn' href=""><i className="fas fa-search"></i></a>
                            </div>
                        {/* </NavLink> */}
                    </li>

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