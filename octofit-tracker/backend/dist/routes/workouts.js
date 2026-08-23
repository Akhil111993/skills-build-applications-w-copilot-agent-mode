import { Router } from 'express';
import { Workout } from '../models/Workout.js';
export const workoutRouter = Router();
workoutRouter.get('/', async (_req, res) => {
    const workouts = await Workout.find({}).lean();
    res.json({ data: workouts });
});
workoutRouter.post('/', async (req, res) => {
    const workout = await Workout.create(req.body);
    res.status(201).json({ data: workout });
});
