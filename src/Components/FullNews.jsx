import React, { useState,useEffect } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress'
import parse from "html-react-parser"
import axios from 'axios';

function FullNews() {
    const [news,setNews] = useState([]);
    const [loading, setLoading ] = useState(false);
    useEffect(() => {
        try {
          async function fetchprojectData() {
            setLoading(true);
            const {data } = await axios.get("http://localhost:5000/api/v1/news/getAllNews",);
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
            <h1 class="newspaper-title">News Title</h1>
           {loading?(<CircularProgress/>):(
                <article class="main-article">
                    {console.log(news)}
                <h3 class="title">Article Title</h3>
                <h4 class="author">Author's Name</h4>
                <p>{parse(news[0].text)}</p>
                 </article>
           )}
            </div>
        </div>
    )
}

export default FullNews
