import React, { useContext } from 'react';
import Context from '../context/context';
import { TaskContextType } from '../interface/task';


const Select = () => {
	return (
		<select className="form-select w-50" >
			<option value="">Filter By...</option>
			<option value="alphabetical">Ordem Alfabética</option>
			<option value="pending">Pendente</option>
			<option value="inProgress">Em Andamento</option>
			<option value="ready">Pronto</option>
			<option value="date">Data de Criação</option>
		</select>

	);
};

export default Select;