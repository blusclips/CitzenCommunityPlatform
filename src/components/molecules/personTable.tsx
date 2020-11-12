/** @format */

import React from 'react';

import PersonProps from '../../props/props';

interface Props {
	data: any;
}

const PersonTable: React.FC<Props> = ({ data }) => {
	return (
		<div className='row'>
			<div className='col-sm-12'>
				<div className='white-box'>
					<h3 className='box-title'> Persons </h3>
					<div className='table-responsive'>
						<table className='table'>
							<thead>
								<tr>
									<th className='border-top-0'>#</th>
									<th className='border-top-0'>Username</th>
									<th className='border-top-0'>Password</th>
									<th className='border-top-0'>Role</th>
								</tr>
							</thead>
							<tbody>
								{data.map((item: PersonProps, i: number) => (
									<tr>
										<td> {i + 1}</td>
										<td>{item.username}</td>
										<td>{item.password}</td>
										<td>{item.role} </td>
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
