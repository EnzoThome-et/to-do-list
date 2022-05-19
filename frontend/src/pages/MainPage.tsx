import React from 'react';
import SearchBar from '../components/SearchBar';
import Table from '../components/Table';

const MainPage = () => {
	return (
		<main className="d-flex  flex-column justify-content-center align-items-center">
			<h1 className="text-center"> Todo List </h1>
			<SearchBar/>
			<Table />
		</main>
	);
};

export default MainPage;