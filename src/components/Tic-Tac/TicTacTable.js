import React from 'react';

import './TicTacTable.css';
import TableRow from './TableRow';

class TicTacTable extends React.Component {
    constructor(){
        super();
        this.state={
            player:"x"
        };
    }

    // componentDidMount(){
    //     this.checkWin();
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

        let playerClick=e.textContent;

        if(playerClick!==" "){
            if(col1A.textContent===col2A.textContent){
                if(col1A.textContent===col3A.textContent){
                    winDiv.classList.remove("none");
                    playground.classList.add("none");
                    console.log(col1A.textContent+" win");
                }
            }else if(col1A.textContent===col1B.textContent){
                if(col1A.textContent===col1C.textContent){
                    winDiv.classList.remove("none");
                    playground.classList.add("none");
                    console.log(col1A.textContent+" win");
                }
            }else if(col3A.textContent===col3B.textContent){
                if(col3A.textContent===col3C.textContent){
                    winDiv.classList.remove("none");
                    playground.classList.add("none");
                    console.log(col1A.textContent+" win");
                }
            }else if(col3A.textContent===col2B.textContent){
                if(col3A.textContent===col1C.textContent){
                    winDiv.classList.remove("none");
                    playground.classList.add("none");
                    console.log(col1A.textContent+" win");
                }
            }
        }else if(col3A.textContent!==" "){
            
        }else if(col3A.textContent!==" "){

        }
    }

    render() {
        return (
            <div className="table">
                <div id="win" className="win none">{this.state.player.toUpperCase()} WIN</div>
                <div id="playground">
                    <TableRow playerId="A" play={this.play}/>
                    <TableRow playerId="B" play={this.play}/>
                    <TableRow playerId="C" play={this.play}/>
                </div>
            </div>
        );
    }
}

export default TicTacTable;