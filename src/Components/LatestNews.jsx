import React,{useContext,useState} from 'react'
import {LanguageContext} from "../context/language"
import logo from "../../src/assets/img/logo.png"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CircularProgress from '@material-ui/core/CircularProgress'

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
    const{english} = useContext(LanguageContext);
    const [loading, setLoading ] = useState(false);
    const newsection = english?{
        title:"Our Latest News",
        button: "Read More"
    }:{
        title: "آخر أخبارنا",
        button: "اقرأ أكثر"
    }
    const [latestNews, setLatestNews] = useState({
        activeNews: null,
        news: [
        {
            id: 1,
            img: logo,
            title: "Abdulmalek A-Society New Idea",
            news_primary: "Our system is AsocietyOur system ir system is AsocietyOur system is AsocietyOur system is AsocietyOur system is AsocietyOur system is Asociety",
            news_all: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi debitis maiores, dolor id eos velit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate, odit.",
        },
        {
            id: 2,
            img: logo,
            title: "Get to know more about us?",
        news_primary: "Our system is AsocietyOur system ir system is AsocietyOur system is AsocietyOur system is AsocietyOur system is AsocietyOur system is Asociety",
            news_all: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi debitis maiores, dolor id eos velit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate, odit.",
        },
        {
            id: 3,
            img: logo,
            title: "we will soon Lunch our system",
            news_primary: "Our system is AsocietyOur system ir system is AsocietyOur system is AsocietyOur system is AsocietyOur system is AsocietyOur system is Asociety",
            news_all: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi debitis maiores, dolor id eos velit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate, odit.",
        },
        {
            id: 4,
            img: logo,
            title: "we will soon Lunch our system",
            news_primary: "Our system is AsocietyOur system ir system is AsocietyOur system is AsocietyOur system is AsocietyOur system is AsocietyOur system is Asociety",
            news_all: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi debitis maiores, dolor id eos velit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate, odit.",
        },
        {
            id: 5,
            img: logo,
            title: "we will soon Lunch our system",
            news_primary: "Our system is AsocietyOur system ir system is AsocietyOur system is AsocietyOur system is AsocietyOur system is AsocietyOur system is Asociety",
            news_all: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi debitis maiores, dolor id eos velit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate, odit.",
        },
    ]
    })

    const [fullNews, setFullNews] = useState(true)


        function toggleActive(index){
            setLatestNews({...latestNews, activeNews: latestNews.news[index]})
            setFullNews(!fullNews)
        }

        function toggleActiveStyles(index){
            if(latestNews.news[index] === latestNews.activeNews ){
                return `active ${fullNews}`;
            } else  return "none";
        }

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
            // <div className="newsSection">
            //     <div className="container">
            //         <h2 className="newsSection-title">{newsection.title}</h2>
            //         <div className="news-container">
            //             {
            //                 latestNews.news.map((news,index )=> 
            //                 <div className="col-md-4 news-card" key={index}>
            //                     <img src={news.img} alt=""/>
            //                     <div className="news-title">
            //                         <h3>{news.title}</h3>
            //                     </div>
            //                     <div className="news-content">
            //                         <p>{news.news_primary} <span className={toggleActiveStyles(index)} >{news.news_all}</span></p>
            //                     <a href="/news" className="read-more">{newsection.button}<FontAwesomeIcon icon={faPlus} /></a>
            //                     </div>
            //                 </div>
            //                 )
            //             }
            //         </div>
            //     </div>
            // </div>
             <div className="container">
             {loading?( <CircularProgress/>
             ):(
                <Slider {...settings}>
                {latestNews.news.map((news,index)=>(
                   <div className="col-md-10 news-card">
                       
                   <img src={news.img}  className="img-fluid" alt="not found"/>
                   <div className="news-title">
                     <h3>{news.title}</h3>
                   </div>
                   <div className="news-content">
                        <p>{news.news_primary} <span className={toggleActiveStyles(index)} >{news.news_all}</span></p>
                        <a href="/news" className="read-more">{newsection.button}<FontAwesomeIcon icon={faPlus} /></a>
                    </div>
               </div>
                ))}
               </Slider>
             )}
          </div>
        
        );
    };


export default LatestNews;