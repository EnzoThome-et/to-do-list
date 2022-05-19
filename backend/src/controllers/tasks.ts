import {Request, Response} from 'express';
import * as tasksService from '../services/task';


const create = async (req: Request, res: Response) => {
	try {
		const data = req.body;
		const task = await tasksService.create(data);
		if ('error' in task) {
			return res.status(400).json(task);
		}
		return res.status(201).json(task);
	} catch (error) {
		return res.status(500).json(error);
	}
};


const getAll = async (_req: Request, res: Response) => {
	try {
		const task = await tasksService.getAll();
		return res.status(201).json(task);
	} catch (error) {
		return res.status(500).json(error);
	}
};

export {create, getAll};