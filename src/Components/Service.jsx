import React,{useContext} from 'react'
import {LanguageContext} from "../context/language"
import web from "../assets/img/icon.png";
import apps from "../assets/img/icon-2.png";
import hosting from "../assets/img/Group 283.png";
import ux from "../assets/img/icon-1.png";
import seo from "../assets/img/icon-3.png"; 
import graphics from "../assets/img/Op component 1.png";
function Service() {
   const{english} = useContext(LanguageContext);
    return (  
        <div class="card sbg">
        <div class="card-body box">
            <div className="container">
               <div className="d-flex justify-content-center">
                   <h1>Our Services</h1>
               </div>
               <div className="d-flex justify-content-center">
                 <p className="text-center m-1">We are the best on the market & we can prove with more than just words,</p>
               </div>
               <div className="d-flex justify-content-center">
                 <p className="text-center">check our projects below</p>
               </div>
               <div className="row pt-5">
                <div class="col-sm-6 col-md-4 col-lg-4">
                 <div className="d-flex justify-content-center">
                    <div>
                    <div className="square">
                     <img src={web} className="img-fluid" alt="not found"/>
                    </div>
                    </div>
                 </div>
                 <div className="d-flex justify-content-center">
                   <h4 className="pt-4">Web Development</h4>
                 </div>
                 <div className="d-flex justify-content-center">
                    <p className="text-center m-1">
                    A decade of design experience has sharpened our team’s competence in building cutting-edge UI and UX, and we make sure to adhere to the most up-to-date industry standards, workflows, and guidelines.

                   This means that you’ll get the product you need, exactly how you need it and when you need it
                    </p>
                 </div>
                </div>
                <div class="col-sm-6 col-md-4 col-lg-4">
                 <div className="d-flex justify-content-center">
                    <div className="square">
                      <img src={apps} className="img-fluid" alt="not found"/>
                    </div>
                 </div>
                 <div className="d-flex justify-content-center">
                   <h4 className="pt-4">Apps Development</h4>
                 </div>
                 <div className="d-flex justify-content-center">
                    <p className="text-center m-1">
                      Our mobile apps are designed to perform at all costs. Our team takes pride in designing mobile applications that your customers will find secure, functional, and easy to uses.
                    </p>
                 </div>
                </div>
                <div class="col-sm-6 col-md-4 col-lg-4">
                 <div className="d-flex justify-content-center">
                    <div className="square">
                        <img src={hosting} className="img-fluid" alt="not found"/>
                    </div>
                 </div>
                 <div className="d-flex justify-content-center">
                   <h4 className="pt-4">Web Hosting</h4>
                 </div>
                 <div className="d-flex justify-content-center">
                    <p className="text-center m-1">
                    Digitally transforming your business gives you access to new revenue streams, cost-saving opportunities, and the freedom to do more with less.
                    </p>
                 </div>
                </div>
               </div>
               <div className="row pt-5 pb-5">
               <div class="col-sm-6 col-md-4 col-lg-4">
                 <div className="d-flex justify-content-center">
                    <div className="square">
                     <img src={ux} className="img-fluid" alt="not found"/>
                    </div>
                 </div>
                 <div className="d-flex justify-content-center">
                   <h4 className="pt-4">UX Design</h4>
                 </div>
                 <div className="d-flex justify-content-center">
                    <p className="text-center m-1">
                    A decade of design experience has sharpened our team’s competence in building cutting-edge UI and UX, and we make sure to adhere to the most up-to-date industry standards, workflows, and guidelines. This means that you will get the product you need, exactly how you need it and when you need it.
                    </p>
                 </div>
                </div>
                <div class="col-sm-6 col-md-4 col-lg-4">
                 <div className="d-flex justify-content-center">
                    <div className="square">
                     <img src={seo} className="img-fluid" alt="not found"/>
                    </div>
                 </div>
                 <div className="d-flex justify-content-center">
                   <h4 className="pt-4">SEO Optimize</h4>
                 </div>
                 <div className="d-flex justify-content-center">
                    <p className="text-center m-1">
                    We can increase the number of users to your sites and make more engagement to your website. Through this process, the quality and quantity of your site traffic will be improved.
                    </p>
                 </div>
                </div>
                <div class="col-sm-6 col-md-4 col-lg-4">
                 <div className="d-flex justify-content-center">
                    <div className="square">
                      <img src={graphics} className="img-fluid" alt="not found"/>
                    </div>
                 </div>
                 <div className="d-flex justify-content-center">
                   <h4 className="pt-4">Video Production</h4>
                 </div> 
                 <div className="d-flex justify-content-center">
                    <p className="text-center m-1">
                    Impress people and get your message across in style with videos.

We will work closely with you to make sure the videos work for your needs and reach a broad audience, at a surprisingly affordable price.
                    </p>
                 </div>
                </div>
               </div>
            </div>
        </div>
        </div>
    )
}

export default Service
