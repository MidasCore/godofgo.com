import React from "react";
import config from '../../constants/game'

class BoardIntersection extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.props.sendToParent(this.props.data.row, this.props.data.col)
    }

    render() {
        var style = {
            top: this.props.data.row * config.GRID_SIZE,
            left: this.props.data.col * config.GRID_SIZE
        };
        var classes = "intersection";

        if (this.props.data.color !== config.EMPTY)
            classes += this.props.data.color == config.BLACK ? " black" : " white";

        return (
            <div onClick={this.handleClick} className={classes} style={style}></div>
        );
    }
}

export default BoardIntersection
