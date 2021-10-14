import "@animxyz/core";
import { XyzTransition } from '@animxyz/react';
import { IoPhonePortrait, IoRocket, IoColorWandSharp, IoTrophySharp } from "react-icons/io5";

const cardStyle = {
    color: '#0f0f0f',
    backgroundColor: '#BAFF29',
}

export default function Section4() {
    return (
        <section id="Servicios">
            <div className="container p-5 mt-5 mb-4">
                <XyzTransition appearVisible xyz="fade-100% left-100% duration-15">
                    <h2 style={{ color: '#f6fafd' }}>Servicios</h2>
                </XyzTransition>
                <div className="row row-cols-1 row-cols-md-3 row-cols-lg-5 justify-content-around w-100 mx-auto mt-4 gap-4" style={{ overflow: 'hidden' }}>
                    <XyzTransition appearVisible xyz="fade-100% down-50% duration-20">
                        <div className="col text-center rounded p-4" style={cardStyle}>
                            <h1 className="fs-5 my-3" style={cardStyle}>Diseños increibles</h1>
                            <IoColorWandSharp className="fs-2" style={cardStyle} />
                            <p className="my-3" style={cardStyle}>
                                Diseños creativos e innovadores para páginas atractivas
                            </p>
                        </div>
                    </XyzTransition>
                    <XyzTransition appearVisible xyz="fade-100% down-50% duration-20">
                        <div className="col text-center rounded p-4" style={cardStyle}>
                            <h1 className="fs-5 my-3" style={cardStyle}>Web responsive</h1>
                            <IoPhonePortrait className="fs-2" style={cardStyle} />
                            <p className="my-3" style={cardStyle}>
                                Páginas adaptables a cualquier tipo de dispositivo
                            </p>
                        </div>
                    </XyzTransition>
                    <XyzTransition appearVisible xyz="fade-100% down-50% duration-20">
                        <div className="col text-center rounded p-4" style={cardStyle}>
                            <h1 className="fs-5 my-3" style={cardStyle}>Rendimiento</h1>
                            <IoRocket className="fs-2" style={cardStyle} />
                            <p className="my-3" style={cardStyle}>
                                Páginas de alto rendimiento para la satisfacción de los usuarios
                            </p>
                        </div>
                    </XyzTransition>
                    <XyzTransition appearVisible xyz="fade-100% down-50% duration-20">
                        <div className="col text-center rounded p-4" style={cardStyle}>
                            <h1 className="fs-5 my-3" style={cardStyle}>SEO</h1>
                            <IoTrophySharp className="fs-2" style={cardStyle}/>
                            <p className="my-3" style={cardStyle}>
                                Páginas optimizadas para el buen posicionamiento en buscadores
                            </p>
                        </div>
                    </XyzTransition>
                </div>
            </div>
        </section>
    )
}
     