/** @format */

import React, { useState } from 'react';
import Input from '../atoms/input';
import Button from '../atoms/button';
import Select from '../atoms/select';
import PersonProps from '../../props/props';

interface Props {
	onSubmitForm: ({ username, password, role }: PersonProps) => void;
}

const AddPersons: React.FC<Props> = ({ onSubmitForm }) => {
	const [username, setUserame]: any = useState('');
	const [password, setPassword]: any = useState('');
	const [role, setRole] = useState('');

	const onSubmit = () => {
		if (username !== '' && password !== '' && role !== '') {
			onSubmitForm({ username, password, role });
		}
	};

	return (
		<div className='col-12 text-center'>
			<div className='col-5 mt-5'>
				<Input
					placeholder='username'
					type='text'
					value={username}
					onChange={(value) => setUserame(value)}
				/>
			</div>
			<div className='col-5 mt-5'>
				<Input
					placeholder='password'
					type='text'
					value={password}
					onChange={(value) => setPassword(value)}
				/>
			</div>
			<div className='col-5 mt-3'>
				<Select value={role} onChange={(value) => setRole(value)} />
			</div>
			<div className='col-5 mt-5'>
				<Button text='Submit' onPress={onSubmit} />
			</div>
		</div>
	);
};

export default AddPersons;
