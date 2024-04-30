"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
mongoose_1.default.connect('mongodb://localhost:27017/d3db').then(() => {
    console.log("Connected to db");
}).catch((err) => {
    console.log(err);
});
const UserSchema = new mongoose_1.default.Schema({
    name: String,
    email: String,
});
const UserModel = mongoose_1.default.model("users", UserSchema);
// Enable CORS for all routes
app.use((0, cors_1.default)());
app.get("/users", (req, res) => {
    UserModel.find({}).then((users) => {
        console.log('req', req);
        res.json(users);
    }).catch((err) => {
        console.log('ahhh', err);
        res.status(500).json({ error: "An error occurred while fetching users." });
    });
});
app.get("/", (req, res) => {
    console.log('BING');
    res.send('Hello World!');
});
const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`App running on port ${port}`);
});
