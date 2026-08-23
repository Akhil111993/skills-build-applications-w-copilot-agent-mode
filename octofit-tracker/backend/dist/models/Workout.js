import mongoose, { Schema } from 'mongoose';
const workoutSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    durationMinutes: {
        type: Number,
        required: true,
        min: 5,
    },
    difficulty: {
        type: String,
        enum: ['beginner', 'intermediate', 'advanced'],
        required: true,
    },
    focusArea: {
        type: String,
        required: true,
    },
    equipment: {
        type: [String],
        default: [],
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
}, { collection: 'workouts' });
export const Workout = mongoose.model('Workout', workoutSchema);
