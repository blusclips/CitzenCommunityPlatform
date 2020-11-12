/** @format */

import React, { useState } from 'react';
import Header from '../../components/header';
import Sidebar from '../../components/Sidebar';
import TopBar from '../../components/topBar';
import FeedbackForm from '../../components/molecules/feedBackForm';
import FeedbackTable from '../../components/molecules/feedBackTable';
import MessagesTable from '../../components/molecules/messagesTable';
import CsvDataTable from '../../components/molecules/csvDataTable';
import FeedbackProps from '../../props/feedback';

interface Props {
	onSubmitPerson: ({ name, size, feedback }: FeedbackProps) => void;
	onFetchMessages: () => void;
	feedback: FeedbackProps;
	messages: any;
}

const Template: React.FC<Props> = ({
	onSubmitPerson,
	feedback,
	messages,
	onFetchMessages,
}) => {
	const [displayForm, setDisplayForm] = useState(false);
	const [toggleFeedback, setToggleFeedback] = useState(false);
	const [displayMessages, setDisplayMessages] = useState(false);
	const [displayFeedback, setDisplayFeedback] = useState([]);

	const togglePersonField = () => {
		setDisplayForm(!displayForm);
	};

	const addPerson = (data: FeedbackProps) => {
		setDisplayForm(false);
		onSubmitPerson(data);
	};

	const fetchMessages = () => {
		onFetchMessages();
		setDisplayMessages(true);
		setToggleFeedback(false);
	};

	const navigateToDashboard = () => {
		setDisplayMessages(false);
		setToggleFeedback(false);
	};

	const displayData = (data: any) => {
		setDisplayFeedback(data);
		setToggleFeedback(true);
	};

	return (
		<div>
			<Header mode='Worker' />
			<Sidebar
				mode='Worker'
				onDashboardPress={navigateToDashboard}
				onMessagePress={fetchMessages}
			/>
			<div className='page-wrapper'>
				<TopBar mode='Worker' onButtonClick={togglePersonField} />
				{displayForm && <FeedbackForm onSubmitForm={addPerson} />}
				{!displayMessages && !toggleFeedback && (
					<FeedbackTable
						mode='Worker'
						onSendMessage={() => null}
						data={feedback}
						onViewData={displayData}
					/>
				)}
				{displayMessages && !toggleFeedback && (
					<MessagesTable data={messages} />
				)}

				{toggleFeedback && <CsvDataTable data={displayFeedback} />}
			</div>
		</div>
	);
};

export default Template;
