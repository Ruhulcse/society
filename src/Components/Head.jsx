import React from 'react'
import logo from "../assets/img/logo.png";
function Head() {
    return (
        <div className="container-fluid bg">
         <nav className="navbar navbar-expand-md navbar-light ">
            <div>
            <a className="navbar-brand" href="/">
                <img src={logo} style={{height:"100px"}} alt />
            </a>
            </div>
            <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse ml-2" id="navbarCollapse">
                <div className="navbar-nav ml-auto">
                    <a href="#event" className="nav-item nav-link "><span className="navitem">Home</span></a>
                    <a href="#client" className="nav-item nav-link"><span className="navitem">Services</span></a>
                    <a href="#client" className="nav-item nav-link"><span className="navitem">Project</span></a>
                    <a href="#contact" className="nav-item nav-link"><span className="navitem">Contact us</span></a>
                    <a href="#client" className="nav-item nav-link"><span className="navitem">Sign in</span></a>
                    <a href="#client" className="nav-item nav-link"><span className="navitem">Sign up</span></a>
                </div>
            </div>
         </nav>
         <div className="row mt-5">
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
                 <h1>log will be here</h1>
             </div>
         </div>
        </div>
    )
}

export default Head
