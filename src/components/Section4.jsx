import "@animxyz/core";
import { XyzTransition, XyzTransitionGroup } from "@animxyz/react";
import {
  IoPhonePortrait,
  IoRocket,
  IoColorWandSharp,
  IoTrophySharp,
} from "react-icons/io5";

const cardStyle = {
  backgroundColor: "#baff29",
  backgroundImage: "linear-gradient(45deg, #baff29 0%, #3fea2f 100%)",
};

const textStyle = {
  backgroundColor: "transparent",
};

function Card({ tittle, text, icon, xyz }) {
  return (
    <XyzTransition appearVisible xyz={xyz}>
      <div className="col text-center rounded p-4" style={cardStyle}>
        <h1 className="fs-5 my-2" style={textStyle}>
          {tittle}
        </h1>
        {icon}
        <p className="my-2" style={textStyle}>
          {text}
        </p>
      </div>
    </XyzTransition>
  );
}

export default function Section4({
  tittle,
  titulo1,
  titulo2,
  titulo3,
  titulo4,
  texto1,
  texto2,
  texto3,
  texto4,
}) {
  return (
    <div className="container p-5">
      <XyzTransition appearVisible xyz="fade-100% left-100% duration-15">
        <h2
          className="d-inline-block align-middle"
          style={{ color: "#f6fafd", overflow: "hidden" }}
        >
          {tittle}
        </h2>
      </XyzTransition>
      <div
        className="row row-cols-1 row-cols-md-3 row-cols-xl-5 justify-content-evenly mx-auto mt-5 gap-5"
        style={{ overflow: "hidden" }}
      >
        <Card
          xyz="fade-100% down-50% duration-15"
          tittle={titulo1}
          text={texto1}
          icon={[<IoColorWandSharp className="fs-2 my-3" style={textStyle} />]}
        />
        <Card
          xyz="fade-100% down-50% duration-15 delay-2"
          tittle={titulo2}
          text={texto2}
          icon={[<IoPhonePortrait className="fs-2 my-3" style={textStyle} />]}
        />
        <Card
            xyz="fade-100% down-50% duration-15 delay-4"
          tittle={titulo3}
          text={texto3}
          icon={[<IoRocket className="fs-2 my-3" style={textStyle} />]}
        />
        <Card
        xyz="fade-100% down-50% duration-15 delay-6"
          tittle={titulo4}
          text={texto4}
          icon={[<IoTrophySharp className="fs-2 my-3" style={textStyle} />]}
        />
      </div>
    </div>
  );
}
