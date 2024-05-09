import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const VNPay = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCVV] = useState("");

  const {username} = useParams();
  const navigate = useNavigate(); 

  const handlePayment = (e) => {
    e.preventDefault();
    // Here you can handle the form submission, like sending the data to your server for payment processing
    // You can access the card information from state variables: cardNumber, expiryDate, cvv
    axios.put(`http://localhost:8080/users/${username}/upgrade`)
    .then((res)=>{
        alert('You are upgraded to VIP member');
        console.log(res);
        navigate("/home", {state: {user_name: username}});
    })
    .catch(err=>{
        console.log(err);
    })
    
  };

  

  return (
    <div className="w-full h-full mx-auto bg-green-300">
      <h2 className="text-2xl font-bold mb-4">Payment Information</h2>
      <form >
        <div className="mb-4">
          <label htmlFor="cardNumber" className="block mb-2">
            Card Number
          </label>
          <input
            type="text"
            id="cardNumber"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            className="w-500 border-gray-300 rounded-md p-2"
            placeholder="Enter card number"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="expiryDate" className="block mb-2">
            Expiry Date
          </label>
          <input
            type="text"
            id="expiryDate"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
            className="w-500 border-gray-300 rounded-md p-2"
            placeholder="MM/YY"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="cvv" className="block mb-2">
            CVV
          </label>
          <input
            type="text"
            id="cvv"
            value={cvv}
            onChange={(e) => setCVV(e.target.value)}
            className="w-500 border-gray-300 rounded-md p-2"
            placeholder="CVV"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-md"
          onClick={handlePayment}
        >
          Pay Now
        </button>
      </form>
    </div>
  );
};

export default VNPay;
