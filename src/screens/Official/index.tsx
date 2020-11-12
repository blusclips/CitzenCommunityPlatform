/** @format */

import React, { useEffect } from 'react';

import WorkerTeplate from './Template';
import axios from 'axios';
import FeedbackProps from '../../props/feedback';
import { useState } from 'react';

const Worker: React.FC = () => {
	const [feedbackData, setFeedbackData]: any = useState([]);
	const sendOfficialMessage = async ({
		message,
		workerId,
	}: {
		message: string;
		workerId: string;
	}) => {
		try {
			await axios.post('/message', { message, workerId });
			alert('message sent');
		} catch (error) {}
	};

	useEffect(() => {
		const fetchFeedback = async () => {
			try {
				const { data }: { data: FeedbackProps } = await axios.get('/official');
				setFeedbackData(data);
			} catch (error) {}
		};
		fetchFeedback();
	}, []);

	return (
		<div
			id='main-wrapper'
			data-layout='vertical'
			data-navbarbg='skin5'
			data-sidebartype='full'
			data-sidebar-position='absolute'
			data-header-position='absolute'
			data-boxed-layout='full'>
			<WorkerTeplate
				onSendMessage={sendOfficialMessage}
				feedback={feedbackData}
			/>
		</div>
	);
};

export default Worker;
