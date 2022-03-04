import React from "react";
import { Aside } from "../components/Aside";
import { Header } from "../components/Header";
import { NavBar } from "../components/NavBar";
import Section2  from "../components/Section2";
import { Footer } from "../components/Footer"
import Section4 from "../components/Section4"
import Styles from '../styles/Header.module.css';
import Logo from '../images/logo3.png';

export default function Experience() {
    return (
        <React.Fragment>
            <Header logo={[<img src={Logo} alt="Logo" width="500" className={`mb-4 ${Styles.logo}`} />]}
                    nombre={[<div className={Styles.title2}><span className={Styles.brackets}>(</span>SIMÓN JIMÉNEZ TAMAYO<span className={Styles.brackets}>)</span></div>]} 
                    titulo1={[<div className={Styles.title3}>Diseñador</div>]}
                    titulo2={[<div className={Styles.title4}> Front </div>]}
                    barra={[<div className={Styles.title4}>&nbsp;-&nbsp;</div>]}
                    titulo3={[<div className={Styles.title4}> End </div>]} />
            <NavBar titulo1="Sobre mi" titulo2="Experiencia" titulo3="Proyectos" titulo4="Contacto" />
            <Section2 />
            <Section4 />
            <Aside />
            <Footer />
        </React.Fragment>
    )
}
