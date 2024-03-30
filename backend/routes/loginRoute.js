import express from 'express';
import mongoose from 'mongoose';
import { User } from '../models/userModel.js';
import bcrypt from 'bcrypt';

const loginRouter = express.Router();
loginRouter.post('/', async (req, res)=>{
    const username = req.body.username;
    const password = req.body.password;
    try{
        const user = await User.findOne({ "username": username });
    if (!user) {
      return res.status(210).send({ error: 'Invalid username or password ' });
    }
    if (password != user.password){
      return res.status(210).send({ error: 'Invalid password or password ' });
    }
    

    // Authentication successful
    return res.status(200).send(user);
    }catch(error){
        console.error('Error signing in:', error);
        res.status(500).json({ error: 'An unexpected error occurred' });
    }
});

export default loginRouter;