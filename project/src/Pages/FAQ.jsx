import React, { useState } from "react";
import '../Styles/FAQ.css'
import {IoIosArrowDown} from 'react-icons/io'
import book from '../assets/Rectangle 70.png'
import {FaFacebookF} from "react-icons/fa"
import {RiLinkedinFill} from "react-icons/ri"
import {FiInstagram} from "react-icons/fi"
import {GrTwitter} from "react-icons/gr"
import logo_1 from "../assets/footerlogo.svg"
import {AiOutlineDoubleRight} from 'react-icons/ai'


const FAQ = ()=>{
    const [drop, setDrop] = useState(false)
    const dropDown = ()=>{
        setDrop(!drop)
    }
    const [drop1, setDrop1] = useState(false)
    const dropDown1 = ()=>{
        setDrop1(!drop1)
    }
    const [drop2, setDrop2] = useState(false)
    const dropDown2 = ()=>{
        setDrop2(!drop2)
    }
    const [drop3, setDrop3] = useState(false)
    const dropDown3 = ()=>{
        setDrop3(!drop3)
    }
    const [drop4, setDrop4] = useState(false)
    const dropDown4 = ()=>{
        setDrop4(!drop4)
    }
    const [drop5, setDrop5] = useState(false)
    const dropDown5 = ()=>{
        setDrop5(!drop5)
    }
    return(
        <div>
            <div className="FAQ-top">
                <div className="FAQ">
                    <h6>FAQ</h6>
                    <h3>What do people usually ask?</h3>
                    <p>We Will Open The World Of Knowledge For You! This is the latest online <br/>examination system you will ever need!</p>
                </div>
            </div>
            <div className="faq-two-grand">
                <div className="faq-two-parent">
                    <div className="faq-two">
                        <div className="faq-two-sub" onClick={dropDown}>
                            <div className="f-one">
                                <p>What is Exams Africa?</p><IoIosArrowDown/>
                            </div>
                           {drop && <div className="f-one-sub">
                                <p>Exams Africa is a platform designed to help Africans prepare prepare for exams. We offer a comprehensive collection of past exam questions from a wide range of subjects, allowing users to test their knowledge and improve their skills.</p>
                            </div>}
                        </div>
                        <div className="faq-two-sub" onClick={dropDown1}>
                            <div className="f-one">
                                <p>Who can use Exam Africa?</p><IoIosArrowDown/>
                            </div>
                            {drop1 &&  <div className="f-one-sub">
                             <p>Exams Africa is designed for anyone who is looking to practise for upcoming exams. This includes students preparing for high school or college exams, as well as professionals looking to advance their careers.</p>
                            </div>}
                        </div>
                    </div>
                    <div className="faq-two">
                        <div className="faq-two-sub" onClick={dropDown2}>
                            <div className="f-ones">
                                <p>What subjects are covered on Exams Africa?</p><IoIosArrowDown/>
                            </div>
                           {drop2 && <div className="f-one-sub">
                                <p>Our platform offers exam questions from a variety of subjects, including math, science, English, and history. We are constantly updating our collection to ensure that we have the most current and relevant exam questions available.</p>
                            </div>}
                        </div>
                        <div className="faq-two-sub" onClick={dropDown3}>
                            <div className="f-ones">
                                <p>Is Exams Africa free to use?</p><IoIosArrowDown/>
                            </div>
                            {drop3 &&  <div className="f-one-sub">
                                <p>Exams.Africa isn't free but comes with a reasonable subscription module. We believe that everyone should have access to the resources they need to succeed, regardless of their financial situation.</p>
                            </div>}
                        </div>
                    </div>
                    <div className="faq-two">
                        <div className="faq-two-sub" onClick={dropDown4}>
                            <div className="f-one1">
                                <p>Can I track my progress on Exams Africa?</p><IoIosArrowDown/>
                            </div>
                           {drop4 && <div className="f-one-sub">
                                <p>Yes, our platform includes a tracking system that allows users to monitor their progress and identify areas where they need to improve. This allows users to focus their studying and maximize their exam performance.</p>
                           </div>}
                        </div>
                        <div className="faq-two-sub" onClick={dropDown5}>
                            <div className="f-one1">
                                <p>Is Exams Africa available on mobile devices?</p><IoIosArrowDown/>
                            </div>
                            {drop5 &&  <div className="f-one-sub">
                                <p>Yes, our platform is fully mobile-responsive and you can also download our mobile app, allowing users to access and use it on their smartphones and tablets. This makes it easy to practise for exams on the go, anytime, anywhere.</p>
                            </div>}
                        </div>
                    </div>
                </div>
            </div>
            <div className="register-book-text">
                <h4>Get Every Latest News Feed</h4>
                <div className="feed"></div>
                <div className='register-book'>
                            <div>
                                <img src={book} alt={book} className="register-book-image" />
                                <div className='reg-text'>
                                <p>Start your revision early. There is no substitute for starting early with <br/>revision. You need to give yourself enough time to review everything<br/> that you have studied, and make sure that.......</p>
                                <button>View This Article <AiOutlineDoubleRight/></button>
                                </div>
                            </div>
                            <div>
                                <img src={book} alt={book} className="register-book-image"/>
                                <div className='reg-text'>
                                 <p>Start your revision early. There is no substitute for starting early with <br/>revision. You need to give yourself enough time to review everything<br/> that you have studied, and make sure that.......</p>
                                 <button>View This Article <AiOutlineDoubleRight/></button>
                                </div>
                            </div>
                        </div>
            </div>
            <div className='footer'>
                  <div className='footer-text'>
                     <div className='help'>
                        <h4>Main</h4>
                        <p>Home</p>
                     </div>
                    <div className='helps'>
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


export default FAQ;