import React from 'react'
import project1 from "../assets/img/project1.png";
import project2 from "../assets/img/Screenshot -2.png";
function ClientProject() {
    return (
        <div>
        <div className="row pt-5 pb-5">
          <div className="col-md-3 pt-5 ">
             <img src={project1}  className="img-fluid" alt="not found"/>
             <div class="firstpic">
                <h4 className="text-center">Troopers</h4>
                <a href="#c" className="firstlink">Check Project&#8811;</a>
            </div>
            </div>
            <div className="col-md-3 pt-5 ">
            <img src={project1}  className="img-fluid" alt="not found"/>
            <div class="firstpic">
                <h4 className="text-center">Skin laza</h4>
                <a href="#c" className="firstlink">Check Project&#8811;</a>
            </div>
            </div>
            <div className="col-md-3 pt-5 ">
             <img src={project1}  className="img-fluid" alt="not found"/>
             <div class="firstpic">
                <h4 className="text-center">Troopers</h4>
                <a href="#c" className="firstlink">Check Project&#8811;</a>
            </div>
            </div>
            <div className="col-md-3 pt-5 ">
            <img src={project1}  className="img-fluid" alt="not found"/>
            <div class="firstpic">
                <h4 className="text-center">Skin laza</h4>
                <a href="#c" className="firstlink">Check Project&#8811;</a>
            </div>
            </div>
        </div>
    </div>
    )
}

export default ClientProject
