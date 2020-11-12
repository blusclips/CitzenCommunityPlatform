/** @format */

import React from 'react';
import {
	classificationPerRow,
	percentageClassification,
} from '../../utils/statistics';

interface Props {
	data: any;
}

const MessageTable: React.FC<Props> = ({ data }) => {
	const { family, health, unknown, total } = percentageClassification(data);
	return (
		<div className='row'>
			<div className='col-sm-12'>
				<div className='white-box'>
					<h3 className='box-title'> Percentage Classification</h3>
					<div className='table-responsive'>
						<table className='table'>
							<thead>
								<tr>
									<th>#</th>
									<th className='border-top-0'>Family</th>
									<th> Health</th>
									<th> Unknown</th>
									<th>Total</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<h6 className='page-title text-uppercase font-medium font-14'>
											Amount
										</h6>
									</td>
									<td>
										<h6> {family.num}</h6>
									</td>
									<td>
										<h6> {health.num}</h6>
									</td>
									<td>
										<h6> {unknown.num}</h6>
									</td>
									<td> {total} </td>
								</tr>
								<tr>
									<td>
										<h6 className='page-title text-uppercase font-medium font-14'>
											Percentage
										</h6>
									</td>
									<td>
										<h6> {family.percent}%</h6>
									</td>
									<td>
										<h6> {health.percent}%</h6>
									</td>
									<td>
										<h6> {unknown.percent}%</h6>
									</td>
									<td />
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>

			<div className='col-sm-12'>
				<div className='white-box'>
					<h3 className='box-title'> Csv Files Data </h3>
					<div className='table-responsive'>
						<table className='table'>
							<thead>
								<tr>
									<th className='border-top-0'>#</th>
									{Object.keys(data[0]).map((item) => (
										<th className='border-top-0'> {item} </th>
									))}
									<th> Classfication </th>
								</tr>
							</thead>
							<tbody>
								{data.map((item: any, i: number) => (
									<tr>
										<td> {i + 1}</td>
										{Object.values(item).map((value) => (
											<td> {value}</td>
										))}
										<td> {classificationPerRow(item)} </td>
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
