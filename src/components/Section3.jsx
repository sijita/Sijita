import "@animxyz/core";
import { XyzTransition } from '@animxyz/react';
import Screen from '../images/screen.png'
import Screen2 from '../images/screen2.jpg'
import Screen3 from '../images/screen3.jpg'
import Screen4 from '../images/screen4.jpg'

function Cards({ tittle, screen }) {
    return (
      <div className="col mt-4 mb-0 mb-lg-0 text-center p-4 rounded" style={{ backgroundColor: "#000", borderBottom: '1px solid #BAFF29' }}>
          {/* <a href={href} target="_blank" rel="noreferrer"> */}
              <img src={screen} alt="Screen" className="rounded p-2 img-fluid" style={{ border: "1px solid #BAFF29" }} />
          {/* </a> */}
          <div className="mt-4">
                <p className="m-0 fs-4" style={{ color: "#fff", backgroundColor: "#000" }}>{tittle}</p>
          </div>
      </div>
    );
}

export default function Section3() {
    return (
        <section id="Proyectos">
            <div className="container p-5 mt-5 mb-4">
                <XyzTransition appearVisible xyz="fade-100% left-100% duration-15">
                    <h2 className="d-inline-block align-middle" style={{ color: '#f6fafd', overflow: "hidden"}}>Proyectos</h2>
                </XyzTransition>
                <div className="row row-cols-1 row-cols-lg-2 p-0" style={{ overflow: 'hidden' }}>
                    <XyzTransition appearVisible xyz="fade-100% small duration-15">
                        <div>
                            <Cards tittle="Portafolio personal" screen={ Screen } href="/" href2="/" />
                        </div>
                    </XyzTransition>
                    <XyzTransition appearVisible xyz="fade-100% small duration-15 delay-5">
                        <div>
                            <Cards tittle="eCommerce" screen={ Screen2 } href="https://github.com/sijita/eCommerceJSP" href2="https://github.com/sijita/eCommerceJSP" />
                        </div>
                    </XyzTransition>
                </div>
                <div className="row row-cols-1 row-cols-lg-2 p-0" style={{ overflow: 'hidden' }}>
                    <XyzTransition appearVisible xyz="fade-100% fade small duration-15 delay-10">
                        <div>
                            <Cards tittle="eCommerce" screen={ Screen3 } href="https://github.com/sijita/eCommerce-only-design" href2="https://github.com/sijita/eCommerce-only-design" />
                        </div>
                    </XyzTransition>
                    <XyzTransition appearVisible xyz="fade-100% fade small duration-15 delay-15">
                        <div>
                            <Cards tittle="Generador de HV's" screen={ Screen4 } href="https://github.com/sijita/HVs-PHP" href2="https://github.com/sijita/HVs-PHP" />
                        </div>
                    </XyzTransition>
                </div>
            </div>
        </section>
    )
}
