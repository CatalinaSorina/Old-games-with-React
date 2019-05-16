import React from 'react';

import './TicTacTable.css';

class TicTacTable extends React.Component {
    constructor(){
        super();
        this.state={

        };
    }

    render() {
        return (
            <div className="table">
                <div>
                    <button></button>
                    <button></button>
                    <button></button>
                </div>
                <div>
                    <button></button>
                    <button></button>
                    <button></button>
                </div>
                <div>
                    <button></button>
                    <button></button>
                    <button></button>
                </div>
            </div>
        );
    }
}

export default TicTacTable;