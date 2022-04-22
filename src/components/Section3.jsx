import "@animxyz/core";
import { XyzTransition } from "@animxyz/react";
import Screen from "../images/screen.jpg";
import Screen2 from "../images/screen2.jpg";
import Screen3 from "../images/screen3.jpg";
import Screen4 from "../images/screen4.jpg";
import Screen5 from "../images/screen5.jpg"
import fullScreen2 from "../images/fullScreen2.png";
import fullScreen4 from "../images/fullScreen4.png";

function Cards({ tittle, screen, href }) {
  return (
    <div className="col mt-4 mb-0 mb-lg-0 text-center p-4 rounded">
      <a href={href} target="_blank" rel="noreferrer">
        <img
          src={screen}
          alt="Screen"
          className="rounded-0 p-2 img-fluid"
          style={{
            border: "1px solid #baff29",
            borderImage: "linear-gradient(45deg, #baff29 0%, #3fea2f 100%)",
            borderImageSlice: "1",
            width: "580px",
          }}
        />
      </a>
      <div className="mt-4">
        <p className="m-0 fs-4" style={{ color: "#fff" }}>
          {tittle}
        </p>
      </div>
    </div>
  );
}

export default function Section3({tittle, subtittle1, subtittle2, subtittle3}) {
  return (
    <section id="Proyectos">
      <div className="container p-5 mt-5">
        <XyzTransition appearVisible xyz="fade-100% left-100% duration-15">
          <h2
            className="d-inline-block align-middle"
            style={{ color: "#f6fafd", overflow: "hidden" }}
          >
            {tittle}
          </h2>
        </XyzTransition>
        <div
          className="row row-cols-1 row-cols-lg-2 p-0"
          style={{ overflow: "hidden" }}
        >
          <XyzTransition appearVisible xyz="fade-100% small duration-15">
            <div>
              <Cards
                tittle={subtittle1}
                screen={Screen}
                href="https://www.hotelambeyma.com/"
              />
            </div>
          </XyzTransition>
          <XyzTransition
            appearVisible
            xyz="fade-100% small duration-15 delay-1.5"
          >
            <div>
              <Cards tittle="Ecommerce" screen={Screen2} href="/" href2="/" />
            </div>
          </XyzTransition>
        </div>
        <div
          className="row row-cols-1 row-cols-lg-2 p-0"
          style={{ overflow: "hidden" }}
        >
          <XyzTransition appearVisible xyz="fade-100% fade small duration-15">
            <div>
              <Cards tittle="Ecommerce" screen={Screen3} href={fullScreen2} />
            </div>
          </XyzTransition>
          <XyzTransition
            appearVisible
            xyz="fade-100% fade small duration-15 delay-1.5"
          >
            <div>
              <Cards
                tittle={subtittle2}
                screen={Screen4}
                href={fullScreen4}
              />
            </div>
          </XyzTransition>
          <XyzTransition
            appearVisible
            xyz="fade-100% fade small duration-15 delay-1.5"
          >
            <div>
              <Cards
                tittle={subtittle3}
                screen={Screen5}
                href="https://github.com/sijita/RickAndMortyAPI_RNative"
              />
            </div>
          </XyzTransition>
        </div>
      </div>
    </section>
  );
}
