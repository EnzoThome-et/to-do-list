import { Schema, model as createModel, Document } from 'mongoose';
import {Task} from '../interfaces/task';
import MongoModel from './mongoModel';

interface TaskDocument extends Task, Document {}

const taskSchema = new Schema<TaskDocument>({
	text: String,
	status: String
}, { versionKey: false });

class TaskModel extends MongoModel<Task> {
	constructor(model = createModel('Tasks', taskSchema)) {
		super(model);
	}
}

export default TaskModel;