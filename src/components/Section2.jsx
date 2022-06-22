import "@animxyz/core";
import { XyzTransition } from "@animxyz/react";

const color = {
  backgroundColor: "#baff29",
  backgroundImage: "linear-gradient(45deg, #baff29 0%, #3fea2f 100%)",
  WebkitBackgroundClip: "text",
  backgroundClip: "text",
  color: "transparent",
};

function Lists({ tittle, year, number }) {
  return (
    <>
      <ul className="text-muted" style={{ fontFamily: "monospace" }}>
        {year}
      </ul>
      <br />
      <ListsItems number={number} tittle={tittle} />
    </>
  );
}

function ListsItems({ number, tittle }) {
  return (
    <ul className="font-monospace fs-5" style={color}>
      {number}{" "}
      <span className="fs-5" style={{ color: "#96a4b3" }}>
        {tittle}
      </span>
      <br />
    </ul>
  );
}

export default function Section2({
  tittle,
  subtittle1,
  subtittle2,
  year1,
  year2,
  text1,
  text2,
  text3,
  text4,
  text5,
  text6,
}) {
  return (
    <section id="Experiencia">
      <div className="container p-5 mt-5">
        <XyzTransition appearVisible xyz="fade-100% left-100% duration-10">
          <h2
            className="d-inline-block align-middle"
            style={{ color: "#f6fafd", overflow: "hidden" }}
          >
            {tittle}
          </h2>
        </XyzTransition>
        <div
          className="mt-4 container p-0"
          style={{ color: "#96a4b3", overflow: "hidden" }}
        >
          <ul
            className="row row-cols-1 row-cols-lg-2 p-0"
            style={{ listStyle: "none" }}
          >
            <XyzTransition appearVisible xyz="fade-100% left-50% duration-15">
              <li className="mt-4 text-sm-center">
                <ul className="fs-4 fw-bold" style={color}>
                  {subtittle1} (
                  <span className="text-white fw-normal">Freelancer</span>)
                </ul>
                <ul className="text-light mt-4">{year1}</ul>
                <Lists number="1." tittle={text1} />
                <Lists number="2." tittle={text2} />
                <Lists number="3." tittle={text3} />
              </li>
            </XyzTransition>
            <XyzTransition appearVisible xyz="fade-100% right-50% duration-15">
              <li className="mt-4 text-sm-center">
                <ul className="fs-4 fw-bold" style={color}>
                  {subtittle2} (
                  <span className="text-white fw-normal">Freelancer</span>)
                </ul>
                <ul className="text-light mt-4">{year2}</ul>
                <Lists number="1." tittle={text4} />
                <Lists number="2." tittle="Ecommerce" />
                <Lists number="3." tittle="Ecommerce" />
                <Lists number="4." tittle={text5} />
                <Lists number="5." tittle={text6} />
              </li>
            </XyzTransition>
          </ul>
        </div>
      </div>
    </section>
  );
}
