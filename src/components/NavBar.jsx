import React, { useState } from "react";
import "@animxyz/core";
import { XyzTransition } from '@animxyz/react';
import { NavLink } from "react-router-dom";
import Styles from '../styles/Nav.module.css'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
  } from "reactstrap";

export function NavBar({titulo1, titulo2, titulo3, titulo4}) {
    
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    
    return (
        <Navbar className="navbar-dark p-1 text-center my-sm-5" expand="md">
            <div className="container-fluid p-2 justify-content-center">
                <NavbarToggler className="border-0" onClick={toggle} />
                <Collapse className="justify-content-center" isOpen={isOpen} navbar>
                    <Nav className={`align-items-center justify-content-center mt-0 mt-1 mt-sm-1 mb-sm-1 gap-5 ${Styles.nav}`} navbar>
                        <XyzTransition appearVisible xyz="fade-100% duration-25 small-25%">    
                            <div>
                                <NavItem className="nav-item mx-4">
                                        <NavLink exact to="/" className={({isActive}) => isActive ? Styles.active : Styles.navLink}>
                                            {titulo1}
                                        </NavLink>
                                </NavItem>
                            </div>
                        </XyzTransition>
                        <XyzTransition appearVisible xyz="fade-100% duration-25 small-25%">
                            <div>
                                <NavItem className="nav-item mx-4">
                                    <NavLink exact to="/experience" className={({isActive}) => isActive ? Styles.active : Styles.navLink}>
                                        {titulo2}
                                    </NavLink>
                                </NavItem>
                            </div>
                        </XyzTransition>
                        <XyzTransition appearVisible xyz="fade-100% duration-25 small-25%">
                            <div>
                                <NavItem className="nav-item mx-4">
                                    <NavLink exact to="/projects" className={({isActive}) => isActive ? Styles.active : Styles.navLink}>
                                        {titulo3}
                                    </NavLink>
                                </NavItem>
                            </div>
                        </XyzTransition>
                        <XyzTransition appearVisible xyz="fade-100% duration-25 small-25%">
                            <div>
                                <NavItem className="nav-item mx-4">
                                    <NavLink to="/contact" className={({isActive}) => isActive ? Styles.active : Styles.navLink}>
                                        {titulo4}
                                    </NavLink>
                                </NavItem>
                            </div>
                        </XyzTransition>
                    </Nav>
                </Collapse>
            </div>
        </Navbar>
    )
}
