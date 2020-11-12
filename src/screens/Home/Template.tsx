/** @format */

import React, { useState } from 'react';
import Header from '../../components/header';
import Sidebar from '../../components/Sidebar';
import TopBar from '../../components/topBar';
import AddPersonForm from '../../components/molecules/addPerson';
import PersonTable from '../../components/molecules/personTable';
import PersonProps from '../../props/props';

interface Props {
	onSubmitPerson: ({ username, password, role }: PersonProps) => void;
	persons: [PersonProps];
}

const Template: React.FC<Props> = ({ onSubmitPerson, persons }) => {
	const [displayForm, setDisplayForm] = useState(false);

	const togglePersonField = () => {
		setDisplayForm(!displayForm);
	};

	const addPerson = (data: PersonProps) => {
		setDisplayForm(false);
		onSubmitPerson(data);
	};

	return (
		<div>
			<Header mode='Admin' />
			<Sidebar mode='Admin' />
			<div className='page-wrapper'>
				<TopBar mode='Admin' onButtonClick={togglePersonField} />
				{displayForm && <AddPersonForm onSubmitForm={addPerson} />}
				<PersonTable data={persons} />
			</div>
		</div>
	);
};

export default Template;
