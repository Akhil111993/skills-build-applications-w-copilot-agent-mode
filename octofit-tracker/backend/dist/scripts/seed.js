import mongoose from 'mongoose';
import { User } from '../models/User.js';
import { Team } from '../models/Team.js';
import { Activity } from '../models/Activity.js';
import { LeaderboardEntry } from '../models/Leaderboard.js';
import { Workout } from '../models/Workout.js';
const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit_db';
/**
 * Seed the octofit_db database with test data
 */
async function seedDatabase() {
    try {
        await mongoose.connect(connectionString);
        console.log('Seed the octofit_db database with test data');
        await User.deleteMany({});
        await Team.deleteMany({});
        await Activity.deleteMany({});
        await LeaderboardEntry.deleteMany({});
        await Workout.deleteMany({});
        const users = await User.insertMany([
            {
                username: 'alex',
                email: 'alex@octofit.app',
                role: 'admin',
                fitnessGoal: 'Build endurance',
            },
            {
                username: 'sam',
                email: 'sam@octofit.app',
                role: 'member',
                fitnessGoal: 'Improve strength',
            },
            {
                username: 'maya',
                email: 'maya@octofit.app',
                role: 'member',
                fitnessGoal: 'Mobility and recovery',
            },
        ]);
        const userIds = users.map((user) => user._id);
        await Team.insertMany([
            {
                name: 'Trail Blazers',
                members: ['alex', 'sam'],
                challenge: 'Weekly distance challenge',
            },
            {
                name: 'Core Crew',
                members: ['maya'],
                challenge: 'Consistency streak',
            },
        ]);
        await Activity.insertMany([
            {
                userId: userIds[0],
                type: 'run',
                durationMinutes: 35,
                caloriesBurned: 420,
                date: new Date('2026-08-22'),
            },
            {
                userId: userIds[1],
                type: 'workout',
                durationMinutes: 50,
                caloriesBurned: 510,
                date: new Date('2026-08-22'),
            },
            {
                userId: userIds[2],
                type: 'cycling',
                durationMinutes: 40,
                caloriesBurned: 390,
                date: new Date('2026-08-20'),
            },
        ]);
        await LeaderboardEntry.insertMany([
            {
                userId: userIds[0],
                username: 'alex',
                score: 980,
                rank: 1,
            },
            {
                userId: userIds[1],
                username: 'sam',
                score: 910,
                rank: 2,
            },
            {
                userId: userIds[2],
                username: 'maya',
                score: 860,
                rank: 3,
            },
        ]);
        await Workout.insertMany([
            {
                title: 'HIIT Circuit',
                durationMinutes: 25,
                difficulty: 'intermediate',
                focusArea: 'Full body',
                equipment: ['mat', 'dumbbells'],
            },
            {
                title: 'Recovery Mobility',
                durationMinutes: 20,
                difficulty: 'beginner',
                focusArea: 'Mobility',
                equipment: ['mat'],
            },
            {
                title: 'Tempo Run',
                durationMinutes: 45,
                difficulty: 'advanced',
                focusArea: 'Cardio',
                equipment: ['running shoes'],
            },
        ]);
        console.log('Database seeding complete');
        await mongoose.disconnect();
    }
    catch (error) {
        console.error('Error seeding database:', error);
        process.exit(1);
    }
}
seedDatabase();
