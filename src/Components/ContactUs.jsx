import React,{useContext,useState} from 'react'
import {FirebaseContext} from "../context/firebase"
import {LanguageContext} from "../context/language"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faQuestionCircle, faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons'
import CircularProgress from '@material-ui/core/CircularProgress'
import {URL} from "../Utils/TokenConfig"
import axios from 'axios';

const ContactUs = () => {

     const{english} = useContext(LanguageContext);
     const {firebase} = useContext(FirebaseContext);
     const [name, setName] = useState("");
     const [email, setEmail] = useState("");
     const [phone, setPhone] = useState("");
     const [service, setService] = useState("");
     const [message, setMessage] = useState("");
     const [projecttitle, setProjectTitle] = useState("");
     const [image, setImage] = useState(null);
     const [loading, setLoading ] = useState(false);
     const [erromessage, setErrormessage] = useState("");
     const [attachment, setAttachment ] = useState("");

     let newsimagelink;

     const uploadProposal = async() =>{
        const Proposal = {};
        Proposal.username = name;
        Proposal.userIdentifer = email;
        Proposal.phoneNumber = phone;
        Proposal.projectTitle = projecttitle;
        Proposal.projectType = service;
        Proposal.description = message;
        Proposal.attachment = newsimagelink;
        try {
           setLoading(true);
           const {data}  = await axios.post(`${URL}api/v1/product/createProduct`,Proposal);
           if (data) {
               setLoading(false);
              window.location.href = "/";
             }
         } catch (error) {
           console.log(error);
         }
     }

     const submitHandler = (e) =>{
         e.preventDefault();

         let storageRef = firebase.storage().ref();  

         let metadata = {
             contentType: "image/jpeg",
         };

        
        let uploadTask = storageRef
        .child("proposal/" + image.name)
        .put(image, metadata);

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
                newsimagelink = downloadURL;
                uploadProposal();
            });
            }
        );
     }
    return (
        <div className="container" id="contact">
            <div className="bs">
           <div  className="mb-5">
              <div className="row">
              <div className="col-md-6">
                   <h1>{english?"Contact us":"اتصل بنا"}</h1>
               </div>
               <div className="col-md-4">
               {loading&&(<CircularProgress />)}
               </div>
              </div>
           </div>
            <div class="contact-form">
					<form onSubmit={submitHandler}>
						<div class="row">
							<div class="input25">
                                <h6>
                                    {english?"Name":"اسم"}
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
                                    {english?"Email":"بريد إلكتروني"}
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
                                   {english?" Phone Number": "رقم الهاتف"}
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
                                 {english?"Service":"خدمة"}
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
                                    {english?"Project Title":"عنوان المشروع"}
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
                                    {english?"Message":"رسالة"}
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
                                    {english?"Idea Proposal (Optional)":"اقتراح فكرة (اختياري)"}
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
                                <h6>{english?"Drop file here":"قم بإسقاط الملف هنا"}</h6>
                                <p>{english?"or":"أو"}</p>
                                <p>{english?"Select File":"حدد ملف"}</p>
							</div>
						</div>
						<div class="row justify-content-center">
							<div class="input100">
								<input className="bt" type="submit" value={english?"Send":"إرسال"} />
							</div>
						</div>
					</form>
				</div>
            </div>
        </div>
    );
};

export default ContactUs;