import React from "react";
import { Aside } from "../components/Aside";
import { Header } from "../components/Header";
import { NavBar } from "../components/NavBar";
import Section2 from "../components/Section2";
import { Footer } from "../components/Footer";
import Section4 from "../components/Section4";
import Styles from "../styles/Header.module.css";
import Logo from "../images/logo3.png";
import UserContext from "../context/AuthContext"
import { useContext } from "react"

export default function Experience() {
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
      <Section2
        tittle={translated ? "Experience" : "Experiencia"}
        subtittle1={translated ? "Graphic designer" : "Diseñador gráfico"}
        year1={translated ? "2013 - PRESENT" : "2013 - PRESENTE"}
        subtittle2={translated ? "Web developer" : "Desarrollador web"}
        year2={translated ? "2019 - PRESENT" : "2019 - PRESENTE"}
        text1={translated ? "Creation of posters and flyers for different parties and events" : "Creación de posters y flyers para diferentes fiestas y eventos"}
        text2={translated ? "Creation of logos for individuals and small businesses" : "Creación de logos para personas y pequeñas empresas"}
        text3={translated ? "Creation and editing of videos for YouTube channels" : "Creación y edición de videos para canales de YouTube"}
        text4={translated ? "Hotel page" : "Página hotelera"}
        text5={translated ? "School page" : "Página escolar"}
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
