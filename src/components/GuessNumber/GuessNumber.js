import React from 'react';

import styled from 'styled-components';

const Div=styled.div`
    display:flex;
    flex-direction:column;
    justify-content:inherit;
    align-items:center;
    margin:auto;
`;

const Input = styled.input`
    border-radius: 5%;
    width: 3rem;
    background: rgba(255, 158, 138);
    color:black;
    border: 0.1rem solid #C38172;
    color: #C38172;
    margin: 1rem;
    padding: 1rem;
    outline:none;
    font-family: 'Pangolin', cursive;

    :hover {
        background: transparent;
        border-color:#FF9E8A;
    }

    ::placeholder {
        color:#FFF3F1;
        text-align:center;
    }
`;

const Label= styled.label`
    background-color:transparent;
    color:darkred;
    width:30rem;
    margin: 1rem;
    padding: 1rem;
    font-size: 3rem;
    font-family: 'Raleway Dots', cursive;
`;

class GuessNumber extends React.Component {
    constructor(){
        super();
        this.state = {
            guessed:'Guess a number between 0 and 100!'
        }
    }

    guess = (e) => {
        let nrFloat=(Math.random()*100);
        let nr=nrFloat-(nrFloat%1);
        const numGuessed=Number(e.target.value);
        // (nr===numGuessed)? console.log("guessed"):console.log(nr+" was the right number, yours was "+numGuessed);
        let guessing=(nr===numGuessed)? "You guessed the number !!!":"Guess a number between 0 and 100!";
        this.setState({guessed:guessing});
    }

    render(){
        return(
            <Div>
                <Label>{this.state.guessed}</Label>
                <Input id="number" placeholder="guess" onChange={this.guess}/>
            </Div>
        )
    };
}

export default GuessNumber;