import React,{useState} from "react";
import { Link } from "react-router-dom";

const NovelCard = ({ novel }) => {
  const generateStars = (rating) => {
    const fullStars = Math.floor(rating); // Number of full stars
    const halfStar = rating - fullStars >= 0.5 ? 1 : 0; // Check for half star
    const emptyStars = 5 - fullStars - halfStar; // Remaining empty stars

    const stars = [];

    // Adding full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <span key={i} style={{ color: "gold" }}>
          &#9733;
        </span>
      ); // Unicode for filled star
    }

    // Adding half star if needed
    if (halfStar) {
      stars.push(
        <span key={"half"} style={{ color: "gold" }}>
          &#9734;
        </span>
      ); // Unicode for half star
    }

    // Adding empty stars
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <span key={i + fullStars + 1} style={{ color: "gold" }}>
          {" "}
          &#9734;
        </span>
      ); // Unicode for empty star
    }

    return stars;
  };

  
  return (
    <Link to={`/novels/${novel.id}`}>
      <div
      
      className="max-w-sm rounded overflow-hidden shadow-lg flex flex-col justify-center items-center bg-gray-400 hover:bg-gray-500"
    >
      <img className="w-14 h-20" src={novel.imgURL} alt={novel.title} />
      <div className="px-6 py-4 text-center">
        <div className="text-xs mb-2">{novel.title}</div>
        <div className="text-xs mb-2">Rating:{generateStars(novel.rating)}</div>
  
      </div>
    </div>
    </Link>
  );
};

export default NovelCard;
