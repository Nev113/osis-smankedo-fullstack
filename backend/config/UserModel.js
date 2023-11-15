import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
    },
    email: {
        type: String,
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        unique: true,
    },
    role: {
        type: String,
    }
    });

export default mongoose.model("User", UserSchema);