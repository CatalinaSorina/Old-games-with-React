import React from 'react';
import './App.css';

import TicTacTable from './components/TicTacTable';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
		};
	}

	render() {
		return (
			<div className="App">
				<h1>Play Tic-Tac:</h1>
				<TicTacTable />
			</div>
		);
	}
}

export default App;
