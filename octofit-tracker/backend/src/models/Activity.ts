import mongoose, { Schema, type Document } from 'mongoose';

export interface IActivity extends Document {
  userId: mongoose.Types.ObjectId;
  type: 'run' | 'workout' | 'cycling' | 'swim';
  durationMinutes: number;
  caloriesBurned: number;
  date: Date;
}

const activitySchema = new Schema<IActivity>(
  {
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
  },
  { collection: 'activities' },
);

export const Activity = mongoose.model<IActivity>('Activity', activitySchema);
