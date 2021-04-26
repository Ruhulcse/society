import React,{useContext,useState} from 'react'
import {LanguageContext} from "../context/language"
import OurProject from "./OurProject";
import ClientProject from "./ClientProject"
function LatestProject() {

    const{english} = useContext(LanguageContext);
    const [ourProject,setOurProject] = useState(true);
    const project = english?{
        title: "Our Latest Project",
        description: "blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah",
        button1: "Our Projects",
        button2: "Partnered projects"

    }:{
        title: "أحدث مشروع لدينا",
        description: "لاه بلاه بلاه بلاه بلاه بلاه بلاه بلاه بلاه بلاه بلاه بلاه بلاه",
        button1: "مشاريعنا",
        button2: "المشاريع المشتركة"
    }
    return (
        <div className="container-fluid" id="project">
            <div className="row pt-5"></div>
            <div className="d-flex justify-content-center pt-5">
                <h2>{project.title}</h2>
            </div>
            <div className="d-flex justify-content-center">
               <p className="abouttext">{project.description}</p>
            </div>
            <div className="row pl-5 pr-5">
                <div className="col-md-12 decorated">
                   <span>
                   <button className="btn btn-danger" onClick={()=>setOurProject(true)}>{project.button1}</button>
                    <button className="btn sc" onClick={()=>setOurProject(false)}>{project.button2}</button>
                   </span>
                </div>
            </div>
            {ourProject?<OurProject/>:<ClientProject/>}
        </div>
    )
}

export default LatestProject
