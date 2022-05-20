import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Context from './context';
import { Task } from '../interface/task';

const AppProvider = ({ children } : {children: React.ReactNode}) => {
	const [tasks, setTasks] = useState<Task[]>([]);
	const defaultState = {
		tasks,
		setTasks
	};

	return (
		<Context.Provider value={ defaultState }>
			{ children }
		</Context.Provider>
	);
};

AppProvider.propTypes = {
	children: PropTypes.node.isRequired,
};

export default AppProvider;