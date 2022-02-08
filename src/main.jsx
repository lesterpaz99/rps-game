import React from 'react';
import { GlobalContextProvider } from './context/globalContext';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
	<GlobalContextProvider>
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</GlobalContextProvider>,
	document.getElementById('root')
);
