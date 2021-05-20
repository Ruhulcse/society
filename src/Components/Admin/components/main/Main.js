import React, { useState, useEffect } from "react";
import "./Main.css";
import profile from "../../assets/profile.png";
import { config } from "../../../../Utils/TokenConfig";
import { URL } from "../../../../Utils/TokenConfig";
import axios from "axios";

const Main = () => {
  const [userlist, SetUserList] = useState([]);

  const deleteHandler = async (id) => {
    console.log(id);
    const result = await axios.delete(`${URL}api/v1/users/deleteUser/${id}`);
    if (result) {
      window.location.reload();
    }
  };
  useEffect(() => {
    try {
      async function fetchProposalData() {
        const data = await axios.get(`${URL}api/v1/users/Users`, config);
        let users = data.data.Users;
        console.log(users);
        SetUserList(users);
      }
      fetchProposalData();
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <main>
      <div className="main__container">
        <div className="row">
          {userlist.map((item) => (
            <div className="col-md-6">
              <div class="card mt-5 mr-2 ml-2">
                <div class="card-body ml-2 mr-2">
                  <div className="row ml-2 mr-2">
                    <div className="col-md-2">
                      <img
                        className="img-fluid rounded-circle"
                        style={{ height: "100px", width: "100px" }}
                        src={profile}
                        alt="not found"
                      />
                    </div>
                    <div className="col-md-6 pl-3">
                      <h5>{item.userName}</h5>
                      {/* <p style={{ color: "gray" }}>{item.profession}</p> */}
                      <p style={{ color: "gray" }}>Mobile: {item.email}</p>
                    </div>
                    <div className="col-md-4">
                      <div className="row float-right">
                        <button className="btn">
                          <i class="fas fa-pencil-alt"></i>
                        </button>
                        <button
                          className="btn"
                          onClick={() => deleteHandler(item._id)}
                        >
                          <i class="fas fa-times"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Main;
