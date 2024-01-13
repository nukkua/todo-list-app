import { useState } from 'react';

export const useForm = (initialObject) => {
	const [formValue, setFormValue] = useState({
		...initialObject
	});

	const handleChange = ({ target }) => {
		const { name, value } = target;
		setFormValue({ ...formValue, [name]: value });
	};
	const handleReset = () => {
		setFormValue(initialObject);
	};

	return {
		...formValue,
		handleChange,
		handleReset
	};
};
