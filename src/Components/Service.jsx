import React from 'react'
import icon from "../assets/img/icon.svg";
function Service() {
    return (
        <div class="card sbg">
        <div class="card-body box">
            <div className="container">
               <div className="d-flex justify-content-center">
                   <h1>Our Services</h1>
               </div>
               <div className="d-flex justify-content-center">
                 <p className="text-center m-1">We are the best on the market & we can prove with more than just words, check our projects below</p>
               </div>
               <div className="row pt-5">
                <div class="col-sm-6 col-md-4 col-lg-4">
                 <div className="d-flex justify-content-center">
                    <div className="square">
                     <img src={icon} className="img-fluid" alt="not found"/>
                    </div>
                 </div>
                 <div className="d-flex justify-content-center">
                   <h4 className="pt-4">Web Development</h4>
                 </div>
                 <div className="d-flex justify-content-center">
                    <p className="text-center m-1">blah blah blah blah blah blah blah blahblah blah blah blah</p>
                 </div>
                </div>
                <div class="col-sm-6 col-md-4 col-lg-4">
                 <div className="d-flex justify-content-center">
                    <div className="square">
                      <img src={icon} className="img-fluid" alt="not found"/>
                    </div>
                 </div>
                 <div className="d-flex justify-content-center">
                   <h4 className="pt-4">Apps Development</h4>
                 </div>
                 <div className="d-flex justify-content-center">
                    <p className="text-center m-1">blah blah blah blah blah blah blah blahblah blah blah blah</p>
                 </div>
                </div>
                <div class="col-sm-6 col-md-4 col-lg-4">
                 <div className="d-flex justify-content-center">
                    <div className="square">
                        <img src={icon} className="img-fluid" alt="not found"/>
                    </div>
                 </div>
                 <div className="d-flex justify-content-center">
                   <h4 className="pt-4">Web Hosting</h4>
                 </div>
                 <div className="d-flex justify-content-center">
                    <p className="text-center m-1">blah blah blah blah blah blah blah blahblah blah blah blah</p>
                 </div>
                </div>
               </div>
               <div className="row pt-5 pb-5">
               <div class="col-sm-6 col-md-4 col-lg-4">
                 <div className="d-flex justify-content-center">
                    <div className="square">
                     <img src={icon} className="img-fluid" alt="not found"/>
                    </div>
                 </div>
                 <div className="d-flex justify-content-center">
                   <h4 className="pt-4">UX Design</h4>
                 </div>
                 <div className="d-flex justify-content-center">
                    <p className="text-center m-1">blah blah blah blah blah blah blah blahblah blah blah blah</p>
                 </div>
                </div>
                <div class="col-sm-6 col-md-4 col-lg-4">
                 <div className="d-flex justify-content-center">
                    <div className="square">
                     <img src={icon} className="img-fluid" alt="not found"/>
                    </div>
                 </div>
                 <div className="d-flex justify-content-center">
                   <h4 className="pt-4">SEO Optimize</h4>
                 </div>
                 <div className="d-flex justify-content-center">
                    <p className="text-center m-1">blah blah blah blah blah blah blah blahblah blah blah blah</p>
                 </div>
                </div>
                <div class="col-sm-6 col-md-4 col-lg-4">
                 <div className="d-flex justify-content-center">
                    <div className="square">
                      <img src={icon} className="img-fluid" alt="not found"/>
                    </div>
                 </div>
                 <div className="d-flex justify-content-center">
                   <h4 className="pt-4">Motion Graphic</h4>
                 </div>
                 <div className="d-flex justify-content-center">
                    <p className="text-center m-1">blah blah blah blah blah blah blah blahblah blah blah blah</p>
                 </div>
                </div>
               </div>
            </div>
        </div>
        </div>
    )
}

export default Service
