import React from "react";
import { NavBar } from '../components/NavBar';
import { Header } from '../components/Header';
import { Aside } from '../components/Aside';
import { Main } from '../components/Main';
import { Footer } from '../components/Footer';

const Home = () => {
    return (
        <React.Fragment>
            <NavBar />
            <Header />
            <Main />
            <Footer />
            <Aside />
        </React.Fragment>

    );
}

export default Home; 