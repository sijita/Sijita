import "@animxyz/core";
import { XyzTransition } from '@animxyz/react';
import Screen from '../images/screen.png';
import Screen2 from '../images/screen2.jpg';
import Screen3 from '../images/screen3.jpg';
import Screen4 from '../images/screen4.jpg';
import fullScreen1 from '../images/fullScreen1.png';
import fullScreen2 from '../images/fullScreen2.png';
import fullScreen4 from '../images/fullScreen4.png';

function Cards({ tittle, screen, href }) {
    return (
      <div className="col mt-4 mb-0 mb-lg-0 text-center p-4 rounded" style={{ backgroundColor: "#000", borderBottom: '1px solid #BAFF29' }}>
          <a href={href} target="_blank" rel="noreferrer">
              <img src={screen} alt="Screen" className="rounded p-2 img-fluid" style={{ border: "1px solid #BAFF29" }} />
          </a>
          <div className="mt-4">
                <p className="m-0 fs-4" style={{ color: "#fff", backgroundColor: "#000" }}>{tittle}</p>
          </div>
      </div>
    );
}

export default function Section3() {
    return (
        <section id="Proyectos">
            <div className="container p-5 mt-5 mb-5">
                <XyzTransition appearVisible xyz="fade-100% left-100% duration-15">
                    <h2 className="d-inline-block align-middle" style={{ color: '#f6fafd', overflow: "hidden"}}>Proyectos</h2>
                </XyzTransition>
                <div className="row row-cols-1 row-cols-lg-2 p-0" style={{ overflow: 'hidden' }}>
                    <XyzTransition appearVisible xyz="fade-100% small duration-15">
                        <div>
                            <Cards tittle="Portafolio personal" screen={ Screen } href={fullScreen1} />
                        </div>
                    </XyzTransition>
                    <XyzTransition appearVisible xyz="fade-100% small duration-15 delay-2">
                        <div>
                            <Cards tittle="eCommerce" screen={ Screen2 } href="/" href2="/" />
                        </div>
                    </XyzTransition>
                </div>
                <div className="row row-cols-1 row-cols-lg-2 p-0" style={{ overflow: 'hidden' }}>
                    <XyzTransition appearVisible xyz="fade-100% fade small duration-15">
                        <div>
                            <Cards tittle="eCommerce" screen={ Screen3 } href={ fullScreen2 } />
                        </div>
                    </XyzTransition>
                    <XyzTransition appearVisible xyz="fade-100% fade small duration-15 delay-2">
                        <div>
                            <Cards tittle="Página escolar" screen={ Screen4 } href={fullScreen4 } />
                        </div>
                    </XyzTransition>
                </div>
            </div>
        </section>
    )
}
