import Cursor from "./components/common/Cursor.jsx";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

ReactDOM.render(
	<React.StrictMode>
		<div>Main content here <a href="https://google.com">Link</a></div>
		<Cursor></Cursor>
	</React.StrictMode>,
	document.getElementById('app')
);

if (import.meta.hot) {
	import.meta.hot.accept();
}
