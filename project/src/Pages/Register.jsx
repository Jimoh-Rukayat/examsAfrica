import React from "react";
import "../Styles/Register.css"
import foot from '../assets/footericon-left..svg'
import foot2 from '../assets/footericon-right..svg'
import logo from "../assets/exams 2.png"
import { Link } from "react-router-dom";
import {BsEyeSlash} from 'react-icons/bs'




const Register = ()=>{
    return(
        <div>
            <div className="register-top">
                    <Link to='/'><div className="register-image"><img src={logo} alt={logo}/></div></Link>
                    <div><p>Already have an account? Login <Link to='/login'>here</Link></p></div>
            </div>
             <div className="register">
                <div><h1>Create An Account</h1></div>
                <form>
                    <div className="names">
                        <div className="lastname">
                        <label>First Name</label> 
                        <input type="text" />
                        </div>
                        <div className="lastname">
                        <label>Last Name</label>
                        <input type="text" />
                        </div>
                    </div>
                    <label>Username</label> 
                    <input type="text" />
                    <label>Email Address</label>
                    <input type="text" />
                    <label>Mobile Number</label> 
                    <div className="number">
                    <select>
                        <option>+234</option>
                    </select>
                    <input type="number"/>
                    </div>
                    <div className="names"> 
                        <div className="lastname">
                        <label>Password</label>
                        <input type="password" />
                        <span className="span-eye"><BsEyeSlash/></span>
                        </div>
                        <div className="lastname">
                        <label>Confirm Password</label>
                        <input type="password" />
                        <span className="span-eyes"><BsEyeSlash/></span>
                        </div>
                    </div>
                    <div className="reg-button"> <a>Next</a></div>
                </form>
            </div>
            <div>
                <img className="image1" src={foot} alt={foot} />
                <img className="image2" src={foot2} alt={foot2} />
            </div>
        </div>
    )
}


export default Register;