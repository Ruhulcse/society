import React,{useContext} from 'react'
import {LanguageContext} from "../context/language"
import lg from "../assets/img/lg.png";
import facebook from "../assets/img/facebook.png";
import twitter from "../assets/img/twiteer.png";
import youtube from "../assets/img/youtube.png";
import instagram from "../assets/img/instagram.png";
import ios from "../assets/img/ios-store.png";
import play from "../assets/img/play-store.png";




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

    const{english} = useContext(LanguageContext);

    const company = english?[
        {prop: "About Us", link: "about-us"},
        {prop: "Project", link: "project"},
        {prop: "Contact", link: "contact"},
        {prop: "FAQ", link: "faq"},
        {prop: "Reviews", link: "reviews"}
    ]:[
        {prop: "معلومات عنا", link: "about-us"},
        {prop: "المشروع", link: "project"},
        {prop: "اتصال", link: "contact"},
        {prop: "التعليمات", link: "faq"},
        {prop: "المراجعات", link: "reviews"}
    ];
    
    const support = english?[
        {prop: "Contact US", link: "contact-us"},
        {prop: "Privacy Policy", link: "contact-us"},
        {prop: "Tearm of use", link: "tearm-of-use"}
    ]:[
        {prop: "اتصل بنا", link: "contact-us"},
        {prop: "سياسة الخصوصية", link: "contact-us"},
        {prop: "شروط الاستخدام", link: "tearm-of-use"}
    ];
    const foot = english?{
        brand: "ASociety group provides a great service in term of Planning, building, testing, publishing, and maintaining your Mobile and Web Application"
    }:{
        brand: "تقدم مجموعة ASociety خدمة رائعة من حيث التخطيط والبناء والاختبار والنشر وصيانة تطبيقات الهاتف المحمول والويب"
    }
    return (
       <div className="footer-bg">
            <div className="footer">
            <div className="footerLeft">
                <div className="xyz">
                    <img className="img-fluid" src={lg} alt="logo"/>
                    <p className="abouttext">
                    {foot.brand}
                    </p >
                    <small>&copy; {new Date().getFullYear()} A-SOCITY</small>
                </div>
            
                <div className="company">
                    <p className="abouttext">{english?"Company":"شركة"}</p>
                    {company.map((company) => <a href={company.link}>{company.prop}</a>)}
                </div>

                <div className="support">
                    <p className="abouttext" >{english?"Support":"الدعم"}</p>
                    {support.map((support) => <a href={support.link}>{support.prop}</a>)}
                </div>
            
                <div className="contact">
                    <p  className="abouttext">{english?"Contact":"اتصال"}</p>
                    <p className="address">{english?"Parkhill Residence, Bukit Jalil":"باركهيل ريزيدنس ، بوكيت جليل"} <br/> +60-18-1212-123 <br/> {english?"Email: A-Society@mail.com":"البريد الإلكتروني: A-Society@mail.com"}</p>
                </div>
            </div>
            <div className="footerRight">
                <h5>{english?"Subscribe":"الإشتراك"}</h5>
                <p>{english?"Get offers and stay up-to-date":"احصل على العروض وابقَ على اطلاع"}</p>
                <form>
                    <input type="email" placeholder={english?"Email Address":"عنوان البريد الإلكتروني"}/>
                    <input type="submit" value={english?"Subscribe":"الإشتراك"}/> 
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