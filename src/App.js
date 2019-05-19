import React from 'react';
import './App.css';

import TicTacTable from './components/Tic-Tac/TicTacTable';
import GuessNumber from './components/GuessNumber/GuessNumber';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			component:''
		};
	}

	choosedGame = (game) => {
		let component=(game==='tic-tac')? <TicTacTable />:<GuessNumber />;
		this.setState({component:component});
	}

	render() {
		return (
			<div className="App">
				<h1>Choose a game:</h1>
				<button className="gameButton" onClick={()=>this.choosedGame('tic-tac')}>Tic Tac</button>
				<button className="gameButton" onClick={()=>this.choosedGame('guess-num')}>Guess number</button>
				{this.state.component}
			</div>
		);
	}
}

export default App;
