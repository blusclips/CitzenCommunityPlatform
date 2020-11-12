/** @format */

import React from 'react';

interface Props {
	data: any;
}

const MessageTable: React.FC<Props> = ({ data }) => {
	return (
		<div className='row'>
			<div className='col-sm-12'>
				<div className='white-box'>
					<h3 className='box-title'> Messages </h3>
					<div className='table-responsive'>
						<table className='table'>
							<thead>
								<tr>
									<th className='border-top-0'>#</th>
									<th className='border-top-0'> message </th>
								</tr>
							</thead>
							<tbody>
								{data.map((item: any, i: number) => (
									<tr>
										<td> {i + 1}</td>
										<td>{item.message}</td>
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

export default MessageTable;
