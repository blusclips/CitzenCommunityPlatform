/** @format */

import React from 'react';
import Header from '../../components/header';
import Sidebar from '../../components/Sidebar';
import FeedbackTable from '../../components/molecules/feedBackTable';
import FeedbackProps from '../../props/feedback';

interface Props {
	onSendMessage: ({ message, workerId }: any) => void;
	feedback: FeedbackProps;
}

const Template: React.FC<Props> = ({ onSendMessage, feedback }) => {
	return (
		<div>
			<Header mode='Official' />
			<Sidebar mode='Official' />
			<div className='page-wrapper'>
				<FeedbackTable
					onSendMessage={onSendMessage}
					mode='Official'
					data={feedback}
				/>
			</div>
		</div>
	);
};

export default Template;
