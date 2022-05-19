import { Model as M, Document } from 'mongoose';

import { Model } from '../interfaces/model';

abstract class MongoModel<T> implements Model<T> {
	constructor(protected model: M<T & Document>) { }

	create = async (obj: T): Promise<T> => this.model.create({ ...obj });

	read = async (): Promise<T[]> => this.model.find();

	update = async (id: string, object: T): Promise<T | null> => 
		this.model.findByIdAndUpdate(id, { ...object }, { new: true });

	delete = async (id: string): Promise<T | null> => 
		this.model.findByIdAndDelete(id);
}

export default MongoModel;