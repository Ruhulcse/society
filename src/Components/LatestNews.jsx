import React, {useState} from 'react';
import logo from "../../src/assets/img/logo.png"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const LatestNews = () => {
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
        return (
            <div className="newsSection">
                <div className="container">
                    <h2 className="newsSection-title">Our Latest News</h2>
                    <div className="news-container">
                        {
                            latestNews.news.map((news,index )=> 
                            <div className="col-md-4 news-card" key={index}>
                                <img src={news.img} alt=""/>
                                <div className="news-title">
                                    <h3>{news.title}</h3>
                                </div>
                                <div className="news-content">
                                    <p>{news.news_primary} <span className={toggleActiveStyles(index)} >{news.news_all}</span></p>
                                <button className="read-more" onClick={() => toggleActive(index)} > Read More <FontAwesomeIcon icon={faPlus} /></button>
                                </div>
                            </div>
                            )
                        }
                    </div>
                </div>
            </div>
        
        );
    };


export default LatestNews;