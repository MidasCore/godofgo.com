import React from "react";

import BoardIntersection from "./BoardIntersection";

class BoardView extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        var intersections = [];
        for (var i = 0; i < this.props.board.size; i++)
            for (var j = 0; j < this.props.board.size; j++)
                intersections.push(BoardIntersection({
                    board: this.props.board,
                    color: this.props.board.board[i][j],
                    row: i,
                    col: j,
                    onPlay: this.props.onPlay
                }));
        var style = {
            width: this.props.board.size * GRID_SIZE,
            height: this.props.board.size * GRID_SIZE
        };
        return <div style={style} id="board">{intersections}</div>
    }

}

export default BoardView
