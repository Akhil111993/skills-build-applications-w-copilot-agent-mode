import { Router } from 'express';
import { User } from '../models/User.js';
export const userRouter = Router();
userRouter.get('/', async (_req, res) => {
    const users = await User.find({}).lean();
    res.json({ data: users });
});
userRouter.post('/', async (req, res) => {
    const user = await User.create(req.body);
    res.status(201).json({ data: user });
});
