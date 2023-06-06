import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Register from './Pages/Register'
import Login from './Pages/LogIn'
import Special from './Pages/Special'

function App() {
  return (
      <div>
        <BrowserRouter>
        <Routes>
          <Route path='/register' element={<Register/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/*' element={<Special/>}/>
        </Routes>
        </BrowserRouter>    
      </div>
  )
}
export default App
