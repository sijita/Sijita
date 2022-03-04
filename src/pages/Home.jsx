import React from "react";
import { NavBar } from '../components/NavBar';
import { Header } from '../components/Header';
import { Aside } from '../components/Aside';
import Section1 from "../components/Section1";
import { Footer } from "../components/Footer";
import Section4 from "../components/Section4"
import Styles from '../styles/Header.module.css';
import "@animxyz/core";
import { XyzTransition } from '@animxyz/react';
import Logo from '../images/logo3.png';

const Home = () => {
    return (
        <React.Fragment>
            <Header logo={[<XyzTransition appear xyz="fade-100% front-5 big-100% duration-20"><img src={Logo} alt="Logo" width="500" className={`mb-4 ${Styles.logo}`} /></XyzTransition>]}
                    nombre={[<XyzTransition appear xyz="fade-100% big-25% duration-20 delay-5"><div className={Styles.title2}><span className={Styles.brackets}>(</span>SIMÓN JIMÉNEZ TAMAYO<span className={Styles.brackets}>)</span></div></XyzTransition>]} 
                    titulo1={[<XyzTransition appear xyz="fade-100% small-25% duration-15 delay-10"><div className={Styles.title3}>Diseñador</div></XyzTransition>]} 
                    titulo2={[<XyzTransition appear xyz="fade-100% left-50% duration-15 delay-10"><div className={Styles.title4}> Front </div></XyzTransition>]}
                    barra={[<XyzTransition appear xyz="fade-100% small-25% duration-15 delay-10"><div className={Styles.title4}>&nbsp;-&nbsp;</div></XyzTransition>]} 
                    titulo3={[<XyzTransition appear xyz="fade-100% right-50% duration-15 delay-10"><div className={Styles.title4}> End </div></XyzTransition>]} />
            <NavBar titulo1="Sobre mi" titulo2="Experiencia" titulo3="Proyectos" titulo4="Contacto" xyz="fade-100% duration-25 small-25%" />
            <Section1 descripcion={["Mi nombre es ", <span style={{color: "#BAFF29"}}>Simón Jiménez Tamayo</span>, ", tengo 20 años y soy estudiante de 7mo semestre de Ingeniería de Software en la Universidad Surcolombiana, ubicada en Neiva-Huila ", <span style={{color: "#BAFF29"}}>(</span>, "Colombia", <span style={{color: "#BAFF29"}}>)</span>, ". ", <br />,<br />, "Tengo claro mi objetivo: dedicarme y enfocarme en ser un gran desarrollador web. Desde niño siempre he sido muy creativo, descubrí que mi talento es dibujar y que me apasiona la tecnología, empecé trasladando mis dibujos en papel a dibujos digitales, aprendiendo así a usar Photoshop y otras herramientas, desde el 2013 hago flyers, logos, videos y todo tipo de diseños publicitarios, sin embargo, nunca quise ser diseñador gráfico, quería algo que fuera más allá y afortunadamente ahora me desempeño en esta rama de mi carrera." ]} />
            <Section4 />
            <Aside xyza="fade-100% down-100% duration-20 delay-10" xyzb="fade-100% down-100% duration-20 delay-8" xyzc="fade-100% down-100% duration-20 delay-6" xyzd="fade-100% down-100% duration-20 delay-4" xyze="fade-100% down-100% duration-10 delay-2" />
            <Footer />
        </React.Fragment>

    );
}

export default Home; 