import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faQuestionCircle, faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons'

const ContactUs = () => {
    return (
        <div className="container">
            <div className="bs">

            <h1 className="mb-5">Contact Us</h1>
            <div class="contact-form">
					<form>
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
								<input type="text" placeholder="Your Name" />
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
								<input type="text" placeholder="example@mail.com" />
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
								<input type="tel" placeholder="+123 456789" />
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
								<input type="text" placeholder="Mobile Application" />
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
								<textarea placeholder="Message"></textarea>
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
                                <input style={{display: 'block'}} type="file" name="" id=""/>
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