import React,{useContext,useState,useEffect} from 'react'
import {LanguageContext} from "../context/language"
// import logo from "../../src/assets/img/logo.png"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CircularProgress from '@material-ui/core/CircularProgress'
import axios from 'axios';
import parse from "html-react-parser"
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

const LatestNews = () => {

    const {english} = useContext(LanguageContext);
    const [loading, setLoading ] = useState(false);
    const [news, setNews ] = useState([]);

    const newsection = english?{
        title:"Our Latest News",
        button: "Read More"
    }:{
        title: "آخر أخبارنا",
        button: "اقرأ أكثر"
    }

    useEffect(() => {
      try {
        async function fetchprojectData() {
          setLoading(true);
          const {data } = await axios.get(`${URL}api/v1/news/getAllNews`,);
          console.log(data)
          if(data){
            data.reverse();
            setNews(data)
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
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  initialSlide: 1
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

            <div className="newsSection">
             <div className="container">
              <div className="d-flex justify-content-center pt-5jjnn">
              <h1 className="justify-content-center">Latest News</h1>
              </div>
             {loading?( <CircularProgress/>
             ):(
                <Slider {...settings}>
                {news.map((item,index)=>(
                   <div className="col-md-10 news-card">     
                   <img src={`${item.image}`}  className="img-fluid" alt="not found"/>
                   <div className="news-title">
                     <h3>{item.title}</h3>
                   </div>
                   <div className="news-content">
                        <p>{parse(item.text.substring(0,110)+'...')}</p>
                        <a href={`/news/?id=${item._id}`} className="read-more"  target="blank">{newsection.button}<FontAwesomeIcon icon={faPlus}/></a>
                    </div>
               </div>
                ))}
               </Slider>
             )}
          </div>
          </div>
        );
    };


export default LatestNews;