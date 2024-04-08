import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const NovelDetail = () => {
  const [novel, setNovel] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:8080/novels/${id}`)
      .then(res => {
        setNovel(res.data);
      })
      .catch(err => {
        console.log(err);
      })
  }, [id]);

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
    <>
    <div className="container mx-auto p-4 font-sans bg-green-300 ">
      <div className="flex flex-wrap items-start">
        <div className="w-full md:w-1/5 pr-4">
          <img src={novel.imgURL} alt={novel.title} className="max-w-full h-auto" />
        </div>
        <div className="w-full md:w-4/5 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">{novel.title}</h1>
            <h2 className="text-xl text-gray-500 mb-2">{novel.genre}</h2>
            <h2 className='text-lg text-gray-700 mb-2'>Author: <span className='text-black'>{novel.author}</span> </h2>
            <div>{generateStars(novel.rating)} {novel.rating}</div>
          </div>
          <div className='flex flex-row place-items: stretch gap-1'>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-2xl mt-4 max-w-20 text-align: center;">
            Read
          </button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-2xl mt-4 max-w-50 text-align: center;">
            Add to favorite
          </button>
          </div>
          
        </div>
      </div>
    </div>

    <div className="container mx-auto p-4 font-sans bg-green-300 ">
        <h2 className='text-lg text-black font-bold'>Summary</h2>
        <div className='text-sm'>
            {novel.summary}
        </div>
    </div>

    </>
    
  )
}

export default NovelDetail;
