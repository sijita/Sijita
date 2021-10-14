import "@animxyz/core";
import { XyzTransition } from '@animxyz/react';
import { IoCaretDownCircleSharp } from "react-icons/io5";

const color = {
    color: "#BAFF29",
}

export default function Section2() {
    return (
        <section id="Experiencia">
            <div className="container p-5 mt-5 mb-5">
                <XyzTransition appearVisible xyz="fade-100% left-100% duration-15">
                    <h2 className="d-inline-block align-middle" style={{ color: '#f6fafd', overflow: "hidden"}}>Experiencia</h2>
                </XyzTransition>
                    <div className="mt-4 container" style={{ color: '#96a4b3', overflow: "hidden" }}>
                        <ul className="row row-cols-1 row-cols-lg-2 p-0" style={{listStyle: 'none'}}>
                            <XyzTransition appearVisible xyz="fade-100% down-50% duration-20">
                                <li className="mt-4 text-sm-center">
                                    <span className="fs-4" style={color}>Freelancer (<span class="text-white">Diseñador gráfico</span>)</span> : 
                                    <br />
                                    <span className="text-muted" style={{ fontFamily: 'monospace' }}>2013 - PRESENTE</span><br /><br />
                                    <span className="font-monospace fs-5" style={color}>1.&nbsp;</span> 
                                    <span className="fs-5">
                                        Creación de posters/flyers para diferentes
                                        fiestas y eventos de mi ciudad.
                                    </span><br /><br />
                                    <span className="font-monospace fs-5" style={color}>2.&nbsp;</span> 
                                    <span className="fs-5">
                                        Creación de logos para personas y mini empresas.
                                    </span><br /><br />
                                    <span className="font-monospace fs-5" style={color}>3.&nbsp;</span> 
                                    <span className="fs-5">
                                        Creación y edición de videos para canales de
                                        YouTube.
                                    </span>
                                </li>
                            </XyzTransition>
                            <XyzTransition appearVisible xyz="fade-100% down-50% duration-20">
                                <li className="mt-4 text-sm-center">
                                    <span className="fs-4" style={color}>Freelancer (<span class="text-white">Desarrollador web</span>)</span> : 
                                    <br />
                                    <span className="text-muted" style={{ fontFamily: 'monospace' }}>2019 - PRESENTE</span><br /><br />
                                    <span className="font-monospace fs-5" style={color}>1.&nbsp;</span> 
                                    <span className="fs-5">
                                    Portafolio personal.
                                    </span><br /><br />
                                    <span className="font-monospace fs-5" style={color}>2.&nbsp;</span> 
                                    <span className="fs-5">
                                    Generador de hojas de vida.
                                    </span><br /><br />
                                    <span className="font-monospace fs-5" style={color}>3.&nbsp;</span> 
                                    <span className="fs-5">
                                    eCommerce.
                                    </span><br /><br />
                                    <span className="font-monospace fs-5" style={color}>4.&nbsp;</span> 
                                    <span className="fs-5">
                                    eCommerce.
                                    </span>
                                </li>
                            </XyzTransition>
                        </ul>
                        <div className="text-center fs-4 mt-5">
                            <a href="/" style={{ color: '#fff' }}>
                                <IoCaretDownCircleSharp />
                            </a>
                        </div>
                    </div>
            </div>
        </section>
    )
}
