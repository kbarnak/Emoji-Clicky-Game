import React from "react";

export default function Tile(props) {

    return (
        <div className="game-space">
            <div className="image">

                <img src={props.src} alt="emoji" onClick={() => props.handleTileClick(props.id)} />

            </div>
        </div>
    )
}

