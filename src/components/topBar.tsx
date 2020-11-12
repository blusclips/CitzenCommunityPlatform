/** @format */
/** @format */

import React from 'react';

interface Props {
	mode: 'Admin' | 'Worker' | 'Official';
	onButtonClick: () => void;
}

const TopBar: React.FC<Props> = ({ mode, onButtonClick }) => {
	return (
		<div className='page-breadcrumb bg-white'>
			<div className='row align-items-center'>
				<div className='col-lg-3 col-md-4 col-sm-4 col-xs-12'>
					<h4 className='page-title text-uppercase font-medium font-14'>
						{mode === 'Admin' ? 'Persons' : mode === 'Worker' ? 'Feedback' : ''}
					</h4>
				</div>
				<div className='col-lg-9 col-sm-8 col-md-8 col-xs-12'>
					<div className='d-md-flex'>
						<button
							onClick={onButtonClick}
							className='btn btn-danger  d-none d-md-block pull-right m-l-20 hidden-xs hidden-sm waves-effect waves-light'>
							{mode === 'Admin'
								? 'Add Person'
								: mode === 'Worker'
								? 'Feedback'
								: ''}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TopBar;
