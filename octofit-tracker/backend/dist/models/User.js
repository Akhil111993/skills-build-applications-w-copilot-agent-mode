import mongoose, { Schema } from 'mongoose';
const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },
    role: {
        type: String,
        enum: ['admin', 'member'],
        default: 'member',
    },
    fitnessGoal: {
        type: String,
        default: 'General fitness',
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
}, { collection: 'users' });
export const User = mongoose.model('User', userSchema);
