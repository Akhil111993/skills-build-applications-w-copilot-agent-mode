import mongoose, { Schema } from 'mongoose';
const activitySchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    type: {
        type: String,
        enum: ['run', 'workout', 'cycling', 'swim'],
        required: true,
    },
    durationMinutes: {
        type: Number,
        required: true,
        min: 1,
    },
    caloriesBurned: {
        type: Number,
        required: true,
        min: 0,
    },
    date: {
        type: Date,
        default: Date.now,
    },
}, { collection: 'activities' });
export const Activity = mongoose.model('Activity', activitySchema);
