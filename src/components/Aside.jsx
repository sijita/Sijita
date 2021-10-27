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
    if (document.body.scrollTop > 750 || document.documentElement.scrollTop > 750) {
        document.getElementById("myP").classList.remove("d-none");
    } else {
        document.getElementById("myP").classList.add("d-none");
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
                        <hr width="2" size="100" className="mx-auto mb-0" style={{ backgroundColor: '#BAFF29', marginLeft: '10px' }} />
                    </li>
                </XyzTransition>
            </ul>
            <ul className="text-center d-flex flex-column p-0 fixed-bottom mb-0 d-none d-sm-block" style={{ listStyle: 'none', width: 60, left: 'auto'  }}>
                
                <XyzTransition appear xyz="fade-100% down-100% duration-20 delay-4">
                    <li className="my-4">
                        <button id="myP" className={"btn btn-link m-0 p-0 up d-none " + Styles.focusable} onClick={onClickUp}>
                            <CgArrowUpR className="fs-4" style={{ color: '#96a4b3' }}></CgArrowUpR>
                        </button>
                    </li>
                </XyzTransition>
                <XyzTransition appear xyz="fade-100% down-100% duration-10 delay-2">
                    <li>
                        <hr width="2" size="100" className="mx-auto mb-0" style={{ backgroundColor: '#BAFF29', marginLeft: '10px' }} />
                    </li>
                </XyzTransition>
            </ul>
        </aside>
    )
}
