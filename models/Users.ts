// models/User.js
import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    userName: String,
    firstName: String,
    lastName: String,
    email: String,
    password: String,
});

const UserModel = mongoose.model("users", UserSchema);

export default UserModel;
