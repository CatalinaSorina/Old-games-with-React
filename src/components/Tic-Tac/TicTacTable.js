import React from 'react';

import './TicTacTable.css';
import TableRow from './TableRow';

class TicTacTable extends React.Component {
    constructor(){
        super();
        this.state={
            player:"x",
            buttons:[]
        };
    }

    // componentDidMount(){
    // }

    play = (e) => {
        const clickTarget=e.target;
        // console.log(clickTarget.textContent);
        if(clickTarget.textContent===" "){
            clickTarget.textContent=this.state.player;
            this.setState({player:(this.state.player==="x")?"o":"x"});
            this.checkWin(clickTarget);
        }else{
            alert("Place already tooked!");
        }
    }

    checkWin = (e) => {
        // debugger;

        const col1A=document.querySelector("#col1A");
        const col1B=document.querySelector("#col1B");
        const col1C=document.querySelector("#col1C");
        const col2A=document.querySelector("#col2A");
        const col2B=document.querySelector("#col2B");
        const col2C=document.querySelector("#col2C");
        const col3A=document.querySelector("#col3A");
        const col3B=document.querySelector("#col3B");
        const col3C=document.querySelector("#col3C");

        const winDiv=document.querySelector("#win");
        const playground=document.querySelector("#playground");
        const again=document.querySelector("#again");

        console.log(this.state.player);
        winDiv.textContent=`${this.state.player.toUpperCase()} WIN`;

        //===rowA===\\
        if((col1A.textContent===col2A.textContent) && (col1A.textContent===col3A.textContent) && (col1A.textContent!==" ") && (col2A.textContent!==" ") && (col3A.textContent!==" ")){
            winDiv.classList.remove("none");
            playground.classList.add("none");
            console.log(this.state.player+" win");
            again.classList.remove("none");
        }
        //===rowB===\\
        else if((col1B.textContent===col2B.textContent) && (col1B.textContent===col3B.textContent) && (col1B.textContent!==" ") && (col2B.textContent!==" ") && (col3B.textContent!==" ")){
            winDiv.classList.remove("none");
            playground.classList.add("none");
            console.log(this.state.player+" win");
            again.classList.remove("none");
        }
        //===rowB===\\
        else if((col1C.textContent===col2C.textContent) && (col1C.textContent===col3C.textContent) && (col1C.textContent!==" ") && (col2C.textContent!==" ") && (col3C.textContent!==" ")){
            winDiv.classList.remove("none");
            playground.classList.add("none");
            console.log(this.state.player+" win");
            again.classList.remove("none");
        }
        //===col1==\\
        else if((col1A.textContent===col1B.textContent) && (col1A.textContent===col1C.textContent) && (col1A.textContent!==" ") && (col1B.textContent!==" ") && (col1C.textContent!==" ")){
            winDiv.classList.remove("none");
            playground.classList.add("none");
            console.log(this.state.player+" win");
            again.classList.remove("none");
        }
        //===col2==\\
        else if((col2A.textContent===col2B.textContent) && (col2A.textContent===col2C.textContent) && (col2A.textContent!==" ") && (col2B.textContent!==" ") && (col2C.textContent!==" ")){
            winDiv.classList.remove("none");
            playground.classList.add("none");
            console.log(this.state.player+" win");
            again.classList.remove("none");
        }
        //===col3==\\
        else if((col3A.textContent===col3B.textContent) && (col3A.textContent===col3C.textContent) && (col3A.textContent!==" ") && (col3B.textContent!==" ") && (col3C.textContent!==" ")){
            winDiv.classList.remove("none");
            playground.classList.add("none");
            console.log(this.state.player+" win");
            again.classList.remove("none");
        }
        //===diagonala end===\\
        else if((col3A.textContent===col2B.textContent) && (col3A.textContent===col1C.textContent) && (col3A.textContent!==" ") && (col2B.textContent!==" ") && (col1C.textContent!==" ")){
            winDiv.classList.remove("none");
            playground.classList.add("none");
            console.log(this.state.player+" win");
            again.classList.remove("none");
        }
        //===diagonala begin===\\
        else if((col1A.textContent===col2B.textContent) && (col1A.textContent===col3C.textContent) && (col1A.textContent!==" ") && (col2B.textContent!==" ") && (col3C.textContent!==" ")){
            winDiv.classList.remove("none");
            playground.classList.add("none");
            console.log(this.state.player+" win");
            again.classList.remove("none");
        }
        //===no win===\\
        else if((col1A.textContent!==" ") && (col1B.textContent!==" ") && (col1C.textContent!==" ") && (col2A.textContent!==" ") && (col2B.textContent!==" ") && (col2C.textContent!==" ") && (col3A.textContent!==" ") && (col3B.textContent!==" ") && (col3C.textContent!==" ")){
            again.classList.remove("none");
            playground.classList.add("none");
        }
    }

    refresh = () => {
        console.log("play again");
    }

    render() {
        return (
            <div className="table">
                <div id="win" className="win none">WIN</div>
                <div id="playground">
                    <TableRow playerId="A" play={this.play}/>
                    <TableRow playerId="B" play={this.play}/>
                    <TableRow playerId="C" play={this.play}/>
                </div>
                <button id="again" className="none" onClick={this.refresh}>play again</button>
            </div>
        );
    }
}

export default TicTacTable;