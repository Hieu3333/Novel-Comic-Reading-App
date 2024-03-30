import express from 'express';
import { Novel } from '../models/novelModel.js';
 
const novelRouter = express.Router();
novelRouter.post('/', async (req, res) =>{
    try{
        if (!req.body.title || !req.body.author || !req.body.genre || !req.body.publishYear){
            return res.status(400).send({
                message: 'Can not left unfilled'
            });
        }
        const newNovel = {
            title: req.body.title,
            author: req.body.author,
            genre: req.body.genre,
            publishYear: req.body.publishYear,
        };

        const novel = await Novel.create(newNovel);
        return res.status(201).send(novel);
    }catch(error){
        console.log(error);
        res.status(500).send({message: error.message});
    }
});

export default novelRouter;