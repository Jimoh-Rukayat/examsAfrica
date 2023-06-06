import React from "react";
import '../Styles/Contact.css'
import {CiLocationOn} from "react-icons/ci"
import {FaFacebookF} from "react-icons/fa"
import {RiLinkedinFill} from "react-icons/ri"
import {FiInstagram} from "react-icons/fi"
import {GrTwitter} from "react-icons/gr"
import logo_1 from "../assets/footerlogo.svg"


const Contact = ()=>{
    return(
        <div>
            <div className='contact-top'>
                <div className="contact">
                <h6>Support</h6>
                <h3>How can we help you?</h3>
                <p>We Will Open The World Of Knowledge For You! This is the latest online examination system you will ever need!</p>
                </div>
            </div>
            <div className="contact-text">
                <div>
                    <div className="contact-us">
                        <h5>Contact Us</h5>
                        <p>We Will Open The World Of Knowledge For You! This is the latest online examination system you will ever need!</p>
                    </div>
                    <div className="location">
                        <h4>Head Office</h4>
                        <p>41/42, industrial avenue Sabo Yaba Lagos.</p>
                        <a href="#"><CiLocationOn/> Get directions</a>
                        <p>+234 (0) 916 772 4945</p>
                        <p>hello@exams.africa</p>
                        <h4><RiLinkedinFill/> <GrTwitter/> <FiInstagram/> <FaFacebookF/></h4>
                    </div>
                    <div className="sign"></div>
                </div>
                <div className="contact-form">
                    <div>
                        <div className="contact-form-name">
                            <div className="first" id="first">
                                <label>Name</label>
                                <input type="text" name="name" placeholder="Garba Garba"/>
                            </div>
                            <div className="first" id="first">
                                <label>Email Address</label>
                                <input type="email" name="email" placeholder="garbagarba@emal.com"/>
                            </div>
                        </div>
                        <div>
                            <div className="first">
                                <label>Subject</label>
                                <input type="text" name="subject" placeholder="Can't find a subject?"/>
                            </div>
                          <div className="first">
                            <label>How can we help?</label>
                            <textarea type="text" placeholder="I need to study for a Hausa exam and I can't find the course"/>
                          </div>
                        </div>
                        <button className="contact-button">Send Message</button>
                    </div>
                </div>
                
            </div>
            <div className="contact-bottom">
                <div className="sub-bottom">
                    <h3>Need specific help?</h3>
                    <p>Visit our frequently asked questions section here or make use our social media platforms to get in contact with us. Click on any of the social media icons to be redirected.</p>
                </div>
            </div>
            <div className="footer">
            <div className="footer-text">
                <div className='help'>
                    <h4>Main</h4>
                    <p>Home</p>
                </div>
                <div className='help'>
                    <h4>Need Help</h4>
                    <p>Contact us</p>
                    <p>FAQ</p>
                </div>
                <div className='help'>
                    <h4>Features</h4>
                    <p>Past Questions</p>
                </div>
                <div className='help'>
                    <h4>Article</h4>
                    <p>Blog</p>
                </div>
            </div>
            <div className="logo-text">
            <img src={logo_1} alt={logo_1} style={{width: 200, height: 50}} className="logo"/>
                <p>Welcome to our exam preparation website, where we help you achieve your academic goals by providing comprehensive study materials and resources. We understand that preparing for exams can be stressful and overwhelming. That's why we're here to guide you through the process and make it as smooth as possible.</p>
            </div>
            <div className="socials">
                <div className="linked"> <RiLinkedinFill/></div>
                <div className="twitter"><GrTwitter/></div> 
                <div className="insta"><FiInstagram/></div> 
                <div className="face"><FaFacebookF/></div>
            </div>
            </div>
            <div className="copyright">
            <p>&copy; Copyright 2023 All Rights Reserved by Velox Technology Resources Limited</p>
        </div>
        </div>
    )
}


export default Contact;