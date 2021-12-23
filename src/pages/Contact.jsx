import React from 'react'
import { Aside } from '../components/Aside';
import { Footer } from '../components/Footer';
import Form from '../components/Form';
import { Header } from '../components/Header'
import { NavBar } from '../components/NavBar';

export default function Contact() {
    return (
        <React.Fragment>
            <Header />
            <NavBar titulo1="Sobre mi" titulo2="Experiencia" titulo3="Proyectos" titulo4="Contacto" />
            <Form />
            <Aside />
            <Footer />
        </React.Fragment>
    )
}
