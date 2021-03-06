import React, { useState,useEffect } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import axios from 'axios';
import {URL} from "../Utils/TokenConfig"

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

function ClientProject() {

    const [clientprojects,setProjects] = useState([]);
    const [loading, setLoading ] = useState(false);
 
    useEffect(() => {
      try {
        async function fetchprojectData() {
          setLoading(true);
          const {data } = await axios.get(`${URL}api/v1/projects/getAllProject`,);
          let partnerProjects = data.filter(item => item.partnerproject===true);
          partnerProjects.reverse();
          setProjects(partnerProjects);
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
         {loading?( <div className=" pt-2">
         {/* <LinearProgress /> */}
         <p className="text-center">no data found</p>
         </div>):(
            <Slider {...settings}>
            {clientprojects.map((item)=>(
               <div className="col-md-10  pt-5 ">
               <img src={item.imageurl}  className="img-fluid" style={{width:"100%",height:"247px"}} alt="not found"/>
               <div class="firstpic">
               <h4 className="text-center">{item.title}</h4>
               <a href={item.projecturl}  className="firstlink" target="blank">Check Project&#8811;</a>
           </div>
           </div>
            ))}
           </Slider>
         )}
      </div>
    )
}

export default ClientProject
