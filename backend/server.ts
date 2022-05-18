import express, { Application } from 'express';
import 'dotenv/config';
import * as tasksController from './src/controllers/tasks';

const app: Application = express();
const port = process.env.PORT || 3001;

app.use(express.json());

app.post('/tasks', tasksController.create);

try {
	app.listen(port, (): void => {
		console.log(`Connected successfully on port ${port}`);
	});
} catch (error) {
	console.error(`Error occured: ${error.message}`);
}