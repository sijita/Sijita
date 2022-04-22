import React from "react";
import { Aside } from "../components/Aside";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { NavBar } from "../components/NavBar";
import Section3 from "../components/Section3";
import Section4 from "../components/Section4";
import Styles from "../styles/Header.module.css";
import Logo from "../images/logo3.png";
import UserContext from "../context/AuthContext"
import { useContext } from "react"

export default function Projects() {
  const { translated, handleTranslate } = useContext(UserContext)
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
        handleTranslate={handleTranslate}
        translated={translated}
        titulo1={translated ? "About me" : "Sobre mi"}
        titulo2={translated ? "Experience" : "Experiencia"}
        titulo3={translated ? "Projects" : "Proyectos"}
        titulo4={translated ? "Contact me" : "Contacto"}
      />
      <Section3
        tittle={translated ? "Projects" : "Proyectos"}
        subtittle1={translated ? "Ambeyma hotel" : "Hotel Ambeyma"}
        subtittle2={translated ? "School page" : "Página escolar"}
        subtittle3={translated ? "Rick and Morty App" : "App de Rick y Morty"}
      />
      <Section4
        tittle={translated ? "Services" : "Servicios"}
        titulo1={translated ? "Incredible designs" : "Diseños increibles"}
        texto1={
          translated
            ? "Pages with creative and attractive designs"
            : "Páginas con diseños creativos y atractivos"
        }
        titulo2={translated ? "Web responsive" : "Web responsive"}
        texto2={
          translated
            ? "Pages adaptable to any type of device"
            : "Páginas adaptables a cualquier tipo de dispositivo"
        }
        titulo3={translated ? "Performance" : "Rendimiento"}
        texto3={
          translated
            ? "High performance pages for user satisfaction"
            : "Páginas de alto rendimiento para la satisfacción de los usuarios"
        }
        titulo4={translated ? "SEO" : "SEO"}
        texto4={
          translated
            ? "Optimized pages for good search engine positioning"
            : "Páginas optimizadas para el buen posicionamiento en buscadores"
        }
      />
      <Aside handleTranslate={handleTranslate} />
      <Footer />
    </React.Fragment>
  );
}
