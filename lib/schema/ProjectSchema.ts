import * as z from 'zod';

export const metadataSchema = z.object({
  dateCreated: z.date().optional(),
  createdBy: z.string().optional(),
  timestamp: z.date().optional(),
  isActive: z.boolean().optional(),
  userId: z.string().optional(),
});

export type MetadataSchema = z.infer<typeof metadataSchema>;

export const createProject = z
  .object({
    title: z.string({ required_error: 'Title is required' }).min(3, {
      message: 'Title must be at least 3 characters',
    }),
    node: z.array(z.any()).optional().nullable(),
    defaultNode: z.array(z.any()).optional().nullable(),
  })
  .merge(metadataSchema);

export type CreateProjectSchema = z.infer<typeof createProject>;

export const updateProject = createProject.partial().omit({
  dateCreated: true,
  createdBy: true,
  timestamp: true,
  userId: true,
});

export type UpdateProjectSchema = z.infer<typeof updateProject>;

export const initialValues: CreateProjectSchema = {
  title: 'Untitled Project',
  node: [
    {
      id: '1',
      position: { x: 0, y: 0 },
      data: { label: 'Content Acquisition' },
    },
  ],
  defaultNode: [{ id: 'e1-2', source: '1', target: '2' }],
  dateCreated: new Date(),
  createdBy: undefined,
  timestamp: new Date(),
  userId: undefined,
  isActive: true,
};
