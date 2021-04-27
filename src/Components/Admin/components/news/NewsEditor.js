import React, { useState } from 'react';
import ClassicEditor from "@ckeditor/ckeditor5-build-classic"
import {CKEditor} from "@ckeditor/ckeditor5-react"
import "./news.css";
import axios from 'axios';

function NewsEditor() {
  const [text, setText ] = useState("");
  const [title, setTitle ] = useState("");
  const [videourl, setVideoUrl ] = useState("");

  const submitHandler =async (e) =>{
 
    e.preventDefault();
   
    const NewsData = {};
    NewsData.title = title;
    NewsData.videourl = videourl;
    NewsData.text = text;
  
    try {
     const data  = await axios.post("http://localhost:5000/api/v1/news/createNews",NewsData);
     console.log(data);
   } catch (error) {
     console.log(error);
   }
}
  return (
      <main>
         <div className="main__container">
            <div className="row">
            <div className="col-md-12">
              <div className="card mt-5 mr-2 ml-2">
                <div className="card-body ml-2 mr-2">
                    <h1>Edit Post</h1>
                <form onSubmit={submitHandler}>
                    <div className="row d-flex justify-content-around">

                        <div className="col-md-5">
                         <h5>Title</h5>
                         <input 
                         type="text" 
                         class="form-control fbg" 
                         placeholder="News Title"
                         value={title}
                         onChange={(e) =>setTitle(e.target.value)}
                         />
                        </div>

                        <div className="col-md-5">
                         <h5>Video URL(optional)</h5>
                         <input type="text"
                          class="form-control fbg" 
                          placeholder="Video URL"
                          value={videourl}
                          onChange={(e) =>setVideoUrl(e.target.value)}
                          />
                        </div>

                    </div>
                    <div className="ml-2 mr-2">
                    <div className="p-2">
                      <CKEditor
                        editor={ClassicEditor}
                        data={text}
                        onChange={(event, editor) => {
                          const data = editor.getData()
                          setText(data)
                        }}
                      />
                    </div>
                  </div>
                   {/* <div class="fmg">
                      <h5>Background image url</h5>
                    <input
                        className="fbg"
                          type="file"
                          name=""
                          id=""
                          onChange={(picture) => {
                            setImageUrl(picture.currentTarget.files[0], false);
                          }}
                          />
                    </div> */}
                   
                    <div class="row justify-content-end fb">
                   <div class="input100">
                    <input className="bt" type="submit" value="Publish" />
                   </div>
				          	</div>
                </form>
                </div>
              </div>
            </div>
            </div>
         </div>
        </main>
    )
}

export default NewsEditor;
