import React ,{useContext}from 'react'
import {LanguageContext} from "../context/language"
import logo from "../assets/img/newlogo.png";
import coolDesign  from "../assets/img/Cool Design.png";
function Head() {
    const{english,en,ar} = useContext(LanguageContext);

    const nav =english?{
        home:"HOME",
        service: "SERVICES",
        project: "PROJECTS",
        contact: "CONTACT US",
        signin: "Sign up",
        signup: "Sign in",
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
         <div className="row pt-5">
             <div className="col-md-2">
                <div>
                    <a className="navbar-brand" href="/">
                        <img src={logo}  className="img-fluid"  alt="not found" />
                    </a>
                </div>
             </div>
             <div className="col-md-10">
             <nav className="navbar navbar-expand-md navbar-light ">
                <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse ml-2" id="navbarCollapse">
                    <div className="col-md-9 navbar-nav ml-auto" style={{paddingLeft:"15%"}}>
                        <a href="#event" className="pl-5 nav-item nav-link "> <section className="navitem">{nav.home}</section></a>
                        <a href="#client" className="pl-5 nav-item nav-link"> <section className="navitem">{nav.service}</section></a>
                        <a href="#client" className="pl-5 nav-item nav-link"> <section className="navitem">{nav.project}</section></a>
                        <a href="#contact" className="pl-5 nav-item nav-link"> <section className="navitem">{nav.contact}</section></a>
                    </div>
                    <div className="col-md-3 navbar-nav ml-auto">
                       <a href="#client" className="nav-item nav-link"  ><span className="navitem">{nav.signin}</span></a>
                        <a href="#client" className="nav-item nav-link" ><span className="navitem">{nav.signup}</span></a>
                    </div>
                </div>
             </nav>
             </div>
         </div>
         {/* <div className="d-flex mt-5">
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
         </div> */}
        </div>
    )
}

export default Head
