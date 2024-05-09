import axios from "axios";
import React,{useState} from "react";
import { useNavigate } from "react-router-dom";

const NovelCard = ({ novel, user }) => {
  const navigate = useNavigate();
  const userH = useState({});
  const generateStars = (rating) => {
    const fullStars = Math.floor(rating); // Number of full stars
    const halfStar = rating - fullStars >= 0.5 ? 1 : 0; // Check for half star
    const emptyStars = 5 - fullStars - halfStar; // Remaining empty stars

    const stars = [];

    // Adding full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <span key={i} style={{ color: "black" }}>
          &#9733;
        </span>
      ); // Unicode for filled star
    }

    // Adding half star if needed
    if (halfStar) {
      stars.push(
        <span key={"half"} style={{ color: "black" }}>
          &#9734;
        </span>
      ); // Unicode for half star
    }

    // Adding empty stars
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <span key={i + fullStars + 1} style={{ color: "black" }}>
          {" "}
          &#9734;
        </span>
      ); // Unicode for empty star
    }

    return stars;
  };
 


  const handleClick = ()=>{
    axios.get(`http://localhost:8080/users/${user}/checkVIP`)
    .then((res)=>{
      if (!(res.status == 202) && novel.vip){
        alert('Please upgrade your account to VIP to read this novel');
      }
      else{
        navigate(`/novels/${novel.id}`,{state:{user_name: user}});
      }
    })
    .catch(err =>{
      console.log(err);
    })
  }
  
  return (
    <div
    onClick={handleClick}
    className="max-w-sm rounded overflow-hidden shadow-lg flex flex-col justify-center items-center bg-green-400 hover:bg-blue-500"
  >
    <img className="w-18 h-24" src={novel.imgURL} alt={novel.title} />
    <div className="px-6 py-4 text-center align:center flex flex-col justify-center items-center">
      <div className="text-xs mb-2 font-bold">{novel.title}</div>
      {novel.vip && (
        <div className="flex justify-center items-center">
          <img width="15" height="8" src="https://img.icons8.com/ios/50/vip.png" alt="vip"/>
        </div>
      )}
      <div className="text-xs mb-2">Rating:{generateStars(novel.rating)}({Math.round(novel.rating*100)/100}/{novel.numberOfRatings} rated)</div>
    </div>
  </div>
  
    
  );
};

export default NovelCard;
