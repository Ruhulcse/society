import React, { useState,useEffect } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress'
import parse from "html-react-parser"
import axios from 'axios';
import {Helmet} from 'react-helmet';
import {URL} from "../Utils/TokenConfig"
import logo from "../assets/img/newlogo.png";

function FullNews({location}) {
    const [news,setNews] = useState(null);
    const [title,setTitle ] = useState("");
    const [details, setDetails ] = useState("");
    const [loading, setLoading ] = useState(false);
    const [imageurl,setImageUrl] = useState("");
    
    const searchParams = new URLSearchParams(location.search);
    let id = searchParams.get("id");
  
    useEffect(() => {
        try {
          async function fetchprojectData() {
            // setLoading(true);
            const {data } = await axios.get(`${URL}api/v1/news/getSingleNews/${id}`);
            console.log(data)
            setTitle(data.title);
            setDetails(data.text);
            setImageUrl(data.image);
            setNews(data);
            if(data){
              setLoading(false);
            }
          }
          fetchprojectData();
        } catch (error) {
          console.log(error);
        }
      }, []);
  
    return (
        <div>
          <div class="container">
          <Helmet>
            <title>Asociety || news</title>
          </Helmet>
           {loading?(<CircularProgress/>):(
              <div className=" container">
                  <div className="row pb-5" style={{backgroundColor: "#5a3e3e"}}>
                    <div className="col-md-3">
                        <div>
                            <a className="navbar-brand" style={{paddingLeft:"32%",paddingTop:"4%"}} href="/">
                                <img src={logo}  className="img-fluid"  alt="not found" />
                            </a>
                        </div>
                    </div>
                    <div className="col-md-9">
                    <nav className="navbar navbar-expand-md navbar-light ">
                        <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse ml-2" id="navbarCollapse">
                            <div className="col-md-9 navbar-nav responsivenav ml-auto" style={{paddingLeft:"3%"}}>
                                <a href="/" className=" nav-item nav-link "> <section className="navitem">home</section></a>
                                <a href="/#service" className=" nav-item nav-link"> <section className="navitem">service</section></a>
                                <a href="/#project" className=" nav-item nav-link"> <section className="navitem">project</section></a>
                                <a href="/#contact" className=" nav-item nav-link"> <section className="navitem">contact</section></a>
                            </div>
                            <div className="col-md-3 navbar-nav sidenav ml-auto">
                                <a href="/signup" className="nav-item nav-link"  ><section className="naviteml">signin</section></a>
                                <a href="/login" className="nav-item nav-link border" ><section className="naviteml">signup</section></a>
                            </div>
                        </div>
                    </nav>
                    </div>
                </div>
                <h1 class="newspaper-title pt-5 pb-2 " style={{textAlign:"center"}}>{title}</h1>
                <article class="main-article">
                <img src={`${URL}${imageurl}`}  className="img-fluid" style={{width:"100%",height:"100%"}} alt="not found"/>
                <p className="pt-5">{parse(details)}</p>
                 </article>
              </div>
           )}
            </div>
        </div>
    )
}

export default FullNews
