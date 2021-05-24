import React, { useState, useContext } from "react";
import { FirebaseContext } from "../../../../context/firebase";
import "./project.css";
import axios from "axios";
import CircularProgress from "@material-ui/core/CircularProgress";
import { URL } from "../../../../Utils/TokenConfig";

function ProjectMain() {
  const { firebase } = useContext(FirebaseContext);
  const [title, SetTitle] = useState("");
  const [projecturl, setProjectUrl] = useState("");
  const [imageurl, setImageUrl] = useState(null);
  const [partnerproject, setPartnerProject] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errormessage, setErrormessage] = useState("");

  //for changing the check status
  const handleClick = () => setPartnerProject(!partnerproject);
  let imagelink;
  //uploading final data to mongodb
  const uploadProjects = async (e) => {
    const ProjectData = {};
    ProjectData.title = title;
    ProjectData.projecturl = projecturl;
    ProjectData.partnerproject = partnerproject;
    ProjectData.imageurl = imagelink;
    try {
      setLoading(true);
      const data = await axios.post(
        `${URL}api/v1/projects/createProejct`,
        ProjectData
      );
      console.log(data);
      if (data) {
        setLoading(false);
        window.location.href = "/admin";
      }
    } catch (error) {
      console.log(error);
    }
  };

  //generating image link after saving in firbase
  const submitHandler = (e) => {
    e.preventDefault();
    let storageRef = firebase.storage().ref();

    let metadata = {
      contentType: "image/jpeg",
    };

    let uploadTask = storageRef
      .child("projects/" + imageurl.name)
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
        setErrormessage("Added successfully!");
        uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
          imagelink = downloadURL;
          uploadProjects();
        });
      }
    );
  };

  return (
    <main>
      <div className="main__container">
        <div className="row">
          <div className="col-md-12">
            <p>{errormessage}</p>
            {loading && <CircularProgress />}
            <div className="card mt-5 mr-2 ml-2">
              <div className="card-body ml-2 mr-2">
                <h1>Edit Post</h1>
                <form onSubmit={submitHandler}>
                  <div className="row d-flex justify-content-around">
                    <div className="col-md-5">
                      <h5>
                        Title <span style={{ color: "red" }}>*</span>
                      </h5>
                      <input
                        type="text"
                        class="form-control fbg"
                        placeholder="Project Title"
                        value={title}
                        onChange={(e) => SetTitle(e.target.value)}
                      />
                    </div>

                    <div className="col-md-5">
                      <h5>
                        Project URL<span style={{ color: "red" }}>*</span>
                      </h5>
                      <input
                        type="text"
                        class="form-control fbg"
                        placeholder="Project URL"
                        value={projecturl}
                        onChange={(e) => setProjectUrl(e.target.value)}
                      />
                    </div>
                  </div>
                  <div class="fmg">
                    <h5>
                      Background image url
                      <span style={{ color: "red" }}>*</span>
                    </h5>
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
                  <div className="fmg">
                    <input
                      onClick={handleClick}
                      checked={partnerproject}
                      type="checkbox"
                    />
                    <h5 className="fh">Partnered projects</h5>
                  </div>
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
  );
}

export default ProjectMain;
