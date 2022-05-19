import express, { Application } from 'express';
import 'dotenv/config';
import * as tasksController from './src/controllers/tasks';
import connectToDatabase from './connection';
import cors from 'cors';

const app: Application = express();
const port = process.env.PORT || 3001;

connectToDatabase();

app.use(express.json());
app.use(cors());

app.post('/tasks', tasksController.create);
app.put('/task/:id', tasksController.update);
app.get('/tasks', tasksController.getAll);
app.delete('/task/:id', tasksController.deleteOne);

try {
	app.listen(port, (): void => {
		console.log(`Connected successfully on port ${port}`);
	});
} catch (error) {
	console.error(`Error occured: ${error.message}`);
}