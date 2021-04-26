import React,{useContext} from 'react'
import {LanguageContext} from "../context/language"
import phone  from "../assets/img/phone.png";
import clock  from "../assets/img/clock (6).png";
import emoji from "../assets/img/emoji.png";
import headset from "../assets/img/headset.png";
import research from "../assets/img/research.png";
import surface from "../assets/img/surface1.png";
import awareness from "../assets/img/awareness.png"
import path from "../assets/img/new.png"

function Choose() {
    const{english} = useContext(LanguageContext);
    return (
        <div className="container-fluid cbg">
            <div className="row" style={{paddingTop: "5%",paddingBottom: "5%"}}>
                <div className="col-md-2">
                  <img className="img" src={path} alt="not found"/>
                </div>
                <div className="col-md-6 mid">
                    <h1>
                        <span style={{color:"white"}}>{english?"Why You Should Choose":"لماذا يجب أن تختار"}</span>
                        <span style={{color: "#ffc7c7",fontWeight: "bold"}}>#A-Society</span>
                    </h1>
                    <div className="row pt-5">
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-md-3 pt-4 pl-5">
                                    <img src={clock}  className="img-fluid" alt="not found"/>
                                </div>
                                <div className="col-md-9">
                                    <h3 className="txtc">{english?"Fast Process":"عملية سريعة"}</h3>
                                    <p className="txtc">{english?"The process takes minutes and you get instant quotes online":"تستغرق العملية دقائق وستحصل على عروض أسعار فورية عبر الإنترنت"}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-md-3 pt-4 pl-5">
                                  <img src={research}  className="img-fluid" alt="not found"/>
                                </div>
                                <div className="col-md-9">
                                    <h3 className="txtc">{english?"Best Prices":"أفضل الأسعار"}</h3>
                                    <p className="txtc">{english?"We Deliver the best experience with the best price on the market.":"نحن نقدم أفضل تجربة بأفضل سعر في السوق."}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row pt-5">
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-md-3 pt-4 pl-5">
                                    <img src={surface}  className="img-fluid" alt="not found"/>
                                </div>
                                <div className="col-md-9">
                                    <h3 className="txtc">{english?"Fast Process":"عملية سريعة"}</h3>
                                    <p className="txtc">{english?"The process takes minutes and you get instant quotes online":"تستغرق العملية دقائق وستحصل على عروض أسعار فورية عبر الإنترنت"}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-md-3 pt-4 pl-5">
                                  <img src={headset}  className="img-fluid" alt="not found"/>
                                </div>
                                <div className="col-md-9">
                                    <h3 className="txtc">{english?"Best Prices":"أفضل الأسعار"}</h3>
                                    <p className="txtc">{english?"We Deliver the best experience with the best price on the market.":"نحن نقدم أفضل تجربة بأفضل سعر في السوق."}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row pt-5">
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-md-3 pt-4 pl-5">
                                    <img src={awareness}  className="img-fluid" alt="not found"/>
                                </div>
                                <div className="col-md-9">
                                    <h3 className="txtc">{english?"Fast Process":"عملية سريعة"}</h3>
                                    <p className="txtc">{english?"The process takes minutes and you get instant quotes online":"تستغرق العملية دقائق وستحصل على عروض أسعار فورية عبر الإنترنت"}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-md-3 pt-4 pl-5">
                                  <img src={emoji}  className="img-fluid" alt="not found"/>
                                </div>
                                <div className="col-md-9">
                                   <h3 className="txtc">{english?"Best Prices":"أفضل الأسعار"}</h3>
                                    <p className="txtc">{english?"We Deliver the best experience with the best price on the market.":"نحن نقدم أفضل تجربة بأفضل سعر في السوق."}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                  <img src={phone}  className="img-fluid" alt="not found"/>
                </div>
            </div>
        </div>
    )
}

export default Choose
