import React, { useState,useEffect } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress'
import parse from "html-react-parser"
import axios from 'axios';
import {Helmet} from 'react-helmet';

function FullNews({location}) {
    const [news,setNews] = useState(null);
    const [title,setTitle ] = useState("");
    const [details, setDetails ] = useState("");
    const [loading, setLoading ] = useState(false);
    const searchParams = new URLSearchParams(location.search);
    let id = searchParams.get("id");
  
    useEffect(() => {
        try {
          async function fetchprojectData() {
            // setLoading(true);
            const {data } = await axios.get(`http://localhost:5000/api/v1/news/getSingleNews/${id}`);
            setTitle(data.title);
            setDetails(data.text);
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
              <div>
                <h1 class="newspaper-title">{title}</h1>
                <article class="main-article">
                <h3 class="title">Article Title</h3>
                <h4 class="author">Author's Name</h4>
                <p>{parse(details)}</p>
                 </article>
              </div>
           )}
            </div>
        </div>
    )
}

export default FullNews
