import React,{useState} from 'react'
import project1 from "../assets/img/project1.png";
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
                            <button className="btn btn-success" onClick={()=>setOurProject(false)}>Partnered projects</button>
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
                 <div>
                     hello
                 </div>
                </div>
                <div className="col-md-3">
                <img src={project1}  className="img-fluid" alt="not found"/>
                </div>
                <div className="col-md-3">
                <img src={project1}  className="img-fluid" alt="not found"/>
                </div>
                <div className="col-md-3">
                <img src={project1}  className="img-fluid" alt="not found"/>
                </div>
            </div>
        </div>
    )
}

export default LatestProject
