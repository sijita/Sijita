import React from "react";
import { Aside } from "../components/Aside";
import { Footer } from "../components/Footer";
import Form from "../components/Form";
import { Header } from "../components/Header";
import { NavBar } from "../components/NavBar";
import Styles from "../styles/Header.module.css";
import Logo from "../images/logo3.png";
import UserContext from "../context/AuthContext"
import { useContext } from "react"

export default function Contact() {
  const { translated, handleTranslate, handleOriginal } = useContext(UserContext)
  return (
    <React.Fragment>
      <Header
        logo={[
          <img
            src={Logo}
            alt="Logo"
            width="500"
            className={`mb-4 ${Styles.logo}`}
          />,
        ]}
        nombre={[
          <div className={Styles.title2}>
            <span className={Styles.brackets}>(</span>SIMÓN JIMÉNEZ TAMAYO
            <span className={Styles.brackets}>)</span>
          </div>,
        ]}
        titulo1={[
          <div className={Styles.title3}>
            {translated ? "Designer" : "Diseñador"}
          </div>,
        ]}
        titulo2={[<div className={Styles.title4}> Front </div>]}
        barra={[<div className={Styles.title4}>&nbsp;-&nbsp;</div>]}
        titulo3={[<div className={Styles.title4}> End </div>]}
      />
      <NavBar
        titulo1={translated ? "About me" : "Sobre mi"}
        titulo2={translated ? "Experience" : "Experiencia"}
        titulo3={translated ? "Projects" : "Proyectos"}
        titulo4={translated ? "Contact me" : "Contacto"}
      />
      <Form 
        tittle={translated ? "¡ Send me an email !" : "¡ Envíame un correo !"}
        input1={translated ? "Full name" : "Nombre"}
        input2={translated ? "E-mail" : "Correo"}
        input3={translated ? "Message" : "Mensaje"}
        btnText={translated ? "Send" : "Enviar"}
      />
      <Aside
        display={translated ? "my-4" : "my-4 d-none"}
        display2={translated ? "my-4 d-none" : "my-4"}
        handleTranslate={handleTranslate}
        handleOriginal={handleOriginal}
      />
      <Footer />
    </React.Fragment>
  );
}
