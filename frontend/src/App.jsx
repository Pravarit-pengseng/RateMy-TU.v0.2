import { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Index from './Pages'
import Login from './Pages/login'
import Signup from './Pages/signup'



function App() {

  return (
    <>
  <Routes>
    <Route path='/' element={<Navigate to="/login" />}/>
    <Route path='/index' element={<Index />}/>
    <Route path='/login' element={<Login />}/>
    <Route path='/signup' element={<Signup />}/>
  </Routes>
    </>
  )
}

export default App
