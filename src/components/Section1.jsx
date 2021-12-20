import "@animxyz/core";
import { XyzTransition } from '@animxyz/react';
import { DiHtml5, DiCss3, DiJavascript, DiReact, DiBootstrap } from "react-icons/di"
import { SiAdobephotoshop } from "react-icons/si"
import fotoPersonal from '../images/fotoPersonal.jpg'

const listStyle = {
    fontFamily: 'monospace'
}

export default function Section1({descripcion}) {
    return (
            <div className="container p-5">
                <XyzTransition appearVisible xyz="fade-100% left-100% duration-15">
                    <h2 className="d-inline-block align-middle" style={{ color: '#f6fafd', overflow: 'hidden' }}>Sobre mi</h2>
                </XyzTransition>
                <div className="row row-cols-1 row-cols-lg-2 justify-content-center">
                    <div className="col fs-5 mt-5" style={{ color: '#96a4b3', overflow: 'hidden', textAlign: 'justify'}}>
                        <XyzTransition appearVisible xyz="fade-100% down-25% duration-15">
                            <div>
                                {descripcion}
                            </div>
                        </XyzTransition>
                            <br />
                            <br />
                        </div>
                    <XyzTransition appearVisible xyz="fade-100% down-25% duration-15">
                        <div className="col my-5 text-center">
                            <img src={fotoPersonal} alt="Foto personal" width="420" className="rounded-3 p-2 img-fluid" style={{ border: '1px solid #BAFF29' }} />
                        </div>
                    </XyzTransition>
                </div>
                <div className="text-center p-5">
                                <XyzTransition appearVisible xyz="fade-100% small-100% duration-15">
                                        <h2 className="m-0" style={{color: "#FFF"}}>Skills</h2>
                                </XyzTransition>
                                <ul className="row row-cols-1 row-cols-sm-2 mt-5 mb-0 mx-auto p-0 justify-content-center" style={{ listStyle: 'none' }}>
                                    <XyzTransition appearVisible xyz="fade-100% left-50% duration-15">
                                        <li className="col p-3 d-flex align-items-center justify-content-center" style={listStyle}>
                                            <p className="d-flex m-0 align-items-center gap-2 fs-5" style={{ color: '#96a4b3' }}>HTML5&nbsp; <DiHtml5 className="fs-4" style={{color: "#BAFF29"}}></DiHtml5></p>
                                        </li>
                                    </XyzTransition>
                                    <XyzTransition appearVisible xyz="fade-100% right-50% duration-15">
                                        <li className="col p-3 d-flex align-items-center justify-content-center" style={listStyle}>
                                            <p className="d-flex m-0 align-items-center gap-2 fs-5" style={{ color: '#96a4b3' }}>CSS3&nbsp; <DiCss3 className="fs-4" style={{color: "#BAFF29"}}></DiCss3></p>
                                        </li>
                                    </XyzTransition>
                                    <XyzTransition appearVisible xyz="fade-100% left-50% duration-15">
                                        <li className="col p-3 d-flex align-items-center justify-content-center" style={listStyle}>
                                            <p className="d-flex m-0 align-items-center gap-2 fs-5" style={{ color: '#96a4b3' }}>JavaScript&nbsp; <DiJavascript className="fs-4" style={{color: "#BAFF29"}}></DiJavascript></p>
                                        </li>
                                    </XyzTransition>
                                    <XyzTransition appearVisible xyz="fade-100% right-50% duration-15">
                                        <li className="col p-3 d-flex align-items-center justify-content-center" style={listStyle}>
                                            <p className="d-flex m-0 align-items-center gap-2 fs-5" style={{ color: '#96a4b3' }}>BootStrap&nbsp; <DiBootstrap className="fs-4" style={{color: "#BAFF29"}}></DiBootstrap></p>
                                        </li>
                                    </XyzTransition>
                                    <XyzTransition appearVisible xyz="fade-100% left-50% duration-15">
                                        <li className="col p-3 d-flex align-items-center justify-content-center" style={listStyle}>
                                            <p className="d-flex m-0 align-items-center gap-2 fs-5" style={{ color: '#96a4b3' }}>ReactJS&nbsp; <DiReact className="fs-4" style={{color: "#BAFF29"}}></DiReact></p>
                                        </li>
                                    </XyzTransition>
                                    <XyzTransition appearVisible xyz="fade-100% right-50% duration-15">
                                        <li className="col p-3 d-flex align-items-center justify-content-center" style={listStyle}>
                                            <p className="d-flex m-0 align-items-center gap-2 fs-5" style={{ color: '#96a4b3' }}>Photoshop&nbsp; <SiAdobephotoshop style={{color: "#BAFF29", fontSize: "17px"}}></SiAdobephotoshop></p>
                                        </li>
                                    </XyzTransition>
                                </ul>
                            </div>
            </div>
    )
}
