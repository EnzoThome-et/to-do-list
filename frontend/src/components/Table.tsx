import React from 'react';

const Table = () => {
	return (
		<table className="table">
			<thead>
				<tr>
					<th scope="col">Task</th>
					<th scope="col">Status</th>
					<th scope="col">Date</th>
				</tr>
			</thead>
			<tbody className="tableData">
			</tbody>
		</table>
	);
};

export default Table;