import React, { useState, useEffect } from "react";
import "./project.css";
import axios from "axios";
import CircularProgress from "@material-ui/core/CircularProgress";
import { URL } from "../../../../Utils/TokenConfig";
function ProjectMain() {
  const [title, SetTitle] = useState("");
  const [projecturl, setProjectUrl] = useState("");
  const [imageurl, setImageUrl] = useState(null);
  const [partnerproject, setPartnerProject] = useState(false);
  const [loading, setLoading] = useState(false);

  //for changing the check status
  const handleClick = () => setPartnerProject(!partnerproject);

  //making image as base64 buffer for uploading to server
  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  const submitHandler = async (e) => {
    e.preventDefault();
    const base64Data = imageurl ? await toBase64(imageurl) : "null";
    const ProjectData = {};
    ProjectData.title = title;
    ProjectData.projecturl = projecturl;
    ProjectData.partnerproject = partnerproject;
    ProjectData.imageurl = base64Data;
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

  return (
    <main>
      <div className="main__container">
        <div className="row">
          <div className="col-md-12">
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
