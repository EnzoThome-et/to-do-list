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

const update = async (id: string, data: Task) => {
	const parsed = TaskSchema.safeParse(data);
	if (!parsed.success) {
		return { error: parsed.error };
	}
	const task = await model.update(id, data);
	return task;  
};

const getAll = async () => {
	const tasks = await model.read();
	return tasks;
};

const deleteOne = async (id: string) => {
	const task = await model.delete(id);
	return task;
};

export { create, getAll, deleteOne, update };
