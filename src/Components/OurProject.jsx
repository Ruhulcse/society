import React, { useState,useEffect } from 'react';
import project1 from "../assets/img/test.PNG";
import project2 from "../assets/img/Screenshot -2.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CircularProgress from '@material-ui/core/CircularProgress'
import axios from 'axios';

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red" ,}}
        onClick={onClick}
      />
    );
  }

function OurProject() {
    const [projects,setProjects] = useState([]);
    const [loading, setLoading ] = useState(false);
 
    useEffect(() => {
      try {
        async function fetchprojectData() {
          setLoading(true);
          const {data } = await axios.get("http://localhost:5000/api/v1/projects/getAllProject",);
          let partnerProjects = data.filter(item => item.partnerproject==false);
          console.log(partnerProjects);
          setProjects(data);
          if(data){
            setLoading(false);
          }
        }
        fetchprojectData();
      } catch (error) {
        console.log(error);
      }
    }, []);

  
      let settings = {
          
          infinite: true,
          speed: 500,
          slidesToShow: 3,
          slidesToScroll: 1,
          cssEase: "linear",
          nextArrow: <SampleNextArrow />,
          prevArrow: <SampleNextArrow/>,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      }
    return (
        <div className="container-fluid">
         {loading?( <CircularProgress/>
         ):(
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
         )}
      </div>
    )
}

export default OurProject
