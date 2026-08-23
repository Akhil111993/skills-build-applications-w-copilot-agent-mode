import mongoose, { Schema, type Document } from 'mongoose';

export interface IWorkout extends Document {
  title: string;
  durationMinutes: number;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  focusArea: string;
  equipment: string[];
  createdAt: Date;
}

const workoutSchema = new Schema<IWorkout>(
  {
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
  },
  { collection: 'workouts' },
);

export const Workout = mongoose.model<IWorkout>('Workout', workoutSchema);
