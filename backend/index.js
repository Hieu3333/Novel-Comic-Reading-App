import express from 'express';
import { PORT, mongodbURL } from './config.js';
import mongoose from 'mongoose';
import cors from 'cors';
import userRouter from './routes/userRoute.js';
import novelRouter from './routes/novelRoute.js';
import favRouter from './routes/favRoute.js';
import { User } from './models/userModel.js';
import loginRouter from './routes/loginRoute.js';

const app = express();
app.get('/', (req, res) =>{
    console.log(req);
    return res.status(234).send('Ok');
});
app.use(cors());
app.use(express.json());

mongoose.connect(mongodbURL).then(() =>{
    console.log('App connected to database');
    app.listen(PORT, () =>{
        console.log(`App is listening at port ${PORT} `);
    })
}).catch(error =>{
    console.log(error);
})

app.use('/login', loginRouter);
    

app.use('/users', userRouter);
app.use('/novels', novelRouter);
app.use('/fav', favRouter);