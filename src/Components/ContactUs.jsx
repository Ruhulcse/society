import React, { useState } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faQuestionCircle, faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';
const ContactUs = () => {
     const [name, setName] = useState("");
     const [email, setEmail] = useState("");
     const [phone, setPhone] = useState("");
     const [service, setService] = useState("");
     const [message, setMessage] = useState("");
     const [projecttitle, setProjectTitle] = useState("");
     const [image, setImage] = useState(null);

     const toBase64 = file => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });

     const submitHandler = async (e) =>{
         e.preventDefault();
         const base64Data= await toBase64(image);
         const Proposal = {};
         Proposal.username = name;
         Proposal.userIdentifer = email;
         Proposal.phoneNumber = phone;
         Proposal.projectTitle = projecttitle;
         Proposal.projectType = service;
         Proposal.description = message;
         Proposal.attachment = base64Data;
        //  console.log(Proposal)
         try {
            const {data}  = await axios.post("http://localhost:5000/api/v1/product/createProduct",Proposal);
            console.log(data);
          } catch (error) {
            console.log(error);
          }
     }
    return (
        <div className="container" id="contact">
            <div className="bs">
            <h1 className="mb-5">Contact Us</h1>
            <div class="contact-form">
					<form onSubmit={submitHandler}>
						<div class="row">
							<div class="input25">
                                <h6>
                                    Name
                                    <span>
                                        <abbr title="Enter ypur name">
                                            <FontAwesomeIcon icon={faQuestionCircle} />
                                        </abbr>
                                    </span>
                                </h6>
								<input 
                                type="text" 
                                placeholder="Your Name" 
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                />
							</div>						
							<div class="input25">
                                <h6>
                                    Email
                                    <span>
                                        <abbr title="Enter valid email">
                                            <FontAwesomeIcon icon={faQuestionCircle} />
                                        </abbr>
                                    </span>
                                </h6>
								<input 
                                type="text" 
                                placeholder="example@mail.com" 
                                value = {email}
                                onChange={(e) => setEmail(e.target.value)}
                                />
							</div>
							<div class="input25">
                                <h6>
                                    Phone Number
                                    <span>
                                        <abbr title="Enter valid phone number">
                                            <FontAwesomeIcon icon={faQuestionCircle} />
                                        </abbr>
                                    </span>
                                </h6>
								<input 
                                type="tel" 
                                placeholder="+123 456789" 
                                value ={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                />
							</div>
                            <div class="input25">
                                <h6>
                                    Service
                                    <span>
                                        <abbr title="Enter ypur desire Service">
                                            <FontAwesomeIcon icon={faQuestionCircle} />
                                        </abbr>
                                    </span>
                                </h6>
								<input 
                                type="text"
                                placeholder="Mobile Application"
                                value = {service}
                                onChange={(e) => setService(e.target.value)}
                                 />
							</div>
						</div>
                        <div className="row">
                        <div class="input25">
                                <h6>
                                    Project Title
                                    <span>
                                        <abbr title="Enter project title">
                                            <FontAwesomeIcon icon={faQuestionCircle} />
                                        </abbr>
                                    </span>
                                </h6>
								<input 
                                type="text" 
                                placeholder="Project title" 
                                value={projecttitle}
                                onChange={(e) => setProjectTitle(e.target.value)}
                                />
							</div>		
                        </div>
						<div class="row">
							<div class="input60">
                                <h6>
                                    Message
                                    <span>
                                        <abbr title="Enter ypur Message">
                                            <FontAwesomeIcon icon={faQuestionCircle} />
                                        </abbr>
                                    </span>
                                </h6>
								<textarea placeholder="Message" value={message}  onChange={(e) => setMessage(e.target.value)}></textarea>
							</div>
                            <div class="input30">
                                <h6>
                                    Idea Proposal (Optional)
                                    <span>
                                        <abbr title="Valid file format: JPEG / JPG / PNG">
                                            <FontAwesomeIcon icon={faQuestionCircle} />
                                        </abbr>
                                    </span>
                                </h6>
                                <input 
                                style={{display: 'block'}}
                                 type="file"
                                 name=""
                                 id=""
                                 onChange={(picture) => {
                                    setImage(picture.currentTarget.files[0], false);
                                  }}
                                 />
                                <FontAwesomeIcon icon={faCloudUploadAlt} />
                                <h6>Drop file here</h6>
                                <p>or</p>
                                <p>Select File</p>
							</div>
						</div>
						<div class="row">
							<div class="input100">
								<input className="bt" type="submit" value="Send" />
							</div>
						</div>
					</form>
				</div>
            </div>
        </div>
    );
};

export default ContactUs;