import React from 'react';

const SearchBar = () => {
	return (
		<form className="w-50 p-3">
			<div className="form-outline mb-4 d-flex">
				<input type="text" className="form-control" id="datatable-search-input" />
				<select className="form-select w-50">
					<option selected>Select...</option>
					<option value="pending">Pendente</option>
					<option value="inProgress">Em Andamento</option>
					<option value="ready">Pronto</option>
				</select>
				<button type="submit" className="btn btn-success w-100"
					onClick={(e) => {
						e.preventDefault();
					}}
				>Create Task</button>
			</div>
		</form>	
	);
};

export default SearchBar;