import React from 'react'
import char from "../assets/img/char.png";
function About() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-6 col-xs-6 sol-sm-6 col-lg-6">
                    <div className="about">
                        <h1>About us</h1>
                        <p className="abouttext">
                        ASociety group provides a great service in term of Planning, building, testing, publishing, and maintaining your Mobile and Web Application. We believe that the success of our customers is also ours and aspire to always be the best business partners anyone can find. Our team is highly skilled where they have an accomplished many project with different business projects requirements. We have built a various of projects such as e-commerce, delivery application, news application, appointment booking systems, bag booking system, Job’s finder and much more.
                        </p>
                        <br></br>
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
