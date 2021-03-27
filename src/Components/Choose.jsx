import React from 'react'
import phone  from "../assets/img/phone.png";
import clock  from "../assets/img/clock (6).png";
import emoji from "../assets/img/emoji.png";
import headset from "../assets/img/headset.png";
import research from "../assets/img/research.png";
import surface from "../assets/img/surface1.png";
import awareness from "../assets/img/awareness.png"
function Choose() {
    return (
        <div className="container-fluid cbg">
            <div className="row" style={{paddingTop: "5%",paddingBottom: "5%"}}>
                <div className="col-md-2">
                    {/* <h1>Logo missing</h1> */}
                </div>
                <div className="col-md-6">
                    <h1>
                        <span style={{color:"white"}}>Why You Should Choose </span>
                        <span style={{color: "#ffc7c7",fontWeight: "bold"}}>#A-Society</span>
                    </h1>
                    <div className="row pt-5">
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-md-3 pt-4 pl-5">
                                    <img src={clock}  className="img-fluid" alt="not found"/>
                                </div>
                                <div className="col-md-9">
                                    <h3 className="txtc">Fast Process</h3>
                                    <p className="txtc">The process takes minutes and you get instant quotes online</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-md-3 pt-4 pl-5">
                                  <img src={research}  className="img-fluid" alt="not found"/>
                                </div>
                                <div className="col-md-9">
                                    <h3 className="txtc">Best Prices</h3>
                                    <p className="txtc">We Deliver the best experience with the best price on the market.</p>
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
                                    <h3 className="txtc">Fast Process</h3>
                                    <p className="txtc">The process takes minutes and you get instant quotes online</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-md-3 pt-4 pl-5">
                                  <img src={headset}  className="img-fluid" alt="not found"/>
                                </div>
                                <div className="col-md-9">
                                    <h3 className="txtc">Best Prices</h3>
                                    <p className="txtc">We Deliver the best experience with the best price on the market.</p>
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
                                    <h3 className="txtc">Fast Process</h3>
                                    <p className="txtc">The process takes minutes and you get instant quotes online</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-md-3 pt-4 pl-5">
                                  <img src={emoji}  className="img-fluid" alt="not found"/>
                                </div>
                                <div className="col-md-9">
                                    <h3 className="txtc">Best Prices</h3>
                                    <p className="txtc">We Deliver the best experience with the best price on the market.</p>
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
