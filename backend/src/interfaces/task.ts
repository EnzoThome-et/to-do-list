import { z } from 'zod';

export const TaskSchema = z.object({
	text: z.string(),
	status: z.string(),
});

export type Task = z.infer<typeof TaskSchema>