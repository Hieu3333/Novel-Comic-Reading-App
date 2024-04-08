import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';
import Home from './pages/Home.jsx';
import NovelDetail from './pages/NovelDetail.jsx';
const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Login/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/novels/:id' element={<NovelDetail/>}></Route>

    </Routes>
  )
}

export default App;
