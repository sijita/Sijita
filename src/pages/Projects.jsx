import React from 'react'
import { Aside } from '../components/Aside'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { NavBar } from '../components/NavBar'
import Section3 from '../components/Section3'
import Section4 from '../components/Section4'

export default function Projects() {
    return (
        <React.Fragment>
            <Header />
            <NavBar titulo1="Sobre mi" titulo2="Experiencia" titulo3="Trabajos" titulo4="Contacto" />
            <Section3 />
            <Section4 />
            <Aside />
            <Footer />
        </React.Fragment>
    )
}