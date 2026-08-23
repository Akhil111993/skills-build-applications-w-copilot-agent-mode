import mongoose, { Schema, type Document } from 'mongoose';

export interface ITeam extends Document {
  name: string;
  members: string[];
  challenge: string;
  createdAt: Date;
}

const teamSchema = new Schema<ITeam>(
  {
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
  },
  { collection: 'teams' },
);

export const Team = mongoose.model<ITeam>('Team', teamSchema);
