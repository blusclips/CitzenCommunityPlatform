/** @format */

import React from 'react';

interface Props {
	onChange: (value: string) => void;
	value: string;
}

const Select: React.FC<Props> = ({ onChange, value }) => {
	const onChangeSelect = (value: string) => {
		if (value !== 'Add Role') {
			onChange(value);
		}
	};

	return (
		<div className='form-group mb-4'>
			<div className='col-sm-12 border-bottom'>
				<select
					onChange={(e) => onChangeSelect(e.target.value)}
					className='form-control p-0 border-0'>
					<option>Add Role</option>
					<option>Social Worker</option>
					<option>Public Offical</option>
				</select>
			</div>
		</div>
	);
};

export default Select;
