import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { GlobalStyles } from './theme/globalStyles';

import App from './App';
import store from './createStore';

ReactDOM.render(
	<React.StrictMode>
		<GlobalStyles />
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);
