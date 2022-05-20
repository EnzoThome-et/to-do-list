import React, {useContext, useEffect} from 'react';
import Form from '../components/Form';
import Table from '../components/Table';
import { useForm } from 'react-hook-form';
import Context from '../context/context';
import { Tasks } from '../interface/task';
import Select from '../components/Select';

const MainPage = () => {
	const { register, formState: { errors }, handleSubmit } = useForm();
	const {tasks} = useContext(Context) as Tasks;
	
	return (
		<main className="d-flex  flex-column justify-content-center align-items-center">
			<h1 className="text-center"> Todo List </h1>
			<Form handleSubmit={handleSubmit} register={register} errors={errors}/>
			<Select />
			<Table tasks={tasks}/>
		</main>
	);
};

export default MainPage;