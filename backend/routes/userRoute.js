import express from 'express';
import { User } from '../models/userModel.js';
import { Fav } from '../models/favModel.js';
const userRouter = express.Router();

userRouter.post('/',  async (req, res)=>{
    try{
        if (!req.body.username || !req.body.password){
            return res.status(400).send({
                message: 'Can not left unfilled'
            });
        }
        const newUser = {
            username: req.body.username,
            password: req.body.password,
        };
        const user = await User.create(newUser);
        return res.status(201).send(user);
    }catch(error){
        console.log(error);
        res.status(500).send({message: error.message});
    }
});

userRouter.get('/:id/fav', async (req, res)=>{
    try{
        const {id} =  req.params;
        const items = await Fav.find({"user_id":id});
        return res.status(200).json({
            count: items.length,
            data: items
        })
    }catch(error){
        console.log(error.message);
        return response.status(500).send({message: error.message});
    }
})

userRouter.get('/:id', async (req, res) =>{
    try{
        const {id} = req.params;
        const user = await User.findById(id);
        return res.status(200).json({
            user
        });
    }catch(error){
        console.log(error.message);
        return res.status(500).send({message: error.message});
    }
})
export default userRouter;