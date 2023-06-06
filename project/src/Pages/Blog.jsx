import React from 'react'
import "../Styles/Blog.css"
import book from '../assets/Rectangle 70.png'
import {FaFacebookF} from "react-icons/fa"
import {RiLinkedinFill} from "react-icons/ri"
import {FiInstagram} from "react-icons/fi"
import {GrTwitter} from "react-icons/gr"
import logo_1 from "../assets/footerlogo.svg"
import {AiOutlineDoubleRight} from 'react-icons/ai'



const Blog = () =>{
    return(
        <div>
            <div className='blog-top'>
                <div className='blog'>
                <h6>Blog</h6>
                <h3>Get the latest Updates</h3>
                <p>We Will Open The World Of Knowledge For You! This is the latest online examination system you will ever need!</p>
                </div>
            </div>
                <div className='grand-book'>
                    <div className='book'>
                        <div className='book-one'>
                            <div>
                                <img src={book} alt={book} />
                                <div className='text'>
                                <h3>Examination Preparations</h3>
                                <p>Start your revision early. There is no substitute for starting early with <br/>revision. You need to give yourself enough time to review everything<br/> that you have studied, and make sure that.......</p>
                                <button>View This Article <AiOutlineDoubleRight/></button>
                                </div>
                            </div>
                            <div>
                                <img src={book} alt={book} />
                                <div className='text'>
                                <h3>Examination Preparations</h3>
                                <p>Start your revision early. There is no substitute for starting early with <br/>revision. You need to give yourself enough time to review everything<br/> that you have studied, and make sure that.......</p>
                                <button>View This Article <AiOutlineDoubleRight/></button>
                                </div>
                            </div>
                        </div>
                        <div className='book-one'>
                            <div>
                                <img src={book} alt={book} />
                                <div className='text'>
                                <h3>Examination Preparations</h3>
                                <p>Start your revision early. There is no substitute for starting early with <br/>revision. You need to give yourself enough time to review everything<br/> that you have studied, and make sure that.......</p>
                                <button>View This Article <AiOutlineDoubleRight/></button>
                                </div>
                            </div>
                            <div>
                                <img src={book} alt={book} />
                                <div className='text'>
                                <h3>Examination Preparations</h3>
                                <p>Start your revision early. There is no substitute for starting early with <br/>revision. You need to give yourself enough time to review everything<br/> that you have studied, and make sure that.......</p>
                                <button>View This Article <AiOutlineDoubleRight/></button>
                                </div>
                            </div>
                        </div>
                        <div className='book-one'>
                            <div>
                                <img src={book} alt={book} />
                                <div className='text'>
                                <h3>Examination Preparations</h3>
                                <p>Start your revision early. There is no substitute for starting early with <br/>revision. You need to give yourself enough time to review everything<br/> that you have studied, and make sure that.......</p>
                                <button>View This Article <AiOutlineDoubleRight/></button>
                                </div>
                            </div>
                            <div>
                            <img src={book} alt={book} />
                                <div className='text'>
                                <h3>Examination Preparations</h3>
                                <p>Start your revision early. There is no substitute for starting early with <br/>revision. You need to give yourself enough time to review everything<br/> that you have studied, and make sure that.......</p>
                                <button>View This Article <AiOutlineDoubleRight/></button>
                                </div>
                            </div>
                        </div>
                        <div className='book-two'>
                            <div>
                                <img src={book} alt={book} />
                                <div className='text'>
                                <h3>Examination Preparations</h3>
                                <p>Start your revision early. There is no substitute for starting early with <br/>revision. You need to give yourself enough time to review everything<br/> that you have studied, and make sure that.......</p>
                                <button>View This Article <AiOutlineDoubleRight/></button>
                                </div>
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



export default Blog;