import Cursor from "./components/common/Cursor.jsx";
import React from 'react';
import ReactDOM from 'react-dom';
import Main from "./pages/Main.jsx";
import './index.css';

ReactDOM.render(
	<React.StrictMode>
		<Main></Main>
		<Cursor></Cursor>
	</React.StrictMode>,
	document.getElementById('app')
);

if (import.meta.hot) {
	import.meta.hot.accept();
}
