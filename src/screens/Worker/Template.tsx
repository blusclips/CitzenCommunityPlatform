/** @format */

import React, { useState } from 'react';
import Header from '../../components/header';
import Sidebar from '../../components/Sidebar';
import TopBar from '../../components/topBar';
import FeedbackForm from '../../components/molecules/feedBackForm';
import FeedbackTable from '../../components/molecules/feedBackTable';
import MessagesTable from '../../components/molecules/messagesTable';
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
	const [displayMessages, setDisplayMessages] = useState(false);

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
	};

	const navigateToDashboard = () => {
		setDisplayMessages(false);
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
				{!displayMessages && (
					<FeedbackTable
						mode='Worker'
						onSendMessage={() => null}
						data={feedback}
					/>
				)}
				{displayMessages && <MessagesTable data={messages} />}
			</div>
		</div>
	);
};

export default Template;
