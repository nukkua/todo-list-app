import { useTodo } from '../hooks/useTodo';
import { TodoContext } from './TodoContext';

export const TodoProvider = ({ children }) => {
	const {
		todos,
		handleClearAll,
		handleNewTodo,
		handleDeleteTodo,
		handleToggleTodo,
		todosCount,
		todosPendingCount
	} = useTodo();

	return (
		<TodoContext.Provider
			value={{
				todos,
				handleClearAll,
				handleNewTodo,
				handleDeleteTodo,
				handleToggleTodo,
				todosCount,
				todosPendingCount
			}}
		>
			{children}
		</TodoContext.Provider>
	);
};
