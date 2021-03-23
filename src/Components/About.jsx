import React from 'react'
import char from "../assets/img/char.png";
function About() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-6">
                    <div className="about">
                        <h1>About us</h1>
                        <p>blah blah blah blah blah blah blah blah blah  blah blah blah blah blah blah blahblah blah blah blah blah blah blah</p>
                        <br></br>
                        <p>blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blahblah blah blah blah blah blah blahblah blah blah blah blah blah blah</p>
                        <button className="bt">Learn More</button>
                    </div>
                </div>
                <div className="col-md-6">
                    <img src={char}  className="img-fluid" alt="not found"/>
                </div>
            </div>
        </div>
    )
}

export default About
