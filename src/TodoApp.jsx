import { TodoAdd } from './components/TodoAdd';
import { TodoHeader } from './components/TodoHeader';
import { TodoList } from './components/TodoList';
import { TodoProvider } from './context/TodoProvider';

export const TodoApp = () => {
	return (
		<>
			<TodoProvider>
				<div className="container mx-auto p-4 sm:p-6 md:p-8">
					<TodoHeader />
					<TodoAdd />
					<TodoList />
				</div>
			</TodoProvider>
		</>
	);
};

// To make it responsive, i need the classNamees
// TAILWIND DEFINES SEVERAL BREAKPOINTS:
// sm (640px)
// md (768px)
// lg (1024px)
// xl (1280px)
// 2xl (1536px)

// THERE ARE KEYS TO MAKE SOMETHING RESPONSIVE
// 1. Width of the container
// 2. Font size
// 3. Inputs and buttons sizes
// 4. Spacing and aligments
