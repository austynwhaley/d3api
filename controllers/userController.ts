// controllers/UserController.ts
import { Request, Response } from 'express';
import UserModel from '../models/user';

export const createUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const { name, email } = req.body;
        const newUser = new UserModel({ name, email });
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};
