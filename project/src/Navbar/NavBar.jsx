import React, {useState} from "react";
import logo from "../assets/exams 2.png"
import {Link} from 'react-router-dom'
import '../Styles/NavBar.css'
import {FaBars,FaTimes} from 'react-icons/fa'
import {motion} from 'framer-motion'

const NavBar = () =>{
    const [mobile, setMobile] = useState(false)
    const handleMobile = ()=>{
        setMobile(!mobile)
    }
     const handleClose = ()=>{
        setMobile(false)
     }
    return(
        <div className="navigation">
        <div className="nav-links">
            <div className="logo"><Link to='/'><img src={logo} alt={logo}/></Link></div>
            <div className= {mobile ? "mobile-link" :"link"}>
                <div className="nav-top">
                    <Link to='/blog' onClick={handleClose}>Blog</Link>
                    <Link to='/faq' onClick={handleClose}>FAQ</Link>
                    <Link to='/contact' onClick={handleClose}>Contact Us</Link>
                </div>
                <div className="nav-top-two">
                <Link to='/register' onClick={handleClose} className="register"><button>Register</button></Link>
                <Link to='/login' onClick={handleClose} className="login"><button>Log In</button></Link>
                </div>
            </div>
            <motion.div className="icons"
            initial={{y:0}}
            animate={{y:0}}
            transition={{type:"spring", stiffness: "300"}}
            >
                {mobile ? <FaTimes className="time" onClick={handleMobile}/>
               :
                <FaBars className="bar" onClick={handleMobile}/>
                }
           </motion.div>
        </div>
        </div>
    )
}




export default NavBar;