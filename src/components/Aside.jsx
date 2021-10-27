import "@animxyz/core";
import { XyzTransition } from '@animxyz/react';
import { CgArrowUpR } from 'react-icons/cg';
import { FiFacebook, FiGithub } from "react-icons/fi";
import { IoLogoWhatsapp, IoLogoInstagram } from "react-icons/io5";
import { animateScroll as scroll } from 'react-scroll';
import Styles from '../styles/Aside.module.css'

export function Aside() {

    window.onscroll = function() {myFunction()};

    function myFunction() {

        const boton = document.getElementById("upBtn")
        const hr = document.getElementById("upHr")

        if (document.body.scrollTop > 750 || document.documentElement.scrollTop > 750) {
            boton.classList.remove("d-none");
            hr.classList.remove("d-none");
        }else {
            boton.classList.add("d-none");
            hr.classList.add("d-none");
        }
    }

    let onClickUp = () => {
        scroll.scrollToTop(
            {
                duration: 100,
                smooth: 'easeInOutQuint',
            }
        );
    }

    return (
        <aside>
            <ul className="text-center d-flex flex-column p-0 fixed-bottom mb-0 d-none d-sm-block" style={{ listStyle: 'none', width: 60 }}>
                <XyzTransition appear xyz="fade-100% down-100% duration-20 delay-10">
                    <li className="my-4">
                        <a href="https://www.facebook.com/simon.jimeneztamayo/" target="_blank" rel="noreferrer">
                            <FiFacebook className="fs-4" style={{color: '#96a4b3'}} />
                        </a>
                    </li>
                </XyzTransition>
                <XyzTransition appear xyz="fade-100% down-100% duration-20 delay-8">
                    <li className="my-4">
                        <a href="https://api.whatsapp.com/send?phone=573193139280&text=Hola!%20Vi%20tu%20portafolio%20y%20estoy%20interesado%20en%20una%20p%C3%A1gina." target="_blank" rel="noreferrer">
                            <IoLogoWhatsapp className="fs-4" style={{color: '#96a4b3'}} />
                        </a>
                    </li>
                </XyzTransition>
                <XyzTransition appear xyz="fade-100% down-100% duration-20 delay-6">
                    <li className="my-4">
                        <a href="https://www.instagram.com/simonjimenezt/" target="_blank" rel="noreferrer">
                            <IoLogoInstagram className="fs-4" style={{color: '#96a4b3'}} />
                        </a>
                    </li>
                </XyzTransition>
                <XyzTransition appear xyz="fade-100% down-100% duration-20 delay-4">
                    <li className="my-4">
                        <a href="https://github.com/sijita" target="_blank" rel="noreferrer">
                            <FiGithub className="fs-4" style={{color: '#96a4b3'}} />
                        </a>
                    </li>
                </XyzTransition>
                <XyzTransition appear xyz="fade-100% down-100% duration-10 delay-2">
                    <li>
                        <hr width="2" size="100" className="mx-auto mb-0" style={{ backgroundColor: '#BAFF29' }} />
                    </li>
                </XyzTransition>
            </ul>
            <ul className="text-center d-flex flex-column p-0 fixed-bottom mb-0 d-none d-sm-block" style={{ listStyle: 'none', width: 60, left: 'auto'  }}>
                <XyzTransition id="upBtn" appearVisible xyz="fade-100% down-100% duration-20 delay-4" className="d-none">
                    <li className="my-4">
                        <button className={"btn btn-link m-0 p-0 up " + Styles.focusable} onClick={onClickUp}>
                            <CgArrowUpR className="fs-4" style={{ color: '#96a4b3' }}></CgArrowUpR>
                        </button>
                    </li>
                </XyzTransition>
                <XyzTransition id="upHr" appearVisible xyz="fade-100% down-100% duration-20 delay-2" className="d-none">
                    <li>
                        <hr width="2" size="100" className="mx-auto mb-0" style={{ backgroundColor: '#BAFF29' }} />
                    </li>
                </XyzTransition>
            </ul>
        </aside>
    )
}
