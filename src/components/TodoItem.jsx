import { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';

export const TodoItem = ({ todo }) => {
	const { handleDeleteTodo, handleToggleTodo } = useContext(TodoContext);

	const handleChecked = () => {
		handleToggleTodo(todo.id);
	};
	return (
		<>
			<li className="flex items-center justify-center p-2 border-b last:border-b-0">
				<input
					checked={todo.done}
					onChange={handleChecked}
					className="mr-4 h-4 w-4"
					type="checkbox"
				/>
				<span className={`mr-4 ${todo.done ? 'line-through text-gray-500' : 'text-gray-800'}`}>
					{todo.description}
				</span>
				<button
					className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
					onClick={() => handleDeleteTodo(todo.id)}
				>
					Delete
				</button>
			</li>
		</>
	);
};
