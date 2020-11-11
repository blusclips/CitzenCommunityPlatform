/** @format */

import React, { useState, useEffect } from 'react';

interface Submit {
	username: string;
	password: string;
}

interface Props {
	onSubmitField: ({ username, password }: Submit) => void;
	error: boolean;
}
const Template: React.FC<Props> = ({ onSubmitField, error }: Props) => {
	const [username, setUsernmae] = useState('');
	const [password, setPassword] = useState('');
	const [errorMessage, setErrorMessage] = useState('');

	useEffect(() => {
		if (error) {
			setErrorMessage('Incorrec Username/Password');
		}
	}, [error]);

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
					onChange={(e) => {
						setUsernmae(e.target.value);
						setErrorMessage('');
					}}
					className='form-control mt-3'
				/>
				<input
					placeholder='Password'
					type='password'
					value={password}
					onChange={(e) => {
						setPassword(e.target.value);
						setErrorMessage('');
					}}
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
