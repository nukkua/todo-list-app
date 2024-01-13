import { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';

export const TodoHeader = () => {
	const { todosCount, todosPendingCount, handleClearAll } = useContext(TodoContext);
	return (
		<>
			<h1 className="text-4xl font-bold mb-6 text-center text-gray-800">ToDo List App</h1>
			<p className="text-blue-600">All : {todosCount}</p>
			<p className="text-orange-500">Pending : {todosPendingCount}</p>
			<button
				className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
				onClick={handleClearAll}
			>
				Clear Completed
			</button>
		</>
	);
};
