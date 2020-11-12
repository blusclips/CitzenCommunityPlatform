/** @format */

import React, { useEffect } from 'react';

import WorkerTeplate from './Template';
import axios from 'axios';
import FeedbackProps from '../../props/feedback';
import { useState } from 'react';

const Worker: React.FC = () => {
	const [feedbackData, setFeedbackData]: any = useState([]);
	const [messageData, setMessageData]: any = useState([]);
	const workerId = window.location.toString().split('/worker/')[1];
	const uploadCitzenFeedback = async (feedback: FeedbackProps) => {
		feedback['workerId'] = workerId;
		try {
			const { data }: { data: FeedbackProps } = await axios.post(
				'/feedback',
				feedback
			);
			const newFeedback: any = [...feedbackData];
			newFeedback.push(data);
			setFeedbackData(newFeedback);
		} catch (error) {}
	};

	const fetchMessages = async () => {
		try {
			const { data }: { data: any } = await axios.get(`/messages/${workerId}`);
			setMessageData(data);
		} catch (error) {}
	};

	useEffect(() => {
		const fetchFeedback = async () => {
			try {
				const { data }: { data: FeedbackProps } = await axios.get(
					`/feedback/${workerId}`
				);
				setFeedbackData(data);
			} catch (error) {}
		};
		fetchFeedback();
	}, [workerId]);

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
				onSubmitPerson={uploadCitzenFeedback}
				feedback={feedbackData}
				messages={messageData}
				onFetchMessages={fetchMessages}
			/>
		</div>
	);
};

export default Worker;
