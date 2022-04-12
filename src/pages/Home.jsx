import React from "react";
import { NavBar } from "../components/NavBar";
import { Header } from "../components/Header";
import { Aside } from "../components/Aside";
import Section1 from "../components/Section1";
import { Footer } from "../components/Footer";
import Section4 from "../components/Section4";
import Styles from "../styles/Header.module.css";
import "@animxyz/core";
import { XyzTransition } from "@animxyz/react";
import Logo from "../images/logo3.png";
import UserContext from "../context/AuthContext"
import { useContext } from "react"

function Spanish() {
  return (
    <p>
      Mi nombre es&nbsp;
      <span
        style={{
          backgroundColor: "#BAFF29",
          backgroundImage: "linear-gradient(45deg, #baff29 0%, #3fea2f 100%)",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          color: "transparent",
        }}
      >
        Simón Jiménez Tamayo
      </span>
      , tengo 20 años y soy estudiante de 7mo semestre de Ingeniería de Software
      en la Universidad Surcolombiana, ubicada en Neiva - Huila&nbsp;
      <span
        style={{
          backgroundColor: "#BAFF29",
          backgroundImage: "linear-gradient(45deg, #baff29 0%, #3fea2f 100%)",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          color: "transparent",
        }}
      >
        (
      </span>
      Colombia
      <span
        style={{
          backgroundColor: "#BAFF29",
          backgroundImage: "linear-gradient(45deg, #baff29 0%, #3fea2f 100%)",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          color: "transparent",
        }}
      >
        )
      </span>
      .
      <br />
      <br />
      Tengo claro mi objetivo: dedicarme y enfocarme en ser un gran
      desarrollador web. Desde niño siempre he sido muy creativo, descubrí que
      mi talento es dibujar y que me apasiona la tecnología, empecé trasladando
      mis dibujos en papel a dibujos digitales, aprendiendo así a usar Photoshop
      y otras herramientas, desde el 2013 hago flyers, logos, videos y todo tipo
      de diseños publicitarios, sin embargo, nunca quise ser diseñador gráfico,
      quería algo que fuera más allá y afortunadamente ahora me desempeño en
      esta rama de mi carrera.
    </p>
  );
}

function English() {
  return (
    <p>
      My name is&nbsp;
      <span
        style={{
          backgroundColor: "#BAFF29",
          backgroundImage: "linear-gradient(45deg, #baff29 0%, #3fea2f 100%)",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          color: "transparent",
        }}
      >
        Simón Jiménez Tamayo
      </span>
      , I'm 20 years old and I'm a 7th semester student of Software Engineering
      at the Surcolombiana University, located in Neiva - Huila&nbsp;
      <span
        style={{
          backgroundColor: "#BAFF29",
          backgroundImage: "linear-gradient(45deg, #baff29 0%, #3fea2f 100%)",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          color: "transparent",
        }}
      >
        (
      </span>
      Colombia
      <span
        style={{
          backgroundColor: "#BAFF29",
          backgroundImage: "linear-gradient(45deg, #baff29 0%, #3fea2f 100%)",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          color: "transparent",
        }}
      >
        )
      </span>
      .
      <br />
      <br />I have a clear goal: dedicate myself and focus on being a great web
      developer. Since I was a child I have always been very creative, I
      discovered that my talent is drawing and that I am passionate about
      technology, I started transferring my drawings on paper to digital
      drawings, thus learning to use Photoshop and other tools, since 2013 I
      make flyers, logos, videos and all kinds of advertising designs, however,
      I never wanted to be a graphic designer, I wanted something that went
      further and fortunately now I perform in this branch of my career.
    </p>
  );
}

const Home = () => {
  const { translated, handleTranslate } = useContext(UserContext)

  return (
    <React.Fragment>
      <Header
        logo={[
          <XyzTransition appear xyz="fade-100% front-5 big-100% duration-20">
            <img
              src={Logo}
              alt="Logo"
              width="500"
              className={`mb-4 ${Styles.logo}`}
            />
          </XyzTransition>,
        ]}
        nombre={[
          <XyzTransition appear xyz="fade-100% big-25% duration-20 delay-5">
            <div className={Styles.title2}>
              <span className={Styles.brackets}>(</span>SIMÓN JIMÉNEZ TAMAYO
              <span className={Styles.brackets}>)</span>
            </div>
          </XyzTransition>,
        ]}
        titulo1={[
          <XyzTransition appear xyz="fade-100% small-25% duration-15 delay-10">
            <div className={Styles.title3}>
              {translated ? "Designer" : "Diseñador"}
            </div>
          </XyzTransition>,
        ]}
        titulo2={[
          <XyzTransition appear xyz="fade-100% left-50% duration-15 delay-10">
            <div className={Styles.title4}> Front </div>
          </XyzTransition>,
        ]}
        barra={[
          <XyzTransition appear xyz="fade-100% small-25% duration-15 delay-10">
            <div className={Styles.title4}>&nbsp;-&nbsp;</div>
          </XyzTransition>,
        ]}
        titulo3={[
          <XyzTransition appear xyz="fade-100% right-50% duration-15 delay-10">
            <div className={Styles.title4}> End </div>
          </XyzTransition>,
        ]}
      />
      <NavBar
        handleTranslate={handleTranslate}
        translated={translated}
        titulo1={translated ? "About me" : "Sobre mi"}
        titulo2={translated ? "Experience" : "Experiencia"}
        titulo3={translated ? "Projects" : "Proyectos"}
        titulo4={translated ? "Contact me" : "Contacto"}
        xyz="fade-100% duration-25 small-25%"
      />
      <Section1
        titulo={translated ? "About me" : "Sobre mi"}
        descripcion={!translated ? <Spanish /> : <English />}
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
      <Aside
        xyza="fade-100% down-100% duration-20 delay-10"
        xyzb="fade-100% down-100% duration-20 delay-8"
        xyzc="fade-100% down-100% duration-20 delay-6"
        xyzd="fade-100% down-100% duration-20 delay-4"
        xyze="fade-100% down-100% duration-10 delay-2"
        handleTranslate={handleTranslate}
      />
      <Footer />
    </React.Fragment>
  );
};

export default Home;
