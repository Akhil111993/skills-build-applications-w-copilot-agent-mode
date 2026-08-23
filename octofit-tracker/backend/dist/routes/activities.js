import { Router } from 'express';
import { Activity } from '../models/Activity.js';
export const activityRouter = Router();
activityRouter.get('/', async (_req, res) => {
    const activities = await Activity.find({}).lean();
    res.json({ data: activities });
});
activityRouter.post('/', async (req, res) => {
    const activity = await Activity.create(req.body);
    res.status(201).json({ data: activity });
});
