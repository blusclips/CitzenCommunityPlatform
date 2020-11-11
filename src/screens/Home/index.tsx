/** @format */

import React, { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { useHistory } from 'react-router-dom';

import HomeTeplate from './Template';

const Index: React.FC = () => {
	const cookies = useCookies();
	let history = useHistory();
	useEffect(() => {
		if (cookies) {
			history.push('/login');
		}
	}, [cookies, history]);

	return <HomeTeplate />;
};

export default Index;
