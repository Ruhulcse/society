import React from 'react'
import lg from "../assets/img/lg.png";
import facebook from "../assets/img/facebook.png";
import twitter from "../assets/img/twiteer.png";
import youtube from "../assets/img/youtube.png";
import instagram from "../assets/img/instagram.png";
import ios from "../assets/img/ios-store.png";
import play from "../assets/img/play-store.png";
function Foot() {
    return (
        <div className="container-fluid footer-bg mb-5">
           <div className="row pl-5 pr-5">
               <div className="col-md-8">
                   <div className="col-md-4">
                   <img className="img-fluid" src={lg} alt="logo"/>
                    <p>We are A-Society Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah </p>
                    <small>&copy; {new Date().getFullYear()} A-SOCITY</small>
                   </div>
                   <div className="col-md-2">
                       hello
                   </div>
                     <div className="col-md-2">
                         hello
                   </div>
                     <div className="col-md-2">
                        hello
                   </div>
               </div>
               <div className="col-md-4">
                   hello
               </div>
           </div>
        </div>
    )
}

export default Foot
