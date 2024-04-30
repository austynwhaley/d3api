import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import cors from 'cors';


const app = express();

mongoose.connect('mongodb://localhost:27017/d3db').then(() => {
    console.log("Connected to db")
}).catch((err) => {
    console.log(err);
});

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
});

const UserModel = mongoose.model("users", UserSchema);

// Enable CORS for all routes
app.use(cors());

app.get("/users", (req: Request, res: Response) => {
    UserModel.find({}).then((users) => {
        res.json(users);
    }).catch((err) => {
        console.log('ahhh',err);
        res.status(500).json({ error: "An error occurred while fetching users." });
    });
});

app.get("/", (req: Request, res: Response) => {
    console.log('BING');
    res.send('Hello World!');
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`App running on port ${port}`);
});
