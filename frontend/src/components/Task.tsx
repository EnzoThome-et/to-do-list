import React from 'react';
import { Task } from '../interface/task';

const Task = (Task: Task) => {
	return (
		<tbody>
			<td>{Task.text}</td>
			<td>{Task.status}</td>
			<td>{Task.createdAt}</td>
		</tbody>
	);
};

export default Task;