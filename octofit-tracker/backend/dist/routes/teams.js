import { Router } from 'express';
import { Team } from '../models/Team.js';
export const teamRouter = Router();
teamRouter.get('/', async (_req, res) => {
    const teams = await Team.find({}).lean();
    res.json({ data: teams });
});
teamRouter.post('/', async (req, res) => {
    const team = await Team.create(req.body);
    res.status(201).json({ data: team });
});
