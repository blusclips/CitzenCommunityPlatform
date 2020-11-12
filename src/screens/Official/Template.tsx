/** @format */

import React, { useState } from 'react';
import Header from '../../components/header';
import Sidebar from '../../components/Sidebar';
import FeedbackTable from '../../components/molecules/feedBackTable';
import CsvDataTable from '../../components/molecules/csvDataTable';
import FeedbackProps from '../../props/feedback';

interface Props {
	onSendMessage: ({ message, workerId }: any) => void;
	feedback: FeedbackProps;
}

const Template: React.FC<Props> = ({ onSendMessage, feedback }) => {
	const [toggleFeedback, setToggleFeedback] = useState(false);
	const [displayFeedback, setDisplayFeedback] = useState([]);

	const displayData = (data: any) => {
		setDisplayFeedback(data);
		setToggleFeedback(true);
	};

	const navigateToDashboard = () => {
		setToggleFeedback(false);
	};

	return (
		<div>
			<Header mode='Official' />
			<Sidebar onDashboardPress={navigateToDashboard} mode='Official' />
			<div className='page-wrapper'>
				{!toggleFeedback && (
					<FeedbackTable
						onSendMessage={onSendMessage}
						mode='Official'
						data={feedback}
						onViewData={displayData}
					/>
				)}
				{toggleFeedback && <CsvDataTable data={displayFeedback} />}
			</div>
		</div>
	);
};

export default Template;
