import {Request, Response} from 'express';
import * as tasksService from '../services/task';


const create = async (req: Request, res: Response) => {
	try {
		const data = req.body;
		const task = await tasksService.create(data);
		return res.status(201).json(task);
	} catch (error) {
		console.log(error);
	}
};

export {create};