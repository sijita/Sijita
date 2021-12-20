import React from "react";
import { NavBar } from '../components/NavBar';
import { Header } from '../components/Header';
import { Aside } from '../components/Aside';
import Section1 from "../components/Section1";
import { Footer } from "../components/Footer";
import Section4 from "../components/Section4"

const Home = () => {
    return (
        <React.Fragment>
            <Header />
            <NavBar titulo1="Sobre mi" titulo2="Experiencia" titulo3="Trabajos" titulo4="Contacto" />
            <Section1 descripcion={["Mi nombre es ", <span style={{color: "#BAFF29"}}>Simón Jiménez Tamayo</span>, ", tengo 20 años y soy estudiante de 6to semestre de Ingeniería de Software de la Universidad Surcolombiana, ubicada en Neiva-Huila ", <span style={{color: "#BAFF29"}}>(</span>, "Colombia", <span style={{color: "#BAFF29"}}>)</span>, ". ", <br />,<br />, "Tengo claro mi objetivo: dedicarme y enfocarme en ser un gran desarrollador web. Desde niño siempre he sido muy creativo, descubrí que mi talento es dibujar y que me apasiona la tecnología, empecé trasladando mis dibujos en papel a dibujos digitales, aprendiendo así a usar Photoshop y otras herramientas, desde el 2013 hago flyers, logos, videos y todo tipo de diseños publicitarios, sin embargo, nunca quise ser diseñador gráfico, quería algo que fuera más allá y afortunadamente ahora me desempeño en esta rama de mi carrera." ]} />
            <Section4 />
            <Aside />
            <Footer />
        </React.Fragment>

    );
}

export default Home; 