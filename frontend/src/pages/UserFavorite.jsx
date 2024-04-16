import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {useParams} from 'react-router-dom';
import NovelGrid from '../components/NovelGrid.jsx';
import NovelGridFav from '../components/NovelGridFav.jsx';


const UserFavorite = () => {
  const [fav, setFav] = useState([]);
  const {username} = useParams();
  useEffect(()=>{
    axios.get(`http://localhost:8080/users/${username}/favorite`)
    .then((res)=>{
        setFav(res.data);
    })
    .catch(err =>{
        console.log(err);
    })
  })  
  return (
    <>
     <div className="bg-green-300 min-h-screen">
      <NovelGridFav novels={fav} user={username}/>
      </div>
    </>
  )
}

export default UserFavorite
