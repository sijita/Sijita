import "@animxyz/core";
import { XyzTransition } from '@animxyz/react';
import { DiHtml5, DiCss3, DiJavascript, DiReact, DiBootstrap, DiPhotoshop } from "react-icons/di"
import fotoPersonal from '../images/fotoPersonal.jpg'

const listStyle = {
    fontFamily: 'monospace'
}

const color = {
    color: "#BAFF29",
}

export default function Section1() {
    return (
        <section id="SobreMi">
            <div className="container p-5 mb-5">
                <XyzTransition appearVisible xyz="fade-100% left-100% duration-15">
                    <h2 className="d-inline-block align-middle" style={{ color: '#f6fafd', overflow: 'hidden' }}>Sobre mi</h2>
                </XyzTransition>
                <div className="row row-cols-1 row-cols-lg-2 justify-content-center">
                    <div className="col fs-5 mt-4" style={{ color: '#96a4b3', overflow: 'hidden', textAlign: 'justify'}}>
                        <XyzTransition appearVisible xyz="fade-100% down-25% duration-15">
                            <div>
                                Mi nombre es <span style={color}>Simón Jiménez Tamayo,</span> tengo 20 años y soy estudiante de 6to semestre de
                                Ingeniería de Software de la Universidad Surcolombiana,
                                ubicada en Neiva-Huila <span style={color}>(</span>Colombia<span style={color}>)</span>.
                                <br />
                                <br />
                                Tengo claro mi objetivo:
                                dedicarme y enfocarme en ser un gran desarrollador web. Desde niño siempre he sido muy creativo,
                                descubrí que mi talento es dibujar y que me apasiona
                                la tecnología, empecé trasladando mis dibujos en papel
                                a dibujos digitales, aprendiendo así a usar Photoshop y otras herramientas,
                                desde el 2013 hago flyers, logos, videos y todo tipo de diseños publicitarios,
                                sin embargo, nunca quise ser diseñador gráfico, quería algo que fuera más allá
                                y afortunadamente ahora me desempeño en esta rama de mi carrera.
                            </div>
                        </XyzTransition>
                            <br />
                            <br />
                            <div className="text-center my-3">
                                <XyzTransition appearVisible xyz="fade-100% small-100% duration-15">
                                        <p className="m-0" style={color}>Skills</p>
                                </XyzTransition>
                                <ul className="row row-cols-1 row-cols-sm-2 my-4 mx-auto p-0 justify-content-center" style={{ listStyle: 'none' }}>
                                    <XyzTransition appearVisible xyz="fade-100% left-100% duration-15">
                                        <li className="col p-3 text-muted d-flex align-items-center justify-content-center" style={listStyle}>
                                            HTML5&nbsp; <DiHtml5 className="fs-4" style={{ color: '#96a4b3' }}></DiHtml5>
                                        </li>
                                    </XyzTransition>
                                    <XyzTransition appearVisible xyz="fade-100% right-100% duration-15">
                                        <li className="col p-3 text-muted d-flex align-items-center justify-content-center" style={listStyle}>
                                            CSS3&nbsp; <DiCss3 className="fs-4" style={{ color: '#96a4b3' }}></DiCss3>
                                        </li>
                                    </XyzTransition>
                                    <XyzTransition appearVisible xyz="fade-100% left-100% duration-15">
                                        <li className="col p-3 text-muted d-flex align-items-center justify-content-center" style={listStyle}>
                                            JavaScript&nbsp; <DiJavascript className="fs-4" style={{ color: '#96a4b3' }}></DiJavascript>
                                        </li>
                                    </XyzTransition>
                                    <XyzTransition appearVisible xyz="fade-100% right-100% duration-15">
                                        <li className="col p-3 text-muted d-flex align-items-center justify-content-center" style={listStyle}>
                                            BootStrap&nbsp; <DiBootstrap className="fs-4" style={{ color: '#96a4b3' }}></DiBootstrap>
                                        </li>
                                    </XyzTransition>
                                    <XyzTransition appearVisible xyz="fade-100% left-100% duration-15">
                                        <li className="col p-3 text-muted d-flex align-items-center justify-content-center" style={listStyle}>
                                            React&nbsp; <DiReact className="fs-4" style={{ color: '#96a4b3' }}></DiReact>
                                        </li>
                                    </XyzTransition>
                                    <XyzTransition appearVisible xyz="fade-100% right-100% duration-15">
                                        <li className="col p-3 text-muted d-flex align-items-center justify-content-center" style={listStyle}>
                                            Photoshop&nbsp; <DiPhotoshop className="fs-4" style={{ color: '#96a4b3' }}></DiPhotoshop>
                                        </li>
                                    </XyzTransition>
                                </ul>
                            </div>
                        </div>
                    <XyzTransition appearVisible xyz="fade-100% down-25% duration-15">
                        <div className="col mt-4 text-center">
                            <img src={fotoPersonal} alt="Foto personal" width="420" className="rounded p-2 img-fluid" style={{ border: '1px solid #BAFF29' }} />
                        </div>
                    </XyzTransition>
                </div>
            </div>
        </section>
    )
}
