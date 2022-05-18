import TaskModel from '../models/task';
import { Task, TaskSchema } from '../interfaces/task';

const model = new TaskModel();

const create = async (data: Task) => {
	const parsed = TaskSchema.safeParse(data);
	if (!parsed.success) {
		return { error: parsed.error };
	}
	const task = await model.create(data);
	return task;  
};

export { create };