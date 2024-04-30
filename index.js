"use strict";
const express = require('express');
const mongoose = require('mongoose');
const app = express();
mongoose.connect('mongodb://localhost:27017/d3db');
const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
});
const UserModel = mongoose.model("users", UserSchema);
app.get("/getUsers", (res) => {
    UserModel.find({}).then((users) => {
        res.json(users);
    }).catch((err) => {
        console.log(err);
    });
});
app.listen(4000, () => {
    console.log('App running on port 4000');
});
