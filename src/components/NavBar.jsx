import React, { useState } from "react";
import "@animxyz/core";
import { XyzTransition } from "@animxyz/react";
import { NavLink } from "react-router-dom";
import Styles from "../styles/Nav.module.css";
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from "reactstrap";
import Switch from "react-switch";
import { BsTranslate } from "react-icons/bs";

function Navlinks({ tittle, to, xyz }) {
  return (
    <XyzTransition appearVisible xyz={xyz}>
      <div>
        <NavItem className="nav-item mx-4">
          <NavLink
            exact
            to={to}
            className={({ isActive }) =>
              isActive ? Styles.active : Styles.navLink
            }
          >
            {tittle}
          </NavLink>
        </NavItem>
      </div>
    </XyzTransition>
  );
}

export function NavBar({
  titulo1,
  titulo2,
  titulo3,
  titulo4,
  xyz,
  handleTranslate,
  translated,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar
      className="navbar-dark p-1 text-center my-sm-5 justify-content-center"
      expand="md"
    >
      <div className="container-fluid p-5 justify-content-center">
        <NavbarToggler className="border-0" onClick={toggle} />
        <Collapse className="justify-content-center" isOpen={isOpen} navbar>
          <Nav
            className={`align-items-center justify-content-center mt-0 mt-1 mt-sm-1 mb-sm-1 gap-5 ${Styles.nav}`}
            navbar
          >
            <Navlinks tittle={titulo1} xyz={xyz} to="/" />
            <Navlinks tittle={titulo2} xyz={xyz} to="/experience" />
            <Navlinks tittle={titulo3} xyz={xyz} to="/projects" />
            <Navlinks tittle={titulo4} xyz={xyz} to="/contact" />
          </Nav>
        </Collapse>
      </div>
      <div className="p-5 d-sm-none">
        <Switch
          onChange={handleTranslate}
          checked={translated}
          onColor="#40ea2f"
          className="react-switch"
          handleDiameter={30}
          offColor="#f6fafd"
          offHandleColor="#40ea2f"
          height={40}
          width={85}
          checkedHandleIcon={
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                fontSize: 18,
                color: "#000",
              }}
            >
              <BsTranslate />
            </div>
          }
          uncheckedHandleIcon={
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                fontSize: 18,
                color: "#fff",
              }}
            >
              <BsTranslate />
            </div>
          }
          uncheckedIcon={
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                fontSize: 18,
                fontWeight: 700,
                color: "#000",
              }}
            >
              ES
            </div>
          }
          checkedIcon={
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                fontSize: 18,
                fontWeight: 700,
                color: "#FFF",
              }}
            >
              EN
            </div>
          }
        />
      </div>
    </Navbar>
  );
}
