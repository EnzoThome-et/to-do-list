import React from 'react';
import SearchBar from '../components/SearchBar';
import Table from '../components/Table';

const MainPage = () => {
	return (
		<>
			<h1> Todo List </h1>
			<SearchBar/>
			<Table />
		</>
	);
};

export default MainPage;