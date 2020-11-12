/** @format */

import React from 'react';

import FeedbackProps from '../../props/feedback';

interface Props {
	data: any;
	mode: 'Worker' | 'Official';
	onSendMessage: ({ message, workerId }: any) => void;
}

const PersonTable: React.FC<Props> = ({ data, mode, onSendMessage }) => {
	return (
		<div className='row'>
			<div className='col-sm-12'>
				<div className='white-box'>
					<h3 className='box-title'> Feedback </h3>
					<div className='table-responsive'>
						<table className='table'>
							<thead>
								<tr>
									<th className='border-top-0'>#</th>
									<th className='border-top-0'>Community Name </th>
									<th className='border-top-0'>Community Size</th>
									<th className='border-top-0'>Feedback </th>
									{mode === 'Official' && <th className='border-top-0' />}
								</tr>
							</thead>
							<tbody>
								{data.map((item: FeedbackProps, i: number) => (
									<tr>
										<td> {i + 1}</td>
										<td>{item.name}</td>
										<td>{item.size}</td>
										<td>{item.feedback.length} </td>
										{mode === 'Official' && (
											<td>
												{' '}
												<button
													onClick={() =>
														onSendMessage({
															message: `Please revise the data for community ${item.name}`,
															workerId: item.workerId,
														})
													}
													className='btn btn-small btn-success text-white'>
													Revise data
												</button>
											</td>
										)}
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PersonTable;
