import React, { useState,useEffect } from 'react';
import project1 from "../assets/img/test.PNG";
import project2 from "../assets/img/Screenshot -2.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from 'axios';

function ClientProject() {

    const [projects,setProjects] = useState([]);
  
 
    useEffect(() => {
      try {
        async function fetchprojectData() {
          const {data } = await axios.get("http://localhost:5000/api/v1/projects/getAllProject",);
         
          console.log(data)
          setProjects(data);
        }
        fetchprojectData();
      } catch (error) {
        console.log(error);
      }
    }, []);
    const data = [
        {
            title: "something"
        },
        {
            title: "something"
        },
        {
            title: "something"
        },
        {
            title: "something"
        },
        {
            title: "something"
        },
    ]
    
        let settings = {
           
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            cssEase: "linear"
        }
    return (
      <div className="container-fluid">
       <Slider {...settings}>
         {projects.map((item)=>(
            <div className="col-md-10  pt-5 ">
            <img src={project1}  className="img-fluid" alt="not found"/>
            <div class="firstpic">
            <h4 className="text-center">{item.title}</h4>
            <a href="www.google.com"  className="firstlink">Check Project&#8811;</a>
        </div>
        </div>
         ))}
        </Slider>
      </div>
    )
}

export default ClientProject
