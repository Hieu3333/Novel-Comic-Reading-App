import express from 'express';
import { Fav } from '../models/favModel.js';
import mongoose from 'mongoose';

const favRouter = express.Router();
favRouter.post('/', async (req, res) =>{
    try{
        if (!req.body.item_id || !req.body.user_id){
            return res.status(400).send({
                message: 'Can not left unfilled'
            });
        }
        const newFav = {
            item_id: req.body.item_id,
            user_id: req.body.user_id
        };
        const fav = await Fav.create(newFav);
        return res.status(201).send(fav);
    }catch(error){
        console.log(error);
        res.status(500).send({message: error.message});
    }
});
export default favRouter;