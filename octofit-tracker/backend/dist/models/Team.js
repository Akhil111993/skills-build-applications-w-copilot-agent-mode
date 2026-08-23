import mongoose, { Schema } from 'mongoose';
const teamSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    members: {
        type: [String],
        default: [],
    },
    challenge: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
}, { collection: 'teams' });
export const Team = mongoose.model('Team', teamSchema);
