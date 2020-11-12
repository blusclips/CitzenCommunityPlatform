/** @format */

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

// screens home, home, and messages

import LoginScreen from './screens/Login';
import HomeScreen from './screens/Home';
import WorkerScreen from './screens/Worker';
import OfficialScreen from './screens/Official';
import MessagesScreen from './screens/Messages';

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<Switch>
				<Route exact path='/' component={LoginScreen} />
				<Route exact path='/admin' component={HomeScreen} />
				<Route exact path='/worker/:id' component={WorkerScreen} />
				<Route exact path='/official/:id' component={OfficialScreen} />
				<Route path='/messages' component={MessagesScreen} />
			</Switch>
		</Router>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
