import { useEffect, useReducer } from 'react';
import { todoReducer } from '../reducers/todoReducer';

export const useTodo = () => {
	const init = () => JSON.parse(localStorage.getItem('todos'));
	const [todos, dispatch] = useReducer(todoReducer, [], init);

	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(todos));
	}, [todos]);

	const handleNewTodo = (todo) => {
		const action = {
			type: '[TODO] Add Todo',
			payload: todo
		};
		dispatch(action);
	};
	const handleDeleteTodo = (id) => {
		const action = {
			type: '[TODO] Delete Todo',
			payload: id
		};
		dispatch(action);
	};

	const handleToggleTodo = (id) => {
		const action = {
			type: '[TODO] Toggle Todo',
			payload: id
		};
		dispatch(action);
	};
	const handleClearAll = () => {
		const action = {
			type: '[TODO] Clear Todos'
		};
		dispatch(action);
	};

	return {
		todos,
		todosCount: todos.length,
		handleClearAll,
		todosPendingCount: todos.filter((todo) => !todo.done).length,
		handleDeleteTodo,
		handleNewTodo,
		handleToggleTodo
	};
};
// useReducer, compuesto de 3, la funcion reducer, en este caso mi todoReducer
