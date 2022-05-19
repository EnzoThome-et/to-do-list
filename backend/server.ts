import express, { Application } from 'express';
import 'dotenv/config';
import * as tasksController from './src/controllers/tasks';
import connectToDatabase from './connection';

const app: Application = express();
const port = process.env.PORT || 3001;

connectToDatabase();

app.use(express.json());

app.post('/tasks', tasksController.create);
app.get('tasks', tasksController.getAll);

try {
	app.listen(port, (): void => {
		console.log(`Connected successfully on port ${port}`);
	});
} catch (error) {
	console.error(`Error occured: ${error.message}`);
}