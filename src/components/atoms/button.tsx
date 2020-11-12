/** @format */

import React from 'react';

interface Props {
	text: string;
	onPress: () => void;
}

const Button: React.FC<Props> = ({ text, onPress }) => {
	return (
		<button onClick={onPress} className='btn btn-sm btn-block btn-primary'>
			{' '}
			{text}{' '}
		</button>
	);
};

export default Button;
