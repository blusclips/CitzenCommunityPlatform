/** @format */

import React from 'react';
import LoginTemplate from './Template';

const index: React.FC = () => {
	return <LoginTemplate onSubmitField={() => alert()} />;
};

export default index;
