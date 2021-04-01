import React from 'react'
import char from "../assets/img/char.png";
function About() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-6 col-xs-6 sol-sm-6 col-lg-6">
                    <div className="about">
                        <h1>About us</h1>
                        <p>blah blah blah blah blah blah blah blah blah  blah blah blah blah blah blah blahblah blah blah blah blah blah blah</p>
                        <br></br>
                        <p>blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blahblah blah blah blah blah blah blahblah blah blah blah blah blah blah</p>
                        <br></br>
                        <button className="bt">Learn More</button>
                    </div>
                </div>
                <div className="col-md-6 col-md-6 col-xs-6 sol-sm-6 col-lg-6">
                    <img src={char}  className="img-fluid" alt="not found"/>
                </div>
            </div>
        </div>
    )
}

export default About
