import { useContext } from 'react';
import { useForm } from '../hooks/useForm';
import { TodoContext } from '../context/TodoContext';

export const TodoAdd = () => {
	const { handleNewTodo } = useContext(TodoContext);
	const { description, handleReset, handleChange } = useForm({
		description: ''
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		if (description.length <= 1) {
			return;
		}
		const newTodo = {
			id: new Date().getTime(),
			description,
			done: false
		};
		handleNewTodo(newTodo);
		handleReset();
	};
	return (
		<div className="my-4">
			<form onSubmit={handleSubmit} className="flex justify-between">
				<input
					placeholder="Enter your task"
					type="text"
					value={description}
					onChange={handleChange}
					name="description"
					className="flex-grow mr-2 p-2 border rounded"
				/>
				<button
					type="submit"
					className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
				>
					Add Task
				</button>
			</form>
		</div>
	);
};
