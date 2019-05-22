import React from 'react';

import styled from 'styled-components';

const Button = styled.button`
    background: transparent;
    border-radius: 3px;
    border: 2px solid palevioletred;
    color: palevioletred;
    margin: 0 1em;
    padding: 0.25em 1em;
`

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
                <Button onClick={this.guess}>GUESS</Button>
            </div>
        )
    };
}

export default GuessNumber;