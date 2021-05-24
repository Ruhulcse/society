import React, { useState, useContext } from "react";
import { FirebaseContext } from "../../../../context/firebase";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import "./news.css";
import axios from "axios";
import { URL } from "../../../../Utils/TokenConfig";
import CircularProgress from "@material-ui/core/CircularProgress";

function NewsEditor() {
  const { firebase } = useContext(FirebaseContext);
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");
  const [videourl, setVideoUrl] = useState("");
  const [imageurl, setImageUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [attachement, setAttachment] = useState("");
  const [errormessage, setErrormessage] = useState("");

  let newsImage;

  const uploadNews = async (e) => {
    const NewsData = {};
    NewsData.title = title;
    NewsData.videourl = videourl;
    NewsData.text = text;
    NewsData.image = newsImage;
    console.log(NewsData);

    try {
      setLoading(true);
      const data = await axios.post(`${URL}api/v1/news/createNews`, NewsData);
      if (data) {
        setLoading(false);
        window.location.href = "/admin";
      }
    } catch (error) {
      console.log(error);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    let storageRef = firebase.storage().ref();

    let metadata = {
      contentType: "image/jpeg",
    };

    let uploadTask = storageRef
      .child("news/" + imageurl.name)
      .put(imageurl, metadata);

    uploadTask.on(
      "state_changed", // or 'state_changed'
      (snapshot) => {
        let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
      },
      (error) => {
        setErrormessage(error.message);
      },
      () => {
        setErrormessage("News Added successfully!");
        uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
          console.log(downloadURL);
          newsImage = downloadURL;
          uploadNews();
        });
      }
    );
  };
  return (
    <main>
      <div className="main__container">
        <div className="row">
          <div className="col-md-12">
            <div className="card mt-5">
              <div className="card-body ">
                <h1>Edit Post</h1>
                <p>{errormessage}</p>
                {loading ? (
                  <CircularProgress />
                ) : (
                  <form onSubmit={submitHandler}>
                    <div className="row d-flex justify-content-around">
                      <div className="col-md-5">
                        <h5>Title</h5>
                        <input
                          type="text"
                          class="form-control fbg"
                          placeholder="News Title"
                          value={title}
                          onChange={(e) => setTitle(e.target.value)}
                        />
                      </div>

                      <div className="col-md-5">
                        <h5>Video URL(optional)</h5>
                        <input
                          type="text"
                          class="form-control fbg"
                          placeholder="Video URL"
                          value={videourl}
                          onChange={(e) => setVideoUrl(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="pt-5">
                      <div className="pl-4 pr-4">
                        <CKEditor
                          editor={ClassicEditor}
                          data={text}
                          onChange={(event, editor) => {
                            const data = editor.getData();
                            setText(data);
                          }}
                        />
                      </div>
                    </div>
                    <div class="fmg">
                      <h5>Add Media</h5>
                      <input
                        className="fbg"
                        type="file"
                        name=""
                        id=""
                        onChange={(picture) => {
                          setImageUrl(picture.currentTarget.files[0], false);
                        }}
                      />
                    </div>
                    <div class="row justify-content-end fb">
                      <div class="input100">
                        <input className="bt" type="submit" value="Publish" />
                      </div>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default NewsEditor;
