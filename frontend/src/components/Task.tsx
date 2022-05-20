import React from 'react';
import { Task } from '../interface/task';

const TaskElement = ({text, status, createdAt, updatedAt, _id}: Task) => {
	return (
		<tbody>
			<td>{text}</td>
			<td>{status}</td>
			<td>{createdAt}</td>
		</tbody>
	);
};

export default TaskElement;