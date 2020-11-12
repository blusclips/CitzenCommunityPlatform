/** @format */

import React, { useState } from 'react';
import Input from '../atoms/input';
import CSVReader from 'react-csv-reader';
import Button from '../atoms/button';
import FeedbackProps from '../../props/feedback';

interface Props {
	onSubmitForm: ({ name, size, feedback }: FeedbackProps) => void;
}

const AddPersons: React.FC<Props> = ({ onSubmitForm }) => {
	const [name, setName]: any = useState('');
	const [size, setSize]: any = useState(0);
	const [feedback, setFeedback] = useState([]);

	const onSubmit = () => {
		if (name !== '' && size !== 0 && feedback.length > 0) {
			onSubmitForm({ name, size, feedback });
		}
	};

	const onUploadCsv = (data: any) => {
		let csvData: any = [];
		for (let i = 0; i < data.length; i++) {
			if (i !== 0 && i !== data.length - 1) {
				let obj: any = {};
				for (let m = 0; m < data[i].length; m++) {
					obj[data[0][m]] = data[i][m];
				}
				csvData.push(obj);
			}
		}
		setFeedback(csvData);
	};

	return (
		<div className='col-12 text-center'>
			<div className='col-5 mt-5'>
				<CSVReader onFileLoaded={onUploadCsv} />
			</div>
			<div className='col-5 mt-5'>
				<Input
					placeholder='Community Name'
					type='text'
					value={name}
					onChange={(value) => setName(value)}
				/>
			</div>
			<div className='col-5 mt-5'>
				<Input
					placeholder='Community Size'
					type='number'
					value={size}
					onChange={(value) => setSize(value)}
				/>
			</div>
			<div className='col-5 mt-5'>
				<Button text='Submit' onPress={onSubmit} />
			</div>
		</div>
	);
};

export default AddPersons;
