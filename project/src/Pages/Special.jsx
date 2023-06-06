import React from "react";
import {Routes, Route} from "react-router-dom"
import Home from './Home'
import Blog from './Blog'
import Contact from './Contact'
import FAQ from './FAQ'
import NavBar from "../Navbar/NavBar";


const Special = () =>{
    return(
        <div>
        <div>
            <NavBar/>
            <Routes>
               <Route path='/' element={<Home/>}/>
                <Route path='/blog' element={<Blog/>}/>
                <Route path='contact' element={<Contact/>}/>
                <Route path='faq' element={<FAQ/>}/>
            </Routes>
        </div>
        </div>
    )
}

export default Special;
