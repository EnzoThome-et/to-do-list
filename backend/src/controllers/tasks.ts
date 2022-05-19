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

const update = async (req: Request, res: Response) => {
	try {
		const {id} = req.params;
		const data = req.body;
		const task = await tasksService.update(id, data);
		return task
			? res.status(201).json(task)
			: res.status(404).json({ error: 'task not found'});
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

const deleteOne = async (req: Request, res: Response) => {
	try {
		const { id } = req.params;
		const task = await tasksService.deleteOne(id);
		return res.status(200).json(task);
	} catch (error) {
		return res.status(500).json(error);
	}
};

export {create, getAll, deleteOne, update};