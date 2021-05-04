import React, { useState,useEffect } from 'react';
import "./Proposal.css";
import profile from "../../assets/person.jpeg";
import axios from 'axios';
import { Stepper } from '@progress/kendo-react-layout';


const stepsWithLabel = [
    { label: 'Step 1' },
    { label: 'Step 2' },
    { label: 'Step 3' },
    { label: 'Step 4' }
];

const ProposalView = ({location}) => {

    const [value, setValue] = useState(1);
    const [details, setDetails] = useState("");
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    let id = urlParams.get("id")
   
  
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
        const {data}  = await axios.get(`http://localhost:5000/api/v1/product/getSinglProduct/${id}`);
        setDetails(data.description);
        // let proposal = data.data.products.mAllProduct;
        // console.log(proposal)
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
            <div className="col-md-10 bg-white">
                <h2 className="pl-2">Details</h2>
                <p className="pl-2">{details}</p>
                <Stepper className="pt-5 pb-5"  value={value} onChange={handleChange} items={stepsWithLabel} />
            </div>
            <div className="col-md-2 bg-white">
                will be a button
            </div>
        </div>
      </div>
    </main>
  );
};

export default ProposalView;
