import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login.tsx';
import Signup from './pages/Signup.tsx';
import Home from './pages/Home.tsx';
const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Login/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
      <Route path='/home' element={<Home/>}></Route>

    </Routes>
  )
}

export default App;
