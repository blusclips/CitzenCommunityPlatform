/** @format */

import React from 'react';

interface Props {
	type: 'text' | 'password' | 'number';
	onChange: (value: string | number) => void;
	value: string | number;
	placeholder?: string;
}

const Input: React.FC<Props> = ({ type, onChange, value, placeholder }) => {
	return (
		<input
			placeholder={placeholder}
			value={value}
			type={type}
			onChange={(e) => onChange(e.target.value)}
			className='form-control mt-3'
		/>
	);
};

export default Input;
