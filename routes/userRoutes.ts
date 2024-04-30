// routes/userRoutes.js
import express from 'express';
import UserModel from '../models/Users';
import multer from 'multer';

const router = express.Router();
const upload = multer();

router.get("/users", async (req, res) => {
    try {
        const users = await UserModel.find({});
        res.json(users);
    } catch (err) {
        console.error('Error fetching users:', err);
        res.status(500).json({ error: "An error occurred while fetching users." });
    }
});

router.post("/users", upload.any(), async (req, res) => {
    try {
        console.log('Received request:', req.body);
        const newUser = await UserModel.create(req.body);
        console.log('Created user:', newUser);
        res.status(201).json(newUser);
    } catch (err) {
        console.error('Error creating user:', err);
        res.status(500).json({ error: "An error occurred while creating user." });
    }
});

export default router;
