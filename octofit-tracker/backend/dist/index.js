import express from 'express';
import dotenv from 'dotenv';
import './config/database.js';
import { apiBaseUrl } from './server.js';
import { userRouter } from './routes/users.js';
import { teamRouter } from './routes/teams.js';
import { activityRouter } from './routes/activities.js';
import { leaderboardRouter } from './routes/leaderboard.js';
import { workoutRouter } from './routes/workouts.js';
dotenv.config();
const app = express();
const port = Number(process.env.PORT || 8000);
app.use(express.json());
app.get('/api/health', (_req, res) => {
    res.json({
        status: 'ok',
        service: 'octofit-backend',
        apiUrl: apiBaseUrl,
    });
});
app.use('/api/users', userRouter);
app.use('/api/teams', teamRouter);
app.use('/api/activities', activityRouter);
app.use('/api/leaderboard', leaderboardRouter);
app.use('/api/workouts', workoutRouter);
app.listen(port, () => {
    console.log(`OctoFit backend running on http://localhost:${port}`);
    console.log(`API base URL: ${apiBaseUrl}`);
});
