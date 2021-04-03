import React from 'react';
import lg from "../assets/img/lg.png";
import facebook from "../assets/img/facebook.png";
import twitter from "../assets/img/twiteer.png";
import youtube from "../assets/img/youtube.png";
import instagram from "../assets/img/instagram.png";
import ios from "../assets/img/ios-store.png";
import play from "../assets/img/play-store.png";


const company = [
    {prop: "About Us", link: "about-us"},
    {prop: "Project", link: "project"},
    {prop: "Contact", link: "contact"},
    {prop: "FAQ", link: "faq"},
    {prop: "Reviews", link: "reviews"}
];

const support = [
    {prop: "Contact US", link: "contact-us"},
    {prop: "Privacy Policy", link: "contact-us"},
    {prop: "Tearm of use", link: "tearm-of-use"}
];

const social = [
    {name:"facebook", link: "https://www.facebook.com", img: facebook},
    {name:"twitter", link: "https://www.twitter.com", img: twitter},
    {name:"instagram", link: "https://www.instagram.com", img: instagram},
    {name:"youtube", link: "https://www.youtube.com", img: youtube}
];

const appStore = [
    {name:"Apple Store", link: "https://play.google.com/store/apps", img: ios},
    {name:"Play Store", link: "https://www.apple.com/app-store/", img: play}
];


const Footer = () => {
    return (
       <div className="footer-bg">
            <div className="footer">
            <div className="footerLeft">
                <div className="xyz">
                    <img className="img-fluid" src={lg} alt="logo"/>
                    <p>We are A-Society Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah </p>
                    <small>&copy; {new Date().getFullYear()} A-SOCITY</small>
                </div>
            
                <div className="company">
                    <p>Company</p>
                    {company.map((company) => <a href={company.link}>{company.prop}</a>)}
                </div>

                <div className="support">
                    <p>Support</p>
                    {support.map((support) => <a href={support.link}>{support.prop}</a>)}
                </div>
            
                <div className="contact">
                    <p>Contact</p>
                    <p className="address">Parkhill Residence, Bukit Jalil <br/> +60-18-1212-123 <br/> Email: A-Society@mail.com</p>
                </div>
            </div>
            <div className="footerRight">
                <h5>Subscribe</h5>
                <p>Get offers and stay up-to-date</p>
                <form>
                    <input type="email" placeholder="Email Address"/>
                    <input type="submit" value="Subscribe"/> 
                </form>
                <div className="link">
                    {social.map((social) => <a className="social-link" href={social.link}><img src={social.img} alt=""/></a>)}
                    
                    {appStore.map((appStore) => <a className="app-link" href={appStore.link}><img src={appStore.img} alt=""/></a>)}  
                </div>
            </div>
        </div>
       </div>
    );
};

export default Footer;