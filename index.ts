// server.js
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import userRoutes from './routes/userRoutes.js';

const app = express();

mongoose.connect('mongodb://localhost:27017/d3db').then(() => {
    console.log("Connected to db");
}).catch((err) => {
    console.log(err);
});

app.use(cors());
app.use(express.json()); // parse JSON bodies

app.use(userRoutes);

app.get("/", (req, res) => {
    console.log('Request received:', req.method, req.url);
    res.send('Hello World!');
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`App running on port ${port}`);
});
