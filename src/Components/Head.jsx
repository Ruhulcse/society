import React ,{useContext}from 'react'
import {LanguageContext} from "../context/language"
import logo from "../assets/img/newlogo.png";
function Head() {
    const{english,en,ar} = useContext(LanguageContext);

    const nav =english?{
        home:"HOME",
        service: "SERVICES",
        project: "PROJECTS",
        contact: "CONTACT US",
        signin: "Sign up",
        signup: "Sign in",
        you: "You",
        think: "Think It",
        we: "We Build It",
        do: "Do you have an idea..",
        but: "But doesn't know how to build it",
        learn: "Learn More",
    }:{
        home: "الصفحة الرئيسية",
        service: "الخدمات",
        project: "المشروع",
        contact: "اتصل بنا",
        signin: "تسجيل الدخول",
        signup: "اشتراك",
        you: "أنت",
        think: "فكر في ذلك",
        we: "نحن نبنيها",
        do: "هل لديك فكرة..",
        but: "لكن لا يعرف كيف يبنيه",
        learn: "يتعلم أكثر"
    };
   
   const  onChangeOption=(Language)=>{
    Language==='E'?en():ar();
    let language = Language==='E'?'true':'false';
    localStorage.setItem('english', language);
    }

    return (
        <div className="container-fluid bg" id="home">
             {/* <button onClick={en}>english</button>
             <button onClick={ar}>arabic</button> */}
         <div className="row pt-5">
             <div className="col-md-3">
                <div>
                    <a className="navbar-brand" style={{paddingLeft:"32%",paddingTop:"4%"}} href="/">
                        <img src={logo}  className="img-fluid"  alt="not found" />
                    </a>
                </div>
             </div>
             <div className="col-md-9">
             <nav className="navbar navbar-expand-md navbar-light ">
                <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse ml-2" id="navbarCollapse">
                    <div className="col-md-9 navbar-nav responsivenav ml-auto" style={{paddingLeft:"3%"}}>
                        <a href="#home" className=" nav-item nav-link "> <section className="navitem">{nav.home}</section></a>
                        <a href="#service" className=" nav-item nav-link"> <section className="navitem">{nav.service}</section></a>
                        <a href="#project" className=" nav-item nav-link"> <section className="navitem">{nav.project}</section></a>
                        <a href="#contact" className=" nav-item nav-link"> <section className="navitem">{nav.contact}</section></a>
                    </div>
                    <div className="col-md-3 navbar-nav sidenav ml-auto">
                        <a href="/signup" className="nav-item nav-link"  ><section className="naviteml">{nav.signin}</section></a>
                        <a href="/login" className="nav-item nav-link border" ><section className="naviteml">{nav.signup}</section></a>
                        {/* <select className="opt" name="select1" onClick={onChangeOption}>
                        <option value='E'>English</option>
                        <option value='A'>عربى</option>
                        </select> */}
                        {!english?<button onClick={()=>onChangeOption('E')} className="btn btn-success buttondiv">
                            English
                        </button>:<button onClick={()=>onChangeOption('A')} className="btn btn-danger buttondiv">
                            Arabic
                        </button> }
                    </div>
                </div>
             </nav>
             </div>
         </div>
         <div className="d-flex mt-5 pt-5">
             <div className="col-md-12">
                 <div className="slogan">
                     <h1 className="brand">
                     <span className="">{nav.you}</span>
                     <span className="redFont">{nav.think}</span>
                     </h1>
                     <h1 className="brand">{nav.we}</h1>
                     <p className="pstyle">{nav.do}</p>
                     <p className="pstyle">{nav.but}</p>
                     <br></br>
                     <button className="btntop">{nav.learn}</button>
                 </div>
             </div>
         </div>
        </div>
    )
}

export default Head
