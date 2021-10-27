import "@animxyz/core";
import { XyzTransition } from '@animxyz/react';
import { IoCaretDownCircleSharp } from "react-icons/io5";

const color = {
    color: "#BAFF29",
}

function Lists({ tittle, year, number }) {
    return (
        <>                                
            <ul className="text-muted" style={{ fontFamily: 'monospace' }}>{year}</ul>
            <br />
            <ListsItems number={number} tittle={tittle} />
        </>
    );
}

function ListsItems({ number, tittle }) {
    return (
        <ul className="font-monospace fs-5" style={color}>{number} <span className="fs-5" style={{color: "#96a4b3"}}>{tittle}</span>
            <br />
        </ul>
    )
}

export default function Section2() {
    return (
        <section id="Experiencia">
            <div className="container p-5 mt-5 mb-5">
                <XyzTransition appearVisible xyz="fade-100% left-100% duration-15">
                    <h2 className="d-inline-block align-middle" style={{ color: '#f6fafd', overflow: "hidden"}}>Experiencia</h2>
                </XyzTransition>
                    <div className="mt-4 container p-0" style={{ color: '#96a4b3', overflow: "hidden" }}>
                        <ul className="row row-cols-1 row-cols-lg-2 p-0" style={{listStyle: 'none'}}>
                            <XyzTransition appearVisible xyz="fade-100% left-50% duration-10">
                                <li className="mt-4 text-sm-center">
                                    <ul className="fs-4" style={color}>Freelancer (<span className="text-white">Diseñador gráfico</span>)</ul>
                                    <ul className="text-muted" style={{ fontFamily: 'monospace' }}>2013 - PRESENTE</ul>
                                    <Lists number={"1."} tittle={"Creación de posters/flyers para diferentes fiestas y eventos."} />
                                    <Lists number={"2."} tittle={"Creación de logos para personas y pequeñas empresas."} />
                                    <Lists number={"3."} tittle={"Creación y edición de videos para canales de YouTube."} />
                                </li>
                            </XyzTransition>
                            <XyzTransition appearVisible xyz="fade-100% right-50% duration-15">
                                <li className="mt-4 text-sm-center">
                                    <ul className="fs-4" style={color}>Freelancer (<span className="text-white">Desarrollador web</span>)</ul>
                                    <ul className="text-muted" style={{ fontFamily: 'monospace' }}>2019 - PRESENTE</ul>
                                    <Lists number={"1."} tittle={"Portafolio personal."} />
                                    <Lists number={"2."} tittle={"Ecommerce"} />
                                    <Lists number={"3."} tittle={"Ecommerce"} />
                                    <Lists number={"4."} tittle={"Página escolar"} />
                                </li>
                            </XyzTransition>
                        </ul>
                        <div className="text-center fs-4 mt-5">
                            <a href="#Proyectos" style={{ color: '#fff' }}>
                                <IoCaretDownCircleSharp />
                            </a>
                        </div>
                    </div>
            </div>
        </section>
    )
}