import "@animxyz/core";
import { XyzTransition } from "@animxyz/react";
import { CgArrowUpR } from "react-icons/cg";
import { FiFacebook, FiGithub } from "react-icons/fi";
import { IoLogoWhatsapp, IoLogoInstagram } from "react-icons/io5";
import { animateScroll as scroll } from "react-scroll";
import Styles from "../styles/Aside.module.css";

function Red({ xyz, href, icon }) {
  return (
    <XyzTransition appear xyz={xyz}>
      <li className="my-4">
        <a href={href} target="_blank" rel="noreferrer">
          {icon}
        </a>
      </li>
    </XyzTransition>
  );
}

export function Aside({ xyza, xyzb, xyzc, xyzd, xyze }) {
  window.onscroll = function () {
    myFunction();
  };

  function myFunction() {
    const boton = document.getElementById("upBtn");
    const hr = document.getElementById("upHr");

    if (
      document.body.scrollTop > 750 ||
      document.documentElement.scrollTop > 750
    ) {
      boton.classList.remove("d-none");
      hr.classList.remove("d-none");
    } else {
      boton.classList.add("d-none");
      hr.classList.add("d-none");
    }
  }

  let onClickUp = () => {
    scroll.scrollToTop({
      duration: 100,
      smooth: "easeInOutQuint",
    });
  };

  return (
    <aside>
      <svg width="0" height="0">
        <linearGradient id="green-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop stopColor="#baff29" offset="0%" />
          <stop stopColor="#3fea2f" offset="100%" />
        </linearGradient>
      </svg>
      <ul
        className="text-center d-flex flex-column p-0 fixed-bottom mb-0 d-none d-sm-block"
        style={{ listStyle: "none", width: 60 }}
      >
        <Red
          xyz={xyza}
          href="https://www.facebook.com/simon.jimeneztamayo/"
          icon={[
            <FiFacebook
              className={`fs-4 ${Styles.hovStroke}`}
              style={{ color: "#96a4b3" }}
            />,
          ]}
        />
        <Red
          xyz={xyzb}
          href="https://api.whatsapp.com/send?phone=573193139280&text=Hola!%20Vi%20tu%20portafolio%20y%20estoy%20interesado%20en%20una%20p%C3%A1gina."
          icon={[
            <IoLogoWhatsapp className={`fs-4 ${Styles.hovFill}`} style={{ color: "#96a4b3" }} />,
          ]}
        />
        <Red
          xyz={xyzc}
          href="https://www.instagram.com/simonjimenezt/"
          icon={[
            <IoLogoInstagram className={`fs-4 ${Styles.hovFill}`} style={{ color: "#96a4b3" }} />,
          ]}
        />
        <Red
          xyz={xyzd}
          href="https://github.com/sijita"
          icon={[<FiGithub className={`fs-4 ${Styles.hovStroke}`} style={{ color: "#96a4b3" }} />]}
        />
        <XyzTransition appear xyz={xyze}>
          <li>
            <hr
              width="2"
              size="150"
              className="mx-auto mb-0"
              style={{ backgroundImage: "linear-gradient(180deg, #baff29 0%, #3fea2f 100%)" }}
            />
          </li>
        </XyzTransition>
      </ul>
      <ul
        className="text-center d-flex flex-column p-0 fixed-bottom mb-0 d-none d-sm-block"
        style={{ listStyle: "none", width: 60, left: "auto" }}
      >
        <XyzTransition
          id="upBtn"
          appearVisible
          xyz="fade-100% down-100% duration-20 delay-4"
          className="d-none"
        >
          <li className="my-4">
            <button
              className={"btn btn-link m-0 p-0 up " + Styles.focusable}
              onClick={onClickUp}
            >
              <CgArrowUpR
                className="fs-4"
                style={{ color: "#96a4b3" }}
              ></CgArrowUpR>
            </button>
          </li>
        </XyzTransition>
        <XyzTransition
          id="upHr"
          appearVisible
          xyz="fade-100% down-100% duration-20 delay-2"
          className="d-none"
        >
          <li>
            <hr
              width="2"
              size="150"
              className="mx-auto mb-0"
              style={{ backgroundImage: "linear-gradient(180deg, #baff29 0%, #3fea2f 100%)" }}
            />
          </li>
        </XyzTransition>
      </ul>
    </aside>
  );
}
