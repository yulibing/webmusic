import React from "react";
import ReactDom from "react-dom";

class Bottom extends React.Component {

    render() {
        return (
            <div>
                <p>{this.props.botName}{this.allNum.bind(this)}</p>
            </div>
        )
    }
    allNum(){
        this.props.allNumber
    }
}

export default Bottom;