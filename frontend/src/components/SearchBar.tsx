import React from 'react';

const SearchBar = () => {
	return (
		<form>
			<div className="form-outline mb-4">
				<input type="text" className="form-control" id="datatable-search-input" />
				<select className="form-select">
					<option selected>Select...</option>
					<option value="pending">Pendente</option>
					<option value="inProgress">Em Andamento</option>
					<option value="ready">Pronto</option>
				</select>
				<button type="submit" className="btn btn-success"
					onClick={(e) => {
						e.preventDefault();
					}}
				>Create Task</button>
			</div>
		</form>	
	);
};

export default SearchBar;