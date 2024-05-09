import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';
import Home from './pages/Home.jsx';
import NovelDetail from './pages/NovelDetail.jsx';
import UserFavorite from './pages/UserFavorite.jsx';
import ReadNovel from './pages/ReadNovel.jsx';
import Admin from './pages/Admin.jsx';
import UploadNovel from './pages/UploadNovel.jsx';
import VNPay from './pages/VNPay.jsx';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Login/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/novels/:id' element={<NovelDetail/>}></Route>
      <Route path='/:username/favorite' element={<UserFavorite/>}></Route>
      <Route path='/novels/read/:id' element ={<ReadNovel/>}></Route>
      <Route path='/admin' element={<Admin/>}></Route>
      <Route path='/admin/upload' element={<UploadNovel/>}></Route>
      <Route path='/:username/upgrade' element={<VNPay/>}></Route>

    </Routes>
  )
}

export default App;
