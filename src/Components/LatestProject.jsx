import React,{useState} from 'react'
import project1 from "../assets/img/project1.png";
import project2 from "../assets/img/Screenshot -2.png";
function LatestProject() {
    const [ourProject,setOurProject] = useState(true);

    return (
        <div className="container-fluid sbg">
            <div className="row pt-5"></div>
            <div className="d-flex justify-content-center pt-5">
                <h2>Our Latest Project</h2>
            </div>
            <div className="d-flex justify-content-center">
               <p>blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah</p>
            </div>
            <div className="row">
                <div className="col-md-5">
                    <hr></hr>
                </div>
                <div className="col-md-3">
                    <div className="row">
                        <div className="col-md-12">
                            <button className="btn btn-danger" onClick={()=>setOurProject(true)}>Our projects</button>
                            <button className="btn sc" onClick={()=>setOurProject(false)}>Partnered projects</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <hr></hr>
                </div>
            </div>
            <div className="row pt-5 pl-5 pr-5">
                <div className="col-md-3">
                 <img src={project1}  className="img-fluid" alt="not found"/>
                 <div class="firstpic">
                    <h4 className="text-center">Troopers</h4>
                    <a href="#c" className="firstlink">Check Project&#8811;</a>
                </div>
                </div>
                <div className="col-md-3 pbox">
                <img src={project2}  className="img-fluid" alt="not found"/>
                <div class="text-block">
                    <h4>Nature</h4>
                    <p>What a beautiful sunrise</p>
                </div>
                </div>
                <div className="col-md-3 pbox">
                <img src={project1}  className="img-fluid" alt="not found"/>
                <div class="firstpic">
                    <h4 className="text-center">Yamanat</h4>
                    <a href="#c" className="firstlink">Check Project&#8811;</a>
                </div>
                </div>
                <div className="col-md-3 pbox">
                <img src={project2}  className="img-fluid" alt="not found"/>
                <div class="text-block">
                    <h4>Nature</h4>
                    <p>What a beautiful sunrise</p>
                </div>
                </div>
            </div>
        </div>
    )
}

export default LatestProject
