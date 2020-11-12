/** @format */

import React from 'react';

interface Props {
	mode: 'Admin' | 'Worker' | 'Official';
}

const index: React.FC<Props> = ({ mode }) => {
	return (
		<header className='topbar navbar-dark bg-dark' data-navbarbg='skin5'>
			<nav className='navbar top-navbar navbar-expand-md navbar-dark'>
				<div className='navbar-header' data-logobg='skin6'>
					<a
						className='nav-toggler waves-effect waves-light text-dark d-block d-md-none'
						href='javascript:void(0)'>
						<i className='ti-menu ti-close'></i>
					</a>
				</div>
				<div
					className='navbar-collapse collapse'
					id='navbarSupportedContent'
					data-navbarbg='skin5'>
					<ul className='navbar-nav d-none d-md-block d-lg-none'>
						<li className='nav-item'>
							<a
								className='nav-toggler nav-link waves-effect waves-light text-white'
								href='javascript:void(0)'>
								<i className='ti-menu ti-close'></i>
							</a>
						</li>
					</ul>
					<ul className='navbar-nav ml-auto d-flex align-items-center'>
						<li>
							<a className='profile-pic' href='/admin'>
								<span className='text-white font-medium'> {mode} </span>
							</a>
						</li>
					</ul>
				</div>
			</nav>
		</header>
	);
};

export default index;
