import { Router } from 'express';
import { LeaderboardEntry } from '../models/Leaderboard.js';

export const leaderboardRouter = Router();

leaderboardRouter.get('/', async (_req, res) => {
  const leaderboard = await LeaderboardEntry.find({}).sort({ score: -1 }).lean();
  res.json({ data: leaderboard });
});

leaderboardRouter.post('/', async (req, res) => {
  const entry = await LeaderboardEntry.create(req.body);
  res.status(201).json({ data: entry });
});
