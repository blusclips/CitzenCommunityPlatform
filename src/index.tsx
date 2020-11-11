/** @format */

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';
import './index.css';
import reportWebVitals from './reportWebVitals';

// screens home, home, and messages

import LoginScreen from './screens/Login';
import HomeScreen from './screens/Home';
import MessagesScreen from './screens/Messages';

ReactDOM.render(
	<React.StrictMode>
		<CookiesProvider>
			<Router>
				<Switch>
					<Route exact path='/' component={HomeScreen} />
					<Route exact path='/login' component={LoginScreen} />
					<Route path='/messages' component={MessagesScreen} />
				</Switch>
			</Router>
		</CookiesProvider>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
