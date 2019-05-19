import React from 'react';

class GuessNumber extends React.Component {
    guess = () => {
        let nrFloat=(Math.random()*100);
        let nr=nrFloat-(nrFloat%1);
        const numGuessed=document.querySelector("number").value;
        (nr===numGuessed)? console.log("guessed"):console.log(nr+" was the right number");
    }

    render(){
        return(
            <div>
                <input id="number" placeholder="number"/>
                <button onClick={this.guess}>GUESS</button>
            </div>
        )
    };
}

export default GuessNumber;