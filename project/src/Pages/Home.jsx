import React from "react";
import girl from "../assets/lady-practice.webp"
import book from "../assets/book.webp"
import man from "../assets/man-with-glasses.svg"
import "../Styles/Home.css"
import {Link} from 'react-router-dom'
import {RxDashboard} from 'react-icons/rx'
import {TbNotebook, TbActivityHeartbeat} from 'react-icons/tb'
import {BiDollarCircle} from "react-icons/bi"
import {BsApple, BsPlaystation} from "react-icons/bs"
import {TfiWorld} from "react-icons/tfi"
import {ImWhatsapp} from "react-icons/im"
import {SiTelegram} from "react-icons/si"
import {RiLinkedinFill} from "react-icons/ri"
import {FiInstagram} from "react-icons/fi"
import {GrTwitter} from "react-icons/gr"
import {FaFacebookF} from "react-icons/fa"
import happy from "../assets/reading-boy.webp"
import read from "../assets/spsimg.webp"
import practice from "../assets/aeimg.webp"
import nice from "../assets/nicee 2.png"
import logo_1 from "../assets/footerlogo.svg"
import {MdSlowMotionVideo} from "react-icons/md"



const Home = ()=>{
    return(
    <div className="parent">
        <div className="top-text">
            <div className="texts">
                 <div className="text-one"> 
                    <h1>Practice</h1>
                    <img src={girl} alt={girl}/>
                 </div>
                <div className="text-two">
                    <img src={book} alt={book}/>
                    <h1> Prepare</h1>
                </div>
                <div className="text-three">
                     <h1>Excel</h1>
                  <div className="text-three-span utm">
                     <div className="utme">
                        <span><button>JAMB-UTME</button></span>
                        <span><button>WAEC-SSCE</button></span>
                        <span><button>WAEC-GCE</button></span>
                     </div>
                     <div className="text-three-exam">
                        <span className="common-entrance"><button style={{width: "200px", padding: "17px", height: "60px"}}>COMMON ENTRANCE EXAM</button></span>
                        <span><button style={{padding: "20px 10px"}}>NECO</button></span>
                     </div>
                 </div>
              </div>
           </div>
            <div className="home-image">
              <img src={man} alt={man} style={{height: "500px", width: "100kb"}}/>
            </div>
        </div>
        <div className="para-text">
            <p>Welcome to the Exams.Africa, Exams Africa is a platform designed specifically for Africans looking to practise for upcoming exams. Our platform offers a comprehensive collection of past exam questions from a wide range of subjects, allowing users to test their knowledge and improve their skills.</p>
           <button className="home-register">Get Started</button>
           <button className="home-login">Start Practising</button>
        </div>
        <div className="bottom-text">
          <div className="inner-bottom">
            <div className="past-que">
            <div className="symbol"><RxDashboard/><h3>Past Questions</h3></div>
                <p>Thousands of past questions</p>
            </div>
            <div className="notebook">
            <div className="symbols"><TbNotebook/><h3> Mock Exams</h3></div>
                <p>Mock Examination feature</p>
            </div>
            <div className="heart">
                <div className="symbols"><TbActivityHeartbeat/><h3> Track Activity</h3></div>
                <p>Dashboard to track all activities</p>
            </div>
            <div className="dollar">
            <div className="symbols"><BiDollarCircle/><h3> Affordable</h3></div>
                <p>Low cost on in-app purchases</p>
            </div>
          </div>
        </div>
          <div className="reason">
             <h2>WhyExaLabIsBest?</h2>
          </div>
          <div className="category">  
             <div>
                <img src={happy} alt={happy}/>
             </div>
             <div className="category-text">
                <h3>Choose Your Category</h3>
                <p>Exams Africa gives every user a chance of choosing their exam category based on essential subjects or courses of study e.g WAEC-SSCE, UTME (JAMB), etc.</p>
                <div className="line"></div>
             </div>
          </div>
          <div className="subject">
             <div className="subject-text">
                <h3>Select Preferable Subject</h3>
                <p>Every User gets to choose the preferred subect to practise as there are as many essential subjects as you want on the site.</p>
                <div className="line"></div>
             </div>
             <div>
                <img src={read} alt={read}/>
             </div>
          </div>
          <div className="practise">
              <div>
                <img src={practice} alt={practice}/>
              </div>
              <div className="practise-text">
                <h3>Practise</h3>
                <p>Now, this is where you get to test your capabilities by practising the questions to the finish line and getting graded at the end.</p>
                <div className="line"></div>
              </div>
          </div>
          <div className="bottom-texts">
             <h1>Available on These platforms</h1>
            <div className="in-bottom-text">
                <div className="web">
                    <TfiWorld/>
                    <div  className="text-icons">
                    <p>Web</p>
                    <a href="#">Get Started</a>
                    </div>
                </div>
                <div className="apple-store">
                    <BsApple/>
                    <div  className="text-icons">
                    <p>App Store</p>
                    <a href="#">Download Now</a>
                    </div>
                    <div className="none"></div>
                </div>
                <div className="play-store">
                    <BsPlaystation/>
                    <div  className="text-icons">
                    <p>Play Store</p>
                    <a href="#">Download Now</a>
                    </div>
                </div>
                <div className="tele">
                    <SiTelegram/>
                    <div className="text-icons">
                        <p>Telegram</p>
                        <a href="#">Coming soon</a>
                    </div>
                </div>
                <div className="whatsapp">
                    <ImWhatsapp/>
                    <div  className="text-icons">
                        <p>WhatsApp</p>
                        <a href="#">Coming soon</a>
                    </div>
                </div> 
            </div>
          </div>
          <div className="examsAfrica">
            <h1>Use the ExamsAfrica Platform the right way</h1>
            <p>Learn the essential ways to successfully maximize the Platform for a exam success.</p>
          </div>
          <div className="nice">
              <img src={nice} alt={nice}/>
              <p className="nice-video"> <MdSlowMotionVideo/>  Play tutorial video</p>
          </div>
          <div className="footer">
            <div className="footer-text">
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


export default Home;