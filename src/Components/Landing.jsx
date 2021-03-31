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
function Landing() {
    return (
        <div>
            <Head/>
            <About/>
            <Service/>
            <Work/>
            <Choose/>
            <LatestProject/>
            <LatestNews/>
            <ContactUs/>
            <Footer/>
        </div>
    )
}

export default Landing;
