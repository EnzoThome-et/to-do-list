import React, { useContext } from 'react';
import axios from 'axios';
import { Task, TaskContextType } from '../interface/task';
import Context from '../context/context';

const TaskElement = ({text, status, createdAt, updatedAt, _id}: Task) => {
	const { setTasks } = useContext(Context) as TaskContextType;
	return (
		<tbody>
			<td>{text}</td>
			<td>{status}</td>
			<td>{createdAt}</td>
			<img
				style={{cursor:'pointer'}}
				src="https://img.icons8.com/material-two-tone/24/000000/trash.png"
				onClick={ async () => {
					await axios({
						method: 'delete',
						url: `http://localhost:3001/task/${_id}`,
						
					});
					const result = await axios.get('http://localhost:3001/tasks');
					await setTasks(result.data);
				}}
			/>
			<img 
				style={{cursor:'pointer'}}
				src="https://img.icons8.com/material-sharp/24/000000/edit--v1.png"/>
		</tbody>
	);
};

export default TaskElement;