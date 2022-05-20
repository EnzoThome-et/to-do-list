import React from 'react';
import { Tasks } from '../interface/task';
import TaskElement from './Task';

const Table = ({tasks}: Tasks) => {
	return (
		<table className="table w-50 p-3">
			<thead>
				<tr>
					<th scope="col">Task</th>
					<th scope="col">Status</th>
					<th scope="col">Date</th>
				</tr>
			</thead>
			{tasks.map(({_id, text, status, createdAt, updatedAt}) => <TaskElement key={_id} _id={_id} text={text} status={status} createdAt={createdAt} updatedAt={updatedAt} />)}
		</table>

	);
};

export default Table;