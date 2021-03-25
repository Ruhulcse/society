import React ,{useContext}from 'react'
import {LanguageContext} from "../context/language"
import logo from "../assets/img/logo.png";
import coolDesign  from "../assets/img/Cool Design.png";
function Head() {
    const{english,en,ar} = useContext(LanguageContext);

    const nav =english?{
        home:"Home",
        service: "Service",
        project: "Project",
        contact: "Contact us",
        signin: "Sign in",
        signup: "Sign up",
    }:{
        home: "الصفحة الرئيسية",
        service: "الخدمات",
        project: "المشروع",
        contact: "اتصل بنا",
        signin: "تسجيل الدخول",
        signup: "اشتراك",
    };
  
    return (
        <div className="container-fluid bg">
             <button onClick={en}>english</button>
             <button onClick={ar}>arabic</button>
         <nav className="navbar navbar-expand-md navbar-light ">
            <div>
            <a className="navbar-brand" href="/">
                <img src={logo} style={{height:"100px"}} alt="not found" />
            </a>
            </div>
            <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse ml-2" id="navbarCollapse">
                <div className="navbar-nav ml-auto">
                    <a href="#event" className="nav-item nav-link "><span className="navitem">{nav.home}</span></a>
                    <a href="#client" className="nav-item nav-link"><span className="navitem">{nav.service}</span></a>
                    <a href="#client" className="nav-item nav-link"><span className="navitem">{nav.project}</span></a>
                    <a href="#contact" className="nav-item nav-link"><span className="navitem">{nav.contact}</span></a>
                    <a href="#client" className="nav-item nav-link"><span className="navitem">{nav.signin}</span></a>
                    <a href="#client" className="nav-item nav-link"><span className="navitem">{nav.signup}</span></a>
                </div>
            </div>
         </nav>
         <div className="d-flex mt-5">
             <div className="col-md-6">
                 <div className="slogan">
                     <h1 className="brand">
                     <span className="">You </span>
                     <span className="redFont">Think It</span>
                     </h1>
                     <h1 className="brand">We Build it</h1>
                     <p>Do you have an idea..</p>
                     <p>But doesn't know how to build it</p>
                     <button className="bt">Learn More</button>
                 </div>
             </div>
             <div className="col-md-6">
               <img src={coolDesign}  className="img-fluid" alt="not found"/>
             </div>
         </div>
        </div>
    )
}

export default Head
