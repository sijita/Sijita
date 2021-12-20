import Styles from '../styles/Header.module.css';
import "@animxyz/core";
import { XyzTransition } from '@animxyz/react';
import Logo from '../images/logo3.png';

export function Header() {
    return (
        <header className="d-flex flex-column align-items-center justify-content-center vh-100" style={{ overflow: "hidden" }}>
            <div className="text-center">
                <XyzTransition appear xyz="fade-100% front-5 big-100% duration-20">
                    <img src={Logo} alt="Logo" width="500" className={`mb-4 ${Styles.logo}`} />
                </XyzTransition>
                <XyzTransition appear xyz="fade-100% big-25% duration-20 delay-5">
                    <div className={Styles.title2}><span className={Styles.brackets}>(</span>SIMÓN JIMÉNEZ TAMAYO<span className={Styles.brackets}>)</span></div>
                </XyzTransition>
                <br/><br/>
                <XyzTransition appear xyz="fade-100% small-25% duration-15 delay-10">
                    <div className={Styles.title3}>Diseñador</div>
                </XyzTransition>
            </div>
            <div className="d-flex">
                <XyzTransition appear xyz="fade-100% left-50% duration-15 delay-10">
                    <div className={Styles.title4}> Front </div>
                </XyzTransition>
                <XyzTransition appear xyz="fade-100% small-25% duration-15 delay-10">
                    <div className={Styles.title4}>&nbsp;-&nbsp;</div>
                </XyzTransition>
                <XyzTransition appear xyz="fade-100% right-50% duration-15 delay-10">
                    <div className={Styles.title4}> End </div>
                </XyzTransition>
            </div>
        </header>
    )
}
   