import React, { useState } from "react";
import "@animxyz/core";
import { XyzTransition } from '@animxyz/react';
import { Link } from "react-router-dom";
import Logo from '../images/logo3.png';
import Styles from '../styles/Nav.module.css'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
  } from "reactstrap";

export function NavBar() {
    
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    
    return (
        <Navbar className="navbar-dark p-1 text-center" expand="md">
            <div className="container-fluid p-2">
                <NavbarBrand className="p-1 m-0 d-md-none" href="/"><img src={Logo} alt="Logo" width="100px" /></NavbarBrand>
                <NavbarToggler className="border-0" onClick={toggle} />
                <Collapse className="justify-content-center" isOpen={isOpen} navbar>
                    <Nav className="align-items-center mt-0 mt-1 mt-sm-1 mb-sm-1" navbar>
                        <XyzTransition appearVisible xyz="fade-100% duration-25 small-25%">    
                            <div>
                                <NavItem className="nav-item mx-4">
                                        <NavLink className={"fw-light " + Styles.navLink } href="#SobreMi">
                                            Sobre mi
                                        </NavLink>
                                </NavItem>
                            </div>
                        </XyzTransition>
                        <XyzTransition appearVisible xyz="fade-100% duration-25 small-25%">
                            <div>
                                <NavItem className="nav-item mx-4">
                                    <NavLink className={"fw-light " + Styles.navLink } href="#Experiencia">
                                        Experiencia
                                    </NavLink>
                                </NavItem>
                            </div>
                        </XyzTransition>
                        <XyzTransition appearVisible xyz="fade-100% duration-25 small-25%">
                            <div>
                                <NavItem className="nav-item mx-4">
                                    <Link to={"/"} className="m-0 p-1 d-none d-md-block text-white" href="/">
                                        <img src={Logo} alt="Logo" width="100px" />
                                    </Link>
                                </NavItem>
                            </div>
                        </XyzTransition>
                        <XyzTransition appearVisible xyz="fade-100% duration-25 small-25%">
                            <div>
                                <NavItem className="nav-item mx-4">
                                    <NavLink className={"fw-light " + Styles.navLink } href="#Proyectos">
                                        Trabajos
                                    </NavLink>
                                </NavItem>
                            </div>
                        </XyzTransition>
                        <XyzTransition appearVisible xyz="fade-100% duration-25 small-25%">
                            <div>
                                <NavItem className="nav-item mx-4">
                                    <NavLink className={"fw-light " + Styles.navLink } href="#Contacto">
                                        Contacto
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
