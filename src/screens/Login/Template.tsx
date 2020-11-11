/** @format */

import React, { useState } from 'react';

interface Submit {
	username?: string;
	password?: string;
}

interface Props {
	onSubmitField: ({ username, password }: Submit) => void;
}
const Template: React.FC<Props> = ({ onSubmitField }: Props) => {
	const [username, setUsernmae] = useState('');
	const [password, setPassword] = useState('');
	const [errorMessage, setErrorMessage] = useState('');

	const onSubmitForm = () => {
		if (username === '') {
			setErrorMessage('Enter Username please');
			return;
		}
		if (password === '') {
			setErrorMessage('Enter Password please');
			return;
		}
		onSubmitField({ username, password });
	};

	return (
		<div className='text-center mt-5 align-center'>
			<h1 className='col-12'> Citizen Feedback Platform </h1>
			<div className='col-5'>
				<h1> {errorMessage} </h1>
				<input
					placeholder='Username'
					value={username}
					onChange={(e) => setUsernmae(e.target.value)}
					className='form-control mt-3'
				/>
				<input
					placeholder='Password'
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					className='form-control mt-3'
				/>
				<button
					onClick={() => onSubmitForm()}
					className='btn btn-small btn-primary btn-block mt-3'>
					{' '}
					Login{' '}
				</button>
			</div>
		</div>
	);
};

export default Template;
