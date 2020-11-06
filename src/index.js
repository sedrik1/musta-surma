import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Map from './Containers/Map/Map';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
	<React.StrictMode>
		<Map />
	</React.StrictMode>,
	document.getElementById('root')
);

serviceWorker.unregister();
