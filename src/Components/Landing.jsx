import React from 'react'
import About from './About';
import ContactUs from './ContactUs';
import Footer from './Footer';
import Head from './Head';
import LatestProject from './LatestProject';
import Choose from './Choose'
import LatestNews from './LatestNews';
import Service from './Service';
import Work from './Work';
import {Helmet} from 'react-helmet';

function Landing() {
    return (
        <>
            <Helmet>
              <title>Asociety</title>
            </Helmet>
            <Head/>
            <About/>
            <Service/>
            <Work/>
            <Choose/>
            <LatestProject/>
            <LatestNews/> 
            <ContactUs/>
            <Footer/>
        </>
    )
}

export default Landing;
