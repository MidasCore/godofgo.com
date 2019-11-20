import React from "react";

class PassView extends React.Component{
    constructor(props){
        super(props)
    }
    handleClick(e) {
        this.props.board.pass();
    }
    render() {
        return (
            <input id="pass-btn" type="button" value="Pass"
                   onClick={this.handleClick} />
        );
    }
}

export default PassView
