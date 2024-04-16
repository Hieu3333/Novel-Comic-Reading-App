import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom';
import axios from 'axios';

const ReadNovel = () => {
  const [novel, setNovel] = useState({});
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:8080/novels/${id}`)
      .then((res) => {
        setNovel(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);
  const [rating, setRating] = useState(5);
  const handleRatingClick = ()=>{
    const data = {
      rating
    };
    axios.put(`http://localhost:8080/novels/rating/${id}`,data)
    .then((res)=>{
      //window.location.reload();
      alert("Rated!!");
      console.log(res)
    })
    .catch(err =>{
      console.log(err);
    })
  }

  const [comment, setComment] = useState("");
  const handleAddComment = ()=>{
    const data = {
      comment
    };
    axios.post(`http://localhost:8080/novels/comment/${id}`,data)
    .then((res)=>{
      alert("Comment added");
      console.log(res);
    })
    .catch(err=>{
      console.log(err);
    })
  }
  
  return (
    <div className='container mx-auto p-4 font-sans bg-green-300'>
      <h1 className='text-xl text-center font-bold'>{novel.title}</h1>
      <p className='text-sm m-5'>{novel.content}</p>
      <div className="container mx-auto p-4 font-sans bg-green-300 ">
        
        <h2 className="text-lg text-black font-bold">Comment & Rating</h2>
        <span>
          <input type="number" min="0" max="5" onChange={(e)=>{setRating(e.target.value)}} value={rating}>
          </input>
          /5
        <button onClick ={handleRatingClick} className="bg-blue-500 hover:bg-blue-700 text-white rounded-md mt-4 min-w-12 py-0.5  text-sm text-center;">
          Rate
      </button>
        </span>
        <br/>
        <br/>
        <textarea className=" min-w-full p-2"placeholder="Your comment" rows={3} value={comment} onChange={(e)=>{setComment(e.target.value);}}></textarea>
        <button onClick ={handleAddComment} className="bg-blue-500 hover:bg-blue-700 text-white rounded-md mt-4 min-w-12 py-0.5  text-sm text-center">
          Comment
      </button>
        
      </div>
    </div>
  )
}

export default ReadNovel
