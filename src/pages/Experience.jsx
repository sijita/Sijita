import React from "react";
import { Aside } from "../components/Aside";
import { Header } from "../components/Header";
import { NavBar } from "../components/NavBar";
import Section2  from "../components/Section2";
import { Footer } from "../components/Footer"
import Section4 from "../components/Section4"

export default function Experience() {
    return (
        <React.Fragment>
            <Header />
            <NavBar titulo1="Sobre mi" titulo2="Experiencia" titulo3="Trabajos" titulo4="Contacto" />
            <Section2 />
            <Section4 />
            <Aside />
            <Footer />
        </React.Fragment>
    )
}
