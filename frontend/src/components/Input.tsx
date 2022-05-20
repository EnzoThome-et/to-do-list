import React, { useContext, useState } from 'react';
import axios from 'axios';
import Context from '../context/context';
import { TaskContextType } from '../interface/task';

const Input = ({id}: {id: string}) => {
	const [textValue, setTextValue] = useState('');
	const [selectValue, setSelectValue] = useState('');
	const [error, setError] = useState(false);
	const { setTasks } = useContext(Context) as TaskContextType;
    
	return (
		<div className="form-outline mb-4 d-flex">
			<input type="text" className="form-control" onChange={(e) => setTextValue(e.currentTarget.value)}/>
			
			<select className="form-select w-50" onChange={(e) => setSelectValue(e.currentTarget.value)} >
				<option value="">Select...</option>
				<option value="pending">Pendente</option>
				<option value="inProgress">Em Andamento</option>
				<option value="ready">Pronto</option>
			</select>
			<button type="submit" className="btn btn-primary w-100 text-dark" onClick={async () => {
                
				if (textValue === '' || selectValue === '') {
					setError(true);
					return null;
				} else {
					const data = {
						text: textValue,
						status: selectValue,
					};
					setError(false);
					await axios({
						method: 'put',
						url: `http://localhost:3001/task/${id}`,
						data
					});
					const result = await axios.get('http://localhost:3001/tasks');
					console.log(result.data);
					await setTasks(result.data);
				}
                
			}}>Update Task</button>
			{error === true && <div className="alert alert-danger" role="alert">
                            Informe todos os valores!
			</div>}
		</div>
	);
};

export default Input;