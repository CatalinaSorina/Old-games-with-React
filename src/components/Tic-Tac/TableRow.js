import React from 'react';

import Player from './Player';

const TableRow = (props) => {
    return(
        <div>
            <Player playerId={"col1"+props.playerId} play={props.play}/>
            <Player playerId={"col2"+props.playerId} play={props.play}/>
            <Player playerId={"col3"+props.playerId} play={props.play}/>
        </div>
    );
}

export default TableRow;