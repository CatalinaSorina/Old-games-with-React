import React from 'react';

const Player = (props) => {
    return (
        <button id={props.playerId} className="button" onClick={props.play}>&nbsp;</button>
    );
}

export default Player;