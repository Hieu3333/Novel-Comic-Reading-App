import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(true);
  const navigate = useNavigate();
  const handleSignIn =  () => {
    
    const data ={
      username,
      password,
    };
    axios.post('http://localhost:5556/login',data)
          .then((res)=>{
            if (res.status == 200){
              navigate('/home');
            }
            else{
              setLoggedIn(false);
            }
          })
          .catch(error =>{ console.log(error)});
  };
  return (
    <div className="flex justify-center items-center h-screen bg-gray-700">
      <div className="w-96 p-6 shadow-lg bg-white rounded-md">
        <h1 className="text-3xl block text-center font-semibold"> Login</h1>
        <hr className="mt-3" />
        <div className="mt-3">
          <label className="block text-base mb-2">Username</label>
          <input
            type="text"
            onChange={(e)=>{setUsername(e.target.value)}}
            id="username"
            className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
            placeholder="Enter Username..."
          />
        </div>
        <div className="mt-3">
          <label className="block text-base mb-2">Password</label>
          <input
            type="password"
            onChange={(e)=>{setPassword(e.target.value)}}
            id="password"
            className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
            placeholder="Enter Password..."
          />
        </div>
        { loggedIn ? (
          <div></div>
        ):( <div className="flex mt-3 justify-between items-center text-red-700">
        Invalid username or password
        </div> )}
        <div className="mt-3 flex justify-between items-center">
          <div>
            <a href="#" className="text-indigo-800 font-semibold">
              Forgot Password?
            </a>
          </div>
        </div>
        <div className="mt-3 flex justify-between items-center">
          <div>
            <a href="/signup" className="text-indigo-800 font-semibold">
              Sign up
            </a>
          </div>
        </div>
        <div className="mt-5">
          <button
            type="submit"
            onClick={handleSignIn}
            className="border-2 border-indigo-700 bg-indigo-700 text-white py-1 w-full rounded-md hover:bg-transparent hover:text-indigo-700 font-semibold"
          >
            <i className="fa-solid fa-right-to-bracket"></i>&nbsp;&nbsp;Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
