import mongoose, { Schema } from 'mongoose';
const leaderboardSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    username: {
        type: String,
        required: true,
        trim: true,
    },
    score: {
        type: Number,
        required: true,
        min: 0,
    },
    rank: {
        type: Number,
        required: true,
        min: 1,
    },
}, { collection: 'leaderboard' });
export const LeaderboardEntry = mongoose.model('LeaderboardEntry', leaderboardSchema);
