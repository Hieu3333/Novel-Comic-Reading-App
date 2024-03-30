import mongoose from "mongoose";

const novelSchema = mongoose.Schema(
    {
        title:{
            type: String,
            required: true,
        },
        author:{
            type: String,
            required: true,
        },
        genre:{
            type: String,
            required: true,
        },
        publishYear:{
            type: Number,
            required: true,
        },
        overview:{
            type: String,
            required: false,
        },
        content:{
            type: String,
            required: false,
        },
        rating:{
            type: Number,
            required: false,
        },
        img:{
            type: String,
            required: false,
        },
    },
    {
        timestamps: true
    }
);

export const Novel =  mongoose.model('Novel', novelSchema);