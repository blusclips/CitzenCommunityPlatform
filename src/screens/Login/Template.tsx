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
		<section className='spacer bg-light'>
			<div className='container'>
				<div className='row justify-content-md-center pt-5'>
					<div className='col-md-9 text-center mt-5'>
						<h2 className='text-dark mt-5'>
							<span className='font-weight-bold'>Citizen</span> &{' '}
							<span className='font-weight-bold'>Feedback</span> with{' '}
							<span className='border-bottom border-dark'> Platform </span>
						</h2>
					</div>

					<div className='col-md-6 text-center'>
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
			</div>
		</section>
	);
};

export default Template;
