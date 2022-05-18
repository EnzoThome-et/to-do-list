import express, { Application } from 'express';
import 'dotenv/config';

const app: Application = express();
const port = process.env.PORT || 3001;

app.use(express.json());

try {
	app.listen(port, (): void => {
		console.log(`Connected successfully on port ${port}`);
	});
} catch (error) {
	console.error(`Error occured: ${error.message}`);
}