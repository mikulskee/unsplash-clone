import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import MainTemplate from './templates/MainTemplate/MainTemplate';
import SearchTemplate from './templates/SearchTemplate/SearchTemplate';

const App = () => {
	return (
		<Router basename={process.env.PUBLIC_URL}>
			<Switch>
				<Route path="/" exact>
					<MainTemplate />
				</Route>
				<Route path="/search" exact>
					<SearchTemplate />
				</Route>
			</Switch>
		</Router>
	);
};

export default App;
