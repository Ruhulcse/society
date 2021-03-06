import React, { useState, useEffect } from "react";
import "./Proposal.css";
import profile from "../../assets/person.jpeg";
import { URL } from "../../../../Utils/TokenConfig";
import axios from "axios";

const Prop = () => {
  const [proposals, SetProposals] = useState([]);
  let data = JSON.parse(localStorage.getItem("user"));
  let email = data.user.email;
  console.log(email);
  let userType = data.user.userType;
  console.log(userType);
  let token = localStorage.getItem("token");
  if (!token) {
    window.location.href = "/";
  }

  const deleteHandler = async (id) => {
    const result = await axios.delete(
      `${URL}api/v1/product/deleteProduct/${id}`
    );
    if (result) {
      window.location.reload();
    }
  };
  useEffect(() => {
    try {
      async function fetchProposalData() {
        if (userType === "USER") {
          const data = await axios.get(
            `${URL}api/v1/product/getEmailProduct/${email}`
          );
          let proposal = data.data;
          SetProposals(proposal);
        } else {
          const data = await axios.get(`${URL}api/v1/product/getProduct`);
          let proposal = data.data.products.mAllProduct;
          SetProposals(proposal);
        }
      }
      fetchProposalData();
    } catch (error) {
      console.log(error);
    }
  }, [userType, email]);
  return (
    <main>
      <div className="main__container">
        {proposals.length === 0 ? (
          <h3>There is no Proposal..</h3>
        ) : (
          <div className="row">
            {proposals.map((item) => (
              <div className="col-md-4 pl-4  mt-5 pr-5">
                <div className="card">
                  <div className="card-header hbg mb-2">
                    <h3 className="title">{item.projectTitle}</h3>
                  </div>
                  <div className="card-body">
                    <div className="row pl-2">
                      <div className="col-md-8">
                        <h5 className="card-title headtex">{item.username}</h5>
                        <p className="gray pt-2 mb-2">{item.userIdentifer}</p>
                        <p className="gray mb-2">{item.phoneNumber}</p>
                        <p className="gray mb-2">{item.projectType}</p>
                      </div>
                      <div className="col-md-4 ">
                        <div>
                          <img
                            className="img-fluid rounded-circle "
                            style={{ height: "70px", width: "70px" }}
                            src={profile}
                            alt="not found"
                          />
                        </div>
                        <div className="pt-5">
                          <a
                            href={`/admin/proposal/view/?id=${item._id}`}
                            className="btn cardborder"
                          >
                            View
                          </a>
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
        )}
      </div>
    </main>
  );
};

export default Prop;
