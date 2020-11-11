/** @format */

import React, { useState } from 'react';
import axios from 'axios';
import LoginTemplate from './Template';

const Index: React.FC = () => {
	const [error, setError] = useState(false);
	const uploadLoginCredentialsForVarification = async ({
		username,
		password,
	}: {
		username: string;
		password: string;
	}) => {
		try {
			const response = await axios.post('/auth', { username, password });
			setError(false);
			alert(JSON.stringify(response));
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
