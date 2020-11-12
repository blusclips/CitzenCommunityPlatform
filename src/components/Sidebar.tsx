/** @format */
/** @format */

import React from 'react';

interface Props {
	mode: 'Admin' | 'Worker' | 'Official';
	onMessagePress?: () => void;
	onDashboardPress?: () => void;
}

const Sidebar: React.FC<Props> = ({
	mode,
	onMessagePress,
	onDashboardPress,
}) => {
	return (
		<aside className='left-sidebar bg-white' data-sidebarbg='skin6'>
			<div className='scroll-sidebar'>
				<nav className='sidebar-nav'>
					<ul id='sidebarnav'>
						<li onClick={onDashboardPress} className='sidebar-item pt-2'>
							<div
								className='sidebar-link waves-effect sidebar-link'
								aria-expanded='false'>
								<i className='far fa-clock' aria-hidden='true'></i>
								<span className='hide-menu'>Dashboard</span>
							</div>
						</li>
						{mode === 'Worker' && (
							<li className='sidebar-item pt-2' onClick={onMessagePress}>
								<div
									className='sidebar-link waves-effect sidebar-link'
									aria-expanded='false'>
									<i className='far fa-clock' aria-hidden='true'></i>
									<span className='hide-menu'>Messages</span>
								</div>
							</li>
						)}
						<li className='text-center p-20 upgrade-btn'>
							<a href='/' className='btn btn-block btn-danger text-white'>
								Logout
							</a>
						</li>
					</ul>
				</nav>
			</div>
		</aside>
	);
};

export default Sidebar;
