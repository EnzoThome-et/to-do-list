import React, { useContext, useState } from 'react';
import axios from 'axios';
import { HookForm } from '../interface/hookForm';
import Context from '../context/context';


const Form = (props: HookForm) => {
	const {register, errors, handleSubmit} = props;
	const { setTasks } = useContext(Context);
	return (
		<form className="w-50 p-3" onSubmit={handleSubmit(async (data) => {
			await axios({
				method: 'post',
				url: 'http://localhost:3001/tasks',
				data
			});
			const result = await axios.get('http://localhost:3001/tasks');
			console.log(result.data);
			setTasks(result.data);
		})}>
			<div className="form-outline mb-4 d-flex">
				<input type="text" className="form-control" id="datatable-search-input" {...register('text', { required: true })}/>
				{errors.text?.type === 'required' && <span>Campo obrigatório!</span>}
				<select className="form-select w-50" {...register('status', { required: true })}>
					<option value="">Select...</option>
					<option value="pending">Pendente</option>
					<option value="inProgress">Em Andamento</option>
					<option value="ready">Pronto</option>
				</select>
				{errors.status?.type === 'required' && <span>Selecione uma opção!</span>}
				<button type="submit" className="btn btn-success w-100">Create Task</button>
			</div>
			
		</form>	
	);
};

export default Form;