import React, { SyntheticEvent } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const Signup = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSignUp = () =>{
        const data = {
            username,
            password,
        };
        axios
            .post('http://localhost:5556/users',data)
            .then(()=>{
                navigate('/');
            })
            .catch((error: Error) =>{
                console.log(error);
            });
    }
  return (
    <div className="flex justify-center items-center h-screen bg-gray-700">
      <div className="w-96 p-6 shadow-lg bg-white rounded-md">
        <h1 className="text-3xl block text-center font-semibold"> Sign up</h1>
        <hr className="mt-3" />
        <div className="mt-3">
          <label className="block text-base mb-2">Username</label>
          <input
            type="text"
            onChange={(event) => setUsername(event.target.value)}
            id="username"
            className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
            placeholder="Enter Username..."
          />
        </div>
        <div className="mt-3">
          <label className="block text-base mb-2">Password</label>
          <input
            type="password"
            onChange={(e)=>setPassword(e.target.value)}
            id="password"
            className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
            placeholder="Enter Password..."
          />
        </div>

        <div className="mt-5">
          <button
            type="submit"
            onClick={handleSignUp}
            className="border-2 border-indigo-700 bg-indigo-700 text-white py-1 w-full rounded-md hover:bg-transparent hover:text-indigo-700 font-semibold"
          >
            <i className="fa-solid fa-right-to-bracket"></i>&nbsp;&nbsp;Sign up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
