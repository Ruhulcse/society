import React, { useState, useEffect } from "react";
import "./Proposal.css";
import profile from "../../assets/person.jpeg";
import axios from "axios";
import { Stepper } from "@progress/kendo-react-layout";
import { URL } from "../../../../Utils/TokenConfig";
import DownloadLink from "react-download-link";
const stepsWithLabel = [
  { label: "Step 1" },
  { label: "Step 2" },
  { label: "Step 3" },
  { label: "Step 4" },
];

const ProposalView = ({ location }) => {
  const [value, setValue] = useState(1);
  const [details, setDetails] = useState("");
  const [proposals, SetProposals] = useState([]);
  const [loading, setLoading] = useState(false);

  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);

  let id = urlParams.get("id");

  let token = localStorage.getItem("token");
  if (!token) {
    window.location.href = "/";
  }

  const handleChange = (e) => {
    setValue(e.value);
  };

  useEffect(() => {
    try {
      async function fetchProposalData() {
        setLoading(true);
        const { data } = await axios.get(
          `${URL}api/v1/product/getSinglProduct/${id}`
        );
        setDetails(data.description);
        SetProposals(data);
        console.log(data);
        if (data) {
          setLoading(false);
        }
        // let proposal = data.data.products.mAllProduct;
        // console.log(proposal)
      }
      fetchProposalData();
    } catch (error) {
      console.log(error);
    }
  }, [id]);
  return (
    <main>
      <div className="main__container">
        <div>
          <div className="row">
            <div className="col-md-10 bg-white">
              <h2 className="pl-2">Details</h2>
              <p className="pl-2">{details}</p>
              <Stepper
                className="pt-5 pb-5"
                value={value}
                onChange={handleChange}
                items={stepsWithLabel}
              />
            </div>
            <div className="col-md-2 bg-white">
              <button
                className="btn updateborder"
                style={{ marginLeft: "15%", marginTop: "8%" }}
              >
                update
              </button>
            </div>
          </div>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <div className="row mt-5">
              <div className="col-md-6 pl-4  mt-5 pr-5">
                <div className="card">
                  <div className="card-header  mb-2">
                    <h3 className="">Client Profile</h3>
                  </div>
                  <div className="card-body">
                    <div className="row pl-2">
                      <div className="col-md-8">
                        <h5 className="card-title headtex">
                          {proposals.username}
                        </h5>
                        <p className="gray pt-2 mb-2">
                          {proposals.userIdentifer}
                        </p>
                        <p className="gray mb-2">{proposals.phoneNumber}</p>
                        <p className="gray mb-2">{proposals.projectType}</p>
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
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 pl-4  mt-5 pr-5">
                <div className="card">
                  <div className="card-header  mb-2">
                    <h3 className="">Assign To</h3>
                  </div>
                  <div className="card-body">
                    <div className="row pl-2">
                      <div className="col-md-8">
                        <h5 className="card-title headtex">
                          {proposals.username}
                        </h5>
                        <p className="gray pt-2 mb-2">
                          {proposals.userIdentifer}
                        </p>
                        <p className="gray mb-2">{proposals.phoneNumber}</p>
                        <p className="gray mb-2">{proposals.projectType}</p>
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
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default ProposalView;
