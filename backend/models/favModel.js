
import mongoose from "mongoose";

const favSchema = mongoose.Schema(
    {
        item_id: {type: String, required: true},
        user_id: {type: String, required: true}
    }
);
export const Fav = mongoose.model('Fav', favSchema);