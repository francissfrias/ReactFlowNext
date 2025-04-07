import { model, Model, models, Schema } from 'mongoose';
import connectToDatabase from '../db';

// Connect to the database
const db = await connectToDatabase();

interface ProjectModelSchema {
  title: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  node: any[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  defaultNode: any[];
  createdBy?: string | undefined;
  dateCreated?: Date | undefined;
  timestamp?: Date | undefined;
  userId?: string | undefined;
  isActive?: boolean | undefined;
}

// Define the SKU schema based on Zod schema fields
const projectSchema = new db.Schema<ProjectModelSchema>(
  {
    title: { type: String, required: true },
    node: [Schema.Types.Mixed],
    defaultNode: [Schema.Types.Mixed],

    // Metadata fields
    createdBy: { type: String, required: false },
    dateCreated: { type: Date, required: false, default: Date.now },
    timestamp: { type: Date, required: false, default: Date.now },
    userId: { type: String, required: false },
    isActive: { type: Boolean, required: false, default: true },
  },
  { versionKey: false, timestamps: true }
);

// Use the existing model if it exists, otherwise create a new one
const Project: Model<ProjectModelSchema> =
  models.Project || model<ProjectModelSchema>('Project', projectSchema);

export { Project };
