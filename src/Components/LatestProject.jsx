import React,{useState} from 'react'
import OurProject from "./OurProject";
import ClientProject from "./ClientProject"
function LatestProject() {

    const [ourProject,setOurProject] = useState(true);

    return (
        <div className="container-fluid">
            <div className="row pt-5"></div>
            <div className="d-flex justify-content-center pt-5">
                <h2>Our Latest Project</h2>
            </div>
            <div className="d-flex justify-content-center">
               <p>blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah</p>
            </div>
            <div className="row pl-5 pr-5">
                <div className="col-md-12 decorated">
                   <span>
                   <button className="btn btn-danger" onClick={()=>setOurProject(true)}>Our projects</button>
                    <button className="btn sc" onClick={()=>setOurProject(false)}>Partnered projects</button>
                   </span>
                </div>
            </div>
            {ourProject?<OurProject/>:<ClientProject/>}
        </div>
    )
}

export default LatestProject
