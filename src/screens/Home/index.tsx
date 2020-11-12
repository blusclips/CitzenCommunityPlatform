/** @format */

import React, { useState } from 'react';

import HomeTeplate from './Template';
import PersonProps from '../../props/props';
import axios from 'axios';
import { useEffect } from 'react';

const Index: React.FC = () => {
	const [persons, setPersons]: any = useState([]);

	const adminAddPerson = async (person: PersonProps) => {
		try {
			const { data }: { data: PersonProps } = await axios.post(
				'/person',
				person
			);
			const newPersons: any = [...persons];
			newPersons.push(data);
			setPersons(newPersons);
		} catch (error) {}
	};

	useEffect(() => {
		const fetchPersons = async () => {
			try {
				const { data }: { data: PersonProps } = await axios.get('/person');
				setPersons(data);
			} catch (error) {}
		};
		fetchPersons();
	}, [persons]);

	return (
		<div
			id='main-wrapper'
			data-layout='vertical'
			data-navbarbg='skin5'
			data-sidebartype='full'
			data-sidebar-position='absolute'
			data-header-position='absolute'
			data-boxed-layout='full'>
			<HomeTeplate persons={persons} onSubmitPerson={adminAddPerson} />
		</div>
	);
};

export default Index;
