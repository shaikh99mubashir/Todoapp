import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Login'
import Navbars from './Navbar'
import Signup from './Signup'
import Todo from './Todo'

const RoutingConfig = () => {
  return (
    <BrowserRouter>
    
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='Signup' element={<Signup/>}/>
        <Route path='todo' element={<Todo/>}/>
        
      </Routes>
    </BrowserRouter>
  )
}

export default RoutingConfig
