/** @format */

import React, { useState } from 'react';
import axios from 'axios';
import LoginTemplate from './Template';
import { useHistory } from 'react-router-dom';

const Index: React.FC = () => {
	let history = useHistory();
	const [error, setError] = useState(false);
	const uploadLoginCredentialsForVarification = async ({
		username,
		password,
	}: {
		username: string;
		password: string;
	}) => {
		try {
			const { data } = await axios.post('/auth', { username, password });
			setError(false);
			if (data.admin) {
				history.push('/admin');
			} else if (data.role === 'Social Worker') {
				history.push(`/worker/${data._id}`);
			} else {
				history.push(`/official/${data._id}`);
			}
		} catch (error) {
			setError(true);
		}
	};

	return (
		<LoginTemplate
			onSubmitField={uploadLoginCredentialsForVarification}
			error={error}
		/>
	);
};

export default Index;
